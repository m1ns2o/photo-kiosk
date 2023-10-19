<!-- <script lang="ts">
export default {
  props: {
    layoutWidth: String,
    layoutHeight: String, // 전달받을 CSS 변수의 prop 정의
    qr: String,
    borderwidth: String
  }
}
</script> -->
<script setup lang="ts">
// import cv from 'opencv.js'
import { ref } from 'vue'
import { usePhotosetStore } from '@/stores/photoset'
import QrcodeVue, { Level, RenderAs } from 'qrcode.vue'


const value = ref('qrcode')
const level = ref<Level>('M')
const renderAs = ref<RenderAs>('svg')

const img = usePhotosetStore()
// const applyGrayscaleFilter = async (imageElementId)=> {
//     let src = cv.imread(imageElementId)
//     let dst = new cv.Mat()
//     cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY)
//     cv.imshow(imageElementId, dst)
//     src.delete()
//     dst.delete()
//   }
const props = defineProps({
  qr: String,
})
</script>

<template>
  <div class="layout" :style="{backgroundColor:img.backgroundColor }">
    <div class="head">
        hello World
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[0]" alt=""  v-show="!img.grayScale"/>
        <img :src="img.imgSrc[0]+'/grayscale'" alt=""  v-show="img.grayScale"/>
        <!-- v-show로 그레이 스케일 뷰 갈아끼기
         -->
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[1]" alt=""  v-show="!img.grayScale"/>
        <img :src="img.imgSrc[1]+'/grayscale'" alt=""  v-show="img.grayScale"/>
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[2]" alt=""  v-show="!img.grayScale"/>
        <img :src="img.imgSrc[2]+'/grayscale'" alt=""  v-show="img.grayScale"/>
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[3]" alt=""  v-show="!img.grayScale"/>
        <img :src="img.imgSrc[3]+'/grayscale'" alt=""  v-show="img.grayScale"/>
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[4]" alt=""  v-show="!img.grayScale"/>
        <img :src="img.imgSrc[4]+'/grayscale'" alt=""  v-show="img.grayScale"/>
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[5]" alt=""  v-show="!img.grayScale"/>
        <img :src="img.imgSrc[5]+'/grayscale'" alt=""  v-show="img.grayScale"/>
    </div>
    <div class="footer">
        <!-- <img class="qr" src="qr" alt=""> -->
        <qrcode-vue :value="qr" :level="level" :render-as="renderAs" v-show="qr" class="qr"/>
    </div>
  </div>
  <!-- <button @click="applyGrayscaleFilter('img1')">Apply Grayscale</button> -->
</template>

<style lang="scss" scoped>

.layout {
    // margin-left: 200px;
    width: 400px;
    height: 600px;
    // background-color: black;
    // gap: 5px;
    padding: 5px;
    display: flex;
    // align-items: ;
    align-content: center;
    flex-flow: column wrap;
    // display: grid;
    // grid-template-rows: repeat(3, 1fr);
    // grid-template-columns: repeat(2, 1fr);
    // margin: 5px;
    .img_box{
        margin: 5px 3px 0px 3px;
        // border: 1px solid black;
        width: 180px;
        height: 180px;
        background-color: aliceblue;
    }
    .head{
        padding: 4px;
        height: 30px;
        color: white;
        line-height: 30px;
    }
    .footer {
        height: 30px; 
    }
    .qr{
        width: 30px;
        height: 30px;
        // background-color: aquamarine;
        // right: inherit;
        margin-top: 2px;
        margin-right: 3px;
        float: right;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
}

img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
// margin: auto;
}

</style>
