<template lang="pug">
.ProductOptions(:class="productOptionsClass()" :key="refreshKey")

  SaveProductPopup(v-if="savingProduct" @close="savingProduct = false" @save="savingProduct = false; refreshUser();" :content="content")

  .prodOptn
    .pOptnCard(v-for="(option, index) in filteredOptions()" :class="[optionClass(option), {'hiddenOption': !isAdmin() && hiddenOptions.includes(option.id), 'adminFaded': isAdmin() && hiddenOptions.includes(option.id)}]")
      .accHead(@click="openOption(option)" :class="{'active': openOptions.includes(option.id)}")
        .headInner.flexBox.flexAic
          span.numberBox {{optionNumber(option)}}
          h5.opName {{option.label}} #[span.required(v-if="option.required") *]

          .opInfo(@click="selectActiveTooltip(option); openOption(option)" v-if="option.explainer")
            img.opInfoBtn.showMsg(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
            span.infoHover Click for more information
            .infoMsg.fontSerif(v-if="activeTooltip == option.id" v-html="option.explainer")

          p.opOnInfo: span.fw600(v-if="option.selection") {{option.selection.label}} #[span.price(v-if="option.selection.price") {{currency(option.selection.modified_price || option.selection.price)}}]

      .accList(v-if="openOptions.includes(option.id)")

        .groupedOptions
          //- pre {{optionGroups(option)}}
          .group(v-for="group in optionGroups(option)")
            .groupName(v-if="group && group.name") {{group.name}}

            .opSelect(v-if="option.type == 'Dropdown'")
              select(v-model="option.selection" @change="openOption(option); checkInvalidChoices(); calcPrices(); $emit('change', content);")
                option(:value="undefined" v-if="option.selection == undefined") {{(option.grouping_enabled && group) ? group.name : '---'}}
                option(v-for="choice in filteredChoices(option, group)" :value="choice") {{choice.label}} {{(choice.modified_price || choice.price) ? ' - ' + currency(choice.modified_price || choice.price) : ''}}

            .opList(v-if="option.type == 'Regular'")
              .opCd(v-for="choice in filteredChoices(option, group)" @click="option.selection = choice; openOption(option); checkInvalidChoices(); calcPrices(); $emit('change', content);" :class="{'selected': option.selection && option.selection.id == choice.id}")
                p.opCdTitle {{choice.label}}
                .opCdImg(v-if="choice.image"): img(:src="getImage({image: choice.image, width: 150, type: 'c_fill'})")
                .price(v-if="choice.price || choice.modified_price" style="text-align: center;") {{currency(choice.modified_price || choice.price)}}

        .supplementalExplainer(v-if="option.supplemental_explainer")
          .html(v-html="option.supplemental_explainer")

  .prodInfo
    .prodPrice.flexBox.flexJcc.flexAic
      p.fontSerif As Configured:
      h3 {{currency(totalPrice(filteredOptions()) * quantity)}}
    .selectBox.flexBox.flexJcb.flexAic
      div
        select.cSelect(v-model="quantity")
          option(:value="n" v-for="n in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]") {{n}}
      div(v-if="!savedBoard()")
        label.saveBtn(@click="saveForLater()")
          span Save for later
      div(v-if="savedBoard()")
        label.saveBtn(@click="saveForLater()")
          span Saved to {{savedBoard().name}}
    .btnbox
      button.btn.btnBg.btnBlGry.btnTxtWht(@click="addToCart()" v-if="!isLoading('adding')") ADD TO CART
      button.btn.btnBg.btnBlGry.btnTxtWht(v-if="isLoading('adding')") #[i.fas.fa-spin.fa-spinner]
      button.btn.btnBg.btnGry.btnTxtWht(@click="showCustom = true; checkInvalidChoices(); calcPrices(); $emit('showCustom', showCustom); $emit('change', content);" v-if="!showCustom && !content.hide_custom") CUSTOMIZE IT FURTHER
      button.btn.btnBg.btnGry.btnTxtWht(@click="showCustom = false; checkInvalidChoices(); calcPrices(); $emit('showCustom', showCustom); $emit('change', content);" v-if="showCustom") #[i.fal.fa-arrow-left] BACK TO SIMPLE VIEW

    //- TODO: Delivery Estimate Process + Affirm Integration
    //- .footTxt.txtCenter
    //-   p.fontSerif Estimated Delivery by June 10-15. 
    //-     a(href='#') View Shipping Policies
    //-   p.fontSerif Pay over time with Affirm. 
    //-     a(href='#') Prequalify now
</template>

<script setup>
let {content} = defineProps(['content']);
let userData = $ref({});
userData = user();
let $emit = defineEmits(['change']);

let openOptions = $ref([]);
let quantity = $ref(1);
let showCustom = $ref(false);
let activeTooltip = $ref(null);

let refreshKey = $ref(0);

watch($$(quantity), newQuantity => {
  if(newQuantity <= 0) newQuantity = 1;
  quantity = parseFloat(newQuantity);
})

// FUNCTIONS
function productOptionsClass() {
  if(content && content.title) {
    return `Product-${content.title.replace(/ /ig, '')}`;
  } else {
    return 'UntitledProduct';
  }
}

function optionClass(option) {
  if(option.label) {
    return `Option-${option.label.replace(/ /ig, '')}`;
  } else {
    return 'UntitledOption';
  }
}

function optionGroups(option) {
  let groups = [];

  if(option.grouping_enabled) {
    for(let choice of option.choices) {

      let hasGroup = false;
      for(let group of groups) {
        if(group.name == choice.group) {
          hasGroup = true;
        }
      }

      if(!hasGroup) {
        groups.push({name: choice.group});
      }
    }
  } else {
    groups = [{name: null}];
  }

  return groups;
}

async function calcPrices() {
  // Set Base Prices
  for(let option of filteredOptions()) {
    for(let choice of option.choices) {
      if(!choice.price) choice.price = 0;
      choice.modified_price = parseFloat(choice.price);
      choice.formula = [];
    }
  }

  // Calculate Final Price
  for(let option of filteredOptions()) {

    let modifiers = null;

    let hasSelectionModifiers = false;
    if(option.selection && option.selection.modifiers && option.selection.modifiers.length) hasSelectionModifiers = true;
    if(hasSelectionModifiers) {
      modifiers = option.selection.modifiers;
    }

    if(option.modifiers.length && !hasSelectionModifiers) {
      if(!option.selection) option.selection = {}
      modifiers = option.modifiers;
    }

    if(modifiers && modifiers.length) {
      for(let modifier of modifiers) {
        let allRulesMet = true;

        if(modifier.rules && modifier.rules.length) {
          if(!ruleResults(modifier.rules)) allRulesMet = false;
        }

        if(!allRulesMet) continue;

        for(let modifiedOption of filteredOptions()) {
          if(modifiedOption.id == modifier.option_id) {
            for(let choice of modifiedOption.choices) {
              let formula = `${parseFloat(choice.modified_price)} ${modifier.operator} ${modifier.value}`;
              choice.formula.push(formula);
              choice.modified_price = eval(formula);
            }
          }
        }
      }
    }
  }

}
calcPrices();

let hiddenOptions = $ref([]);
for(let selection of content.preselections) {
  if(selection.hidden) hiddenOptions.push(selection.option_id);
}
async function handlePreselections() {
  for(let selection of content.preselections) {
    if(selection.hidden) hiddenOptions.push(selection.option_id);

    if(!selection.option_id) continue;
    if(!selection.choice_id) continue;

    for(let option of content.options) {
      if(option.id == selection.option_id) {
        for(let choice of option.choices) {
          if(choice.id == selection.choice_id) {
            option.selection = choice; 
            checkInvalidChoices();
            calcPrices();
            refreshKey++;
            $emit('change', content);
          }
        }
      }
    }
  }
}
handlePreselections();

if(useRoute().query.saved_id) {
  let savedOptions = await fetchPost('/api/get-saved-options', {saved_id: useRoute().query.saved_id});

  for(let option of content.options) {
    for(let savedOption of savedOptions) {
      if(savedOption.id == option.id && savedOption.selection) {
        option.selection = savedOption.selection;
      }
    }
  }
}

let savingProduct = $ref(false);
async function saveForLater() {

  if(!user()) {
    let details = await Swal.fire({
      icon: 'question',
      title: 'Where should we send the link?',
      html: `
        <label>Email
          <input type="email" id="savedEmail">
        </label>
      `,
      confirmButtonText: 'Save Configuration',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        return new Promise(resolve => {
          resolve({
            email: document.getElementById('savedEmail').value,
          })
        })
      }
    });
    if(!details.isConfirmed) return;
    details = details.value;


    startLoad('saving');

    await fetchPost('/api/save-for-later', {content: content, email: details.email});

    endLoad('saving');
  } else {
    startLoad('saving');

    savingProduct = true;

    // await fetchPost('/api/save-for-later', {content, email: user().email});

    endLoad('saving');
  }
}

function savedBoard() {
  let savedBoardID = null;
  let savedBoard = null;
  if(!userData) return;
  for(let product of userData.saved_products) {
    if(product.product_id == content.id) {
      savedBoardID = product.board_id;
      break;
    }
  }
  if(savedBoardID) {
    for(let board of userData.save_boards) {
      if(board.id == savedBoardID) {
        savedBoard = board;
        break;
      }
    }
  }
  return savedBoard;
}

function getOptionValue(option_id) {
  let optionValue = null;

  for(let option of content.options) {
    if(option.id == option_id) {
      if(option.selection && option.selection.label) {
        optionValue = option.selection.label;
      }
      break;
    }
  }

  return optionValue;
}

function ruleResults(rules) {
  let show = true;

  if(!rules) return true;

  for(let rule of rules) {
    let allConditionsMet = true;

    for(let item of rule.conditions) {
      item.conditionMet = false;

      let optionValue = getOptionValue(item.option_id);
      let conditionValues = item.value.split('\n');

      if(item.condition == 'Contains') {
        if(conditionValues.includes(optionValue)) {
          item.conditionMet = true;
          break;
        }
      }

      if(item.condition == 'Not Contains') {
        if(!conditionValues.includes(optionValue)) {
          item.conditionMet = true;
          break;
        }  
      }
    }

    for(let item of rule.conditions) {
      if(!item.conditionMet) allConditionsMet = false;
    }

    if(allConditionsMet) {
      if(rule.operator == 'Exclude' || rule.operator == 'Disable') {
        show = false;
      }
      if(rule.operator == 'Include' || rule.operator == 'Enable') {
        show = true;
      }
    }
  }

  return show;
}

function checkInvalidChoices() {
  for(let option of filteredOptions()) {
    let validChoices = filteredChoices(option);
    if(option.selection && option.selection.label) {
      let isValidChoice = false;
      for(let choice of validChoices) {
        if(choice.id == option.selection.id) {
          isValidChoice = true;
          break;
        }
      }
      if(!isValidChoice) {
        delete option.selection;
      }
    }
  }
}

function filteredChoices(option, group) {
  return option.choices.filter(choice => {
    let showChoice = ruleResults(choice.rules);

    if(!showCustom && choice.custom_choice) {
      showChoice = false;
    }

    if(showCustom && choice.hide_when_custom) {
      showChoice = false;
    }

    if(option.grouping_enabled) {
      if(group && choice.group != group.name) showChoice = false;
    }

    return showChoice;
  })
}

function filteredOptions() {
  return content.options.filter(option => {
    let showOption = ruleResults(option.rules);

    if(!showCustom && option.custom_option) {
      showOption = false;
    }

    if(showCustom && option.hide_when_custom) {
      showOption = false;
    }

    return showOption;
  });
}

let visibleOptions = () => {
  return filteredOptions().filter(option => {
    let showOption = true;
    if(hiddenOptions.includes(option.id)) showOption = false;
    return showOption;
  })
}

function optionNumber(option) {
  for(let i in visibleOptions()) {
    let optionData = visibleOptions()[i];
    if(optionData.id == option.id) {
      return parseFloat(i) + 1;
    }
  }

  return null;
}

function selectActiveTooltip(option) {
  if(activeTooltip != option.id) {
    activeTooltip = option.id;
  } else {
    activeTooltip = null;
  }
}

function openOption(option) {
  if(!openOptions.includes(option.id)) {
    openOptions.push(option.id);
  } else {
    openOptions.splice(openOptions.indexOf(option.id), 1);
  }
}

async function addToCart() {
  // Check if all required options are chosen
  for(let option of filteredOptions()) {
    if(option.required && !option.selection) {
      Swal.fire({
        icon: 'error',
        text: `${option.label} is required`,
      });

      return;
    }
  }

  startLoad('adding');

  let saved_id = null;
  let saveResponse = await fetchPost('/api/save-for-later', {content: content});
  if(saveResponse && saveResponse.saved_id) {
    saved_id = saveResponse.saved_id;
  }

  // Add cart to system & session
  let cartItem = {
    title: content.title,
    url: content.url,
    options: filteredOptions(),
    price: content.price,
    quantity: parseFloat(quantity) || 1,
    image: content.gallery[0].src,
    saved_id,
    product_id: content.id,
  }
  let addResponse = await fetchPost('/api/add-to-cart', {item: cartItem});

  if(!addResponse.error) {
    navigateTo('/cart');
  } else {
    Swal.fire({
      icon: 'error',
      text: addResponse.error,
    })
  }

  endLoad('adding');
}
</script>