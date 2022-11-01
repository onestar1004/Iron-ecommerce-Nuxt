<template lang="pug">
.popupWrapper
  .popupBG(@click="$emit('close')")
  .popup
    .saveBoards
      .title Select a Board
      .board(v-for="(board, index) in userData.save_boards")
        .selector: input(type="radio" v-model="selectedBoard" :value="board")
        .input
          input(type="text" v-model="board.name" @input="saveUser({save_boards: userData.save_boards})" placeholder="Board Name")

        .remover: i.fas.fa-trash
      .adder: a.primaryBTN.small(@click="addBoard()") #[i.fal.fa-plus] New Board

      .clear(style="height: 15px;")

      .saver(v-if="selectedBoard"): a.primaryBTN(@click="saveProduct()") #[i.fal.fa-save] Save to {{selectedBoard.name}}
</template>

<script setup>
let {content} = defineProps(['content']);
let $emit = defineEmits(['save']);
let userData = $ref({});
userData = user();

let selectedBoard = $ref(null);

function addBoard() {
  userData.save_boards.push({
    id: generateID()
  })
}

function savedBoard() {
  let savedBoardID = null;
  let savedBoard = null;
  for(let product of userData.saved_products) {
    if(product.product_id == content.id) {
      savedBoardID = product.board_id;
      break;
    }
  }
  console.log(savedBoardID, 'saved board id');
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

if(savedBoard()) {
  selectedBoard = savedBoard();
}

async function saveProduct() {
  let alreadySaved = false;

  for(let saved of userData.saved_products) {
    if(saved.product_id == content.id) {
      alreadySaved = true;

      saved.board_id = selectedBoard.id;

      break;
    }
  }

  console.log(alreadySaved, 'already saved');

  if(!alreadySaved) {
    userData.saved_products.push({
      id: generateID(),
      board_id: selectedBoard.id,
      product_id: content.id,
    })
  }

  await saveUser({saved_products: userData.saved_products});

  $emit('save');
}
</script>