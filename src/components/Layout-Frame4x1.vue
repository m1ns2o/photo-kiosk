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
// const props = defineProps({
//   qr: String,
// })
</script>

<template>
    <div class="main_frame">
        <div v-show="img.show_half_frame" class="layout" :style="{backgroundColor:img.backgroundColor }">
        <div class="img_box">
            <img :src="img.imgSrc[0]" alt="" v-show="!img.grayScale"/>
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
        <div class="footer">
            <h2></h2>
            <!-- <qrcode-vue value="img.qr" :level="level" :render-as="renderAs" :margin="1" v-show="img.qr" class="qr"/> -->
        </div>
  </div>
  <div class="layout" :style="{backgroundColor:img.backgroundColor }">
    
    <div class="img_box">
        <img :src="img.imgSrc[0]" alt="" v-show="!img.grayScale"/>
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
    <div class="footer">
        <h2>Hello World</h2>
        <qrcode-vue :value="img.qr" :level="level" :render-as="renderAs" :margin="1" v-show="img.qr" class="qr"/>
    </div>
  </div>
    </div>
  
</template>

<style lang="scss" scoped>
.main_frame{
    display: flex;
    margin: 0;
    padding: 0;
}

.layout {
    width: 200px;
    height: 600px;
    // gap: 5px;
    padding: 10px 10.24px 5px 10.24px;
    // padding-top: 10px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    .img_box{
        width: 179.52px;
        height: 136px;
        margin-top: 4px;
        background-color: aliceblue;
    }
    .img_box:first-child{
        margin-top: 0px;
    }
    .img_box:last-child{
        margin-top: 0px;
    }
    .footer {
        padding: 1px;
        height: 25px;
        // margin-bottom: 10px;
        // padding-bottom: 5px;
        // padding-right: 3px;
        color: white;
        // display: flex;
        // align-items: center;
        // align-content: center;
        h2{
            font-size: 20px;
            height: 25px;
            display: inline;
        }
    }
    .qr{
        // margin-top: 1px;
        width: 27px;
        height: 27px;
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
}

</style>
