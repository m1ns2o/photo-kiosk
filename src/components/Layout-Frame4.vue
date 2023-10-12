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
// import { defineProps } from 'vue'
import { usePhotosetStore } from '@/stores/photoset'

const img = usePhotosetStore()

const props = defineProps({
  layoutWidth: String,
  layoutHeight: String,
  qr: String,
  borderwidth: String
})
</script>

<template>
  <div class="layout">
    <div class="head">
        hello World
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[0]" alt="" />
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[1]" alt="" />
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[2]" alt="" />
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[3]" alt="" />
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[4]" alt="" />
    </div>
    <div class="img_box">
        <img :src="img.imgSrc[5]" alt="" />
    </div>
    <div class="footer">
        <img class="qr" src="qr" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>

.layout {
    margin-left: 200px;
    width: 400px;
    height: 600px;
    background-color: black;
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
        border: 1px solid black;
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
        width: 25px;
        height: 25px;
        background-color: aquamarine;
        // right: inherit;
        margin-top: 5px;
        margin-right: 4px;
        float: right;
    }
}

img {
    max-width: 100%;
    max-height: 100%;
    display: block;
// margin: auto;
}

</style>
