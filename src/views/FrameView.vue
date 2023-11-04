<script setup lang="ts">
import Layout6 from '@/components/Layout-Frame6.vue'
import Card from '@/components/Card-View.vue'
import Navbar from '@/components/navigation-view.vue'
import { usePhotosetStore } from '@/stores/photoset'
import { ref } from 'vue'
import router from '@/router'

const photoset = usePhotosetStore()

const layoutWidth = ref('160px')
const layoutHeight = ref('240px')
const qr = ref('')
const borderWidth = ref('5px')

const img = "http://127.0.0.1:8008/static/4x1.jpg"

const selectItem = (index: number) => {
  router.push('count')
  // photoset.frame = await index
  // console.log(photoset.imgLength[photoset.frame])
  photoset.resetArray(index)
  console.log("photoset.frame : "+photoset.frame)
  // console.log(photoset.imgSrc.value)
}
</script>
<template>
  <div class="main">
    <card @click="selectItem(0)" :img="'http://127.0.0.1:8008/static/4x1.jpg'">
    </card>
    <card @click="selectItem(1)" :img="'http://127.0.0.1:8008/static/2x2.jpg'">
    </card>
    <card @click="selectItem(2)" :img="'http://127.0.0.1:8008/static/3x2.jpg'">
    </card>
    <card @click="selectItem(3)">
      <Layout6
        :layoutWidth="layoutWidth"
        :layoutHeight="layoutHeight"
        :qr="qr"
        :borderwidth="borderWidth"
      />
      <h2>₩5000</h2>
    </card>
  </div>
  <navbar></navbar>
</template>

<style lang="scss" scoped>
/* 
.card {
    background-color: gray;
    height: 400px;
    width: 10%;
} */

// h1,
// h3 {
// 	color: white;
// }

// h1 {
// 	padding-top: 20%;
// 	padding-bottom: 10%;
//     margin-bottom: 0px;
// 	font-size: 7em;
// }

// h3 {
// 	font-size: 3em;
// }

h2 {
  width: 130px;
  height: 40px;
  line-height: 40px;
  background-color: #303030;
  color: white;
  border-radius: 20px;
}

// .card {
//   width: 300px;
//   height: 400px;
//   background-color: white;
//   // border: 1px solid gray;
//   position: relative;
//   overflow: hidden;
//   clip-path: polygon(0 0, 100% 0, 100% 350px, 250px 100%, 0 100%);
//   display: flex;
//   flex-direction: column;
//   // justify-content: space-between;
//   align-items: flex-end;
//   /* drop-shadow: 23px 50px 8px 0px rgba(0, 0, 0, 0.3); */
// }

// .content {
//   width: 100%;
//   height: 100%;
//   padding: 50px;
//   font-size: 18px;
//   text-align: center;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-end;

//   gap: 50px;
//   // padding-top: 40px;
//   padding-bottom: 14px;
//   // margin-bottom: 0px;
// }
// .shadow {
//   filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.1));
// }
// .edge {
//   box-sizing: none;
//   width: 50px;
//   height: 50px;
//   clip-path: polygon(0 0, 0 100%, 100% 0);
//   background-color: black;
//   position: absolute;
//   bottom: 0;
// }

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  height: 90%;
}

// ----------------------------------------------------------------
</style>
