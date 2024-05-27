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
// const props = defineProps({
//   qr: String,
// })
// const qr = inject('qr_link')
</script>

<template>
  <div class="layout" :style="{backgroundColor:img.backgroundColor }">
    <div class="head">
        
    </div>
    <div class="img_box_large">
        <img :src="img.imgSrc[0]" alt=""  v-show="!img.grayScale"/>
        <img :src="img.imgSrc[0]+'/grayscale'" alt=""  v-show="img.grayScale"/>
        <!-- v-show로 그레이 스케일 뷰 갈아끼기
         -->
    </div>
    <div class="row2">
        <div class="img_box">
        <img :src="img.imgSrc[1]" alt=""  v-show="!img.grayScale"/>
        <img :src="img.imgSrc[1]+'/grayscale'" alt=""  v-show="img.grayScale"/>
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[2]" alt=""  v-show="!img.grayScale"/>
        <img :src="img.imgSrc[2]+'/grayscale'" alt=""  v-show="img.grayScale"/>
    </div>
    </div>
    
    <div class="footer">
        <qrcode-vue :value="img.qr" :level="level" :render-as="renderAs" :margin="1" v-show="img.qr" class="qr"/>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.layout {
    // margin-left: 200px;
    width: 400px;
    height: 600px;
    padding: 5px;
    margin: 5px;
    .img_box{
        // margin: 5px 3px 0px 3px;
        // border: 1px solid black;
        width: 180px;
        height: 180px;
        background-color: aliceblue;
    }
    .img_box_large{
        margin: 7px 10px 10px 10px;
        width: 370px;
        height: 370px;
        background-color: aliceblue;
    }
    .row2{
        display: flex;
        gap: 10px;
        justify-content: center;
        // align-content: center;
        // margin-left: auto;
        // justify-content: space-between;
    }
    .head{
        // padding: 4px;
        // height: 30px;
        // color: white;
        // line-height: 30px;
    }
    .footer {
        height: 30px; 
        padding-top: 1px;
        padding-right: 10px;
    }
    .qr{
        width: 25px;
        height: 25px;
        // background-color: aquamarine;
        // right: inherit;
        margin-top: 0px;
        // margin-right: 7px;
        float: right;
        
        img {
            // padding: 5px;
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
