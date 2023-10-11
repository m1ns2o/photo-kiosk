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
  <div class="layout" ref="layout" :style="{ width: layoutWidth, height: layoutHeight }">
    <div class="layout__images" :style="{ gap: borderwidth, padding: borderwidth }">
      <div class="layout__images__box">
        <img :src="img.imgSrc[0]" alt="" />
      </div>
      <div class="layout__images__box">
        <img :src="img.imgSrc[1]" alt="" />
      </div>
      <div class="layout__images__box">
        <img :src="img.imgSrc[2]" alt="" />
      </div>
      <div class="layout__images__box">
        <img :src="img.imgSrc[3]" alt="" />
      </div>
      <div class="layout__images__box">
        <img :src="img.imgSrc[4]" alt="" />
      </div>
      <div class="layout__images__box">
        <img :src="img.imgSrc[5]" alt="" />
      </div>
    </div>
    <div class="layout__footer">
      <div class="left" v-if="qr">Hello World</div>
      <div class="right">
        <div class="qr" v-if="qr"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;

  overflow: hidden;
// background-image: url('https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-6/274999501_1662543470754645_8311126417566091395_n.png?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=MHoeTtkHuYEAX92-SL9&_nc_ht=scontent-itm1-1.xx&oh=00_AfBzUAa_rDTGWBzVRdrMOvJoTmX4iyaPf77rQ7DQoE9NaQ&oe=65261280');
  // background-image: url('http://127.0.0.1:8000/file/20.JPG');
  background-color: #333333;
  width: 4in;
  height: 6in;
  .layout__images {
    width: 100%;
    height: 100%;
    flex: 1;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);

    gap: 10px;
    padding: 10px;
    padding-bottom: 0;
    // background-image: url('https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-6/274999501_1662543470754645_8311126417566091395_n.png?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=MHoeTtkHuYEAX92-SL9&_nc_ht=scontent-itm1-1.xx&oh=00_AfBzUAa_rDTGWBzVRdrMOvJoTmX4iyaPf77rQ7DQoE9NaQ&oe=65261280');

    .layout__images__box {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #eeeeee;

      overflow: hidden;
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        // margin: auto;
      }
    }
  }

  .layout__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: none;
    color: white;
    // min-height: 10px; //프레임 선택 때 비율 조정을 위한 최소 크기
    // height: 0px;
    padding: 10px;

    .qr {
      background-color: red;
      width: 20px;
      height: 20px;
    }
  }
}
.big {
  width: 400px;
  height: 400px;
  background-color: red;
  opacity: 0.1;
}
</style>
