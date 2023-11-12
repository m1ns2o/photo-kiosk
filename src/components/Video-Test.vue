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
const videoSrc = ref('https://47b7-211-214-106-154.ngrok-free.app/capture/video.mp4');

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
    <div class="img_box">
        <video autoplay loop muted playsinline>
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="img_box">
        <video autoplay loop muted playsinline>
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="img_box">
        <video autoplay loop muted playsinline>
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="img_box">
        <video autoplay loop muted playsinline>
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="img_box">
        <video autoplay loop muted playsinline>
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="img_box">
        <video autoplay loop muted playsinline>
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="footer">
        <qrcode-vue :value="img.qr" :level="level" :render-as="renderAs" :margin="1" v-show="img.qr" class="qr"/>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

video {
  /* 비디오 스타일 설정 */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.layout {
    width: 400px;
    height: 600px;
    padding: 5px;
    display: flex;
    align-content: center;
    flex-flow: column wrap;
    .img_box{
        margin: 5px 3px 0px 3px;
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
        padding-top: 2px;
        padding-right: 3px; 
    }
    .qr{
        width: 25px; 
        height: 25px;
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
