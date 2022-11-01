<template lang="pug">
#tabSaveDesigns.tabPanel.active
  .tabDsgn
    #tDgSvd.tDgSvd(v-if="!activeBoard")
      .tCmnCrdGrid
        .tCmnCard(v-for="(board, index) in userData.save_boards")
          .tCmnCdTop.flexBox
            .tCmnCdDrop
              .tCmnCdDpBtn(@click="dropdownActive = board")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031589/dots_fc78de.svg' alt='')
              ul.noList(v-if="dropdownActive == board")
                //- li
                //-   a(href='#') Delete all items
                li
                  a(@click="userData.save_boards.splice(index, 1); saveUser({save_boards: userData.save_boards});") Delete List
                //- li
                //-   a(href='#') Add items
          .tCmnCardMn(@click="activeBoard = board")
            .tCmnImgB
            .tCmnTxtB.flexBox.flexJcb.flexAic
              h4 {{board.name}}
              .flexBox.flexAic
                .iconBox
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/group_vpmxgc.svg' alt='')
                p.txtCenter {{boardItems(board).length}}
                  p Items
        .tCmnCard.tCmnCardNew(@click="addBoard()")
          .tCmnCdTop
          .tCmnCardMn
            .tCmnImgB.flexBox.flexJcc.flexAic
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031616/plus-white_poswyl.svg' alt='')
            .tCmnTxtB.txtCenter
              h4 NEW BOARD
      .btmBtnBox.flexBox
        //- button.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht NEW BOARD
        //- button.orTbBtnSm.btn.btnBg.btnWhiteBB DELETE ALL

    #tDgVew.tDgVew(v-if="activeBoard")
      .tCmnCrdGrid
        .loader(v-if="isLoading('grabbingProducts')"): i.fal.fa-spin.fa-spinner
        .none(v-if="!isLoading('grabbingProducts') && !products.length") No products in this collection
        .tCmnCard(v-for="(product, index) in products" v-if="!isLoading('grabbingProducts')")
          .tCmnCdTop.flexBox
            .tCmnCdDrop
              .tCmnCdDpBtn(@click="dropdownActive = product")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031589/dots_fc78de.svg' alt='')
              ul.noList(v-if="dropdownActive == product")
                li
                  a(@click="removeProduct(product)") Delete
          .tCmnCardMn: NuxtLink(:to="'/'+product.url"): img(:src="getImage({image: product.gallery[0].src, width: 900, height: 900, type: 'c_fill'})" v-if="product.gallery[0]" style="width: 100%;")
          .tCmnCardInfo.txtCenter
            h6.tCmnCdNm {{product.title}}
            p.tCmnCdPr
              //- span.oldPr $368.00
              span.newPr {{currency(product.price)}}
            //- .tCmnCdStar
            //-   img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/star-yellow_lylwvo.svg' alt='')
      .btmBtnBox.flexBox
        button.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht(@click="activeBoard = null;") #[i.fal.fa-arrow-left] VIEW ALL
        //- button.orTbBtnSm.btn.btnBg.btnWhiteBB ADD ITEMS  
</template>

<script setup>
let userData = $ref({});
userData = user();
let activeBoard = $ref(null);
let products = $ref([]);

let dropdownActive = $ref(null);

function boardItems(board) {
  console.log(userData.saved_products, 'products found');
  let items = [];
  for(let product of userData.saved_products) {
    if(product.board_id == board.id) {
      items.push(product);
    }
  }
  return items;
}

async function removeProduct(product) {
  for(let i in userData.saved_products) {
    let productData = userData.saved_products[i];
    if(productData.product_id == product.id) {
      userData.saved_products.splice(i, 1);
      break;
    }
  }

  for(let i in products) {
    if(product.id == products[i].id) {
      products.splice(i, 1);
      break;
    }
  }

  saveUser({saved_products: userData.saved_products});
}

async function addBoard() {
  let details = await Swal.fire({
    icon: 'question',
    title: 'Board Name?',
    html: `
      <label>Name
        <input type="text" id="boardName" placeholder="Board Name">
      </label>
    `,
    confirmButtonText: 'Add Board',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    preConfirm: () => {
      return new Promise(resolve => {
        resolve({
          name: document.getElementById('boardName').value,
        })
      })
    }
  });
  if(!details.isConfirmed) return;
  details = details.value;

  console.log(details);

  userData.save_boards.push({
    id: generateID(),
    name: details.name,
  });

  saveUser({save_boards: userData.save_boards});
}

watch($$(activeBoard), async () => {
  startLoad('grabbingProducts');
  let product_ids = [];

  for(let item of boardItems(activeBoard)) {
    product_ids.push(item.product_id);
  }

  products = await fetchPost('/api/get-specific-products', {product_ids: product_ids});
  endLoad('grabbingProducts');
})
</script>