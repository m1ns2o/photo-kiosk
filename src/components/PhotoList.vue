<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { usePhotosetStore } from '@/stores/photoset'

const img = usePhotosetStore()

// const local_server:string = import.meta.env.VITE_LOCAL_SERVER;
const local_server:string = "http://127.0.0.1:8008"
// const selected= ()=>{

// }


onMounted(() =>{
    console.log(img.imgLength[img.frame])
    console.log(img.frame)
})

const imgList = ref<boolean[]>([false, false, false, false, false, false, false, false])
</script>

<template>
  
  <div class="layout" ref="layout">
    
    <div class="layout__images">
      <div
        class="layout__images__box" :style="{ width: img.frame == 1 ? '131.537px' : 'auto' }"
        @click="imgList[0] = img.update(local_server + '/file/0.JPG')"
      >
      
        <img
          :src="local_server + '/file/0.JPG'"
          alt="사진을 불러올 수"
          :class="{ selected: imgList[0] }"
        />
      </div>
      <div
        class="layout__images__box" :style="{ width: img.frame == 1 ? '131.537px' : 'auto' }"
        @click="imgList[1] = img.update(local_server + '/file/1.JPG')"
      >
        <img :src="local_server + '/file/1.JPG'" alt="" :class="{ selected: imgList[1] }" />
      </div>
      <div
        class="layout__images__box" :style="{ width: img.frame == 1 ? '131.537px' : 'auto' }"
        @click="imgList[2] = img.update(local_server + '/file/2.JPG')"
      >
        <img :src="local_server + '/file/2.JPG'" alt="" :class="{ selected: imgList[2] }" />
      </div>
      <div
        class="layout__images__box" :style="{ width: img.frame == 1 ? '131.537px' : 'auto' }"
        @click="imgList[3] = img.update(local_server + '/file/3.JPG')"
      >
        <img :src="local_server + '/file/3.JPG'" alt="" :class="{ selected: imgList[3] }" />
      </div>
      <div
        class="layout__images__box" :style="{ width: img.frame == 1 ? '131.537px' : 'auto' }"
        @click="imgList[4] = img.update(local_server + '/file/4.JPG')"
      >
        <img :src="local_server + '/file/4.JPG'" alt="" :class="{ selected: imgList[4] }" />
      </div>
      <div
        class="layout__images__box" :style="{ width: img.frame == 1 ? '131.537px' : 'auto' }"
        @click="imgList[5] = img.update(local_server + '/file/5.JPG')"
      >
        <img :src="local_server + '/file/5.JPG'" alt="" :class="{ selected: imgList[5] }" />
      </div>
      <div
        class="layout__images__box" :style="{ width: img.frame == 1 ? '131.537px' : 'auto' }"
        @click="imgList[6] = img.update(local_server + '/file/6.JPG')"
      >
        <img :src="local_server + '/file/6.JPG'" alt="" :class="{ selected: imgList[6] }" />
      </div>
      <div
        class="layout__images__box" :style="{ width: img.frame == 1 ? '131.537px' : 'auto' }"
        @click="imgList[7] = img.update(local_server + '/file/7.JPG')"
      >
        <img :src="local_server + '/file/7.JPG'" alt="" :class="{ selected: imgList[7] }" />
      </div>

      <div class="layout__images__box" id="count">
        <h1>{{ img.selected }}/{{ img.imgLength[img.frame] }}</h1>
        <h2>사진을 선택해 주세요</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;

  overflow: hidden;

  background-color: var(--black);
  width: auto;
  height: 600px;
  .layout__images {
    width: 100%;
    flex: 1;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);

    gap: 5px;
    padding: 5px;
    // padding-bottom: 0;
    width: auto;

    .layout__images__box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 190px;

      background-color: #eeeeee;

      overflow: hidden;
      .cover {
        z-index: 3;
        position: relative;
        width: 100%;
        height: 100%;
        // background-color: aqua;
      }
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin: auto;
        overflow: hidden;
        // width: auto; 
        // height: 265px;
        height: 100%; /* 이미지의 높이를 컨테이너의 높이와 동일하게 설정 */
        object-fit: cover; /* 이미지 비율을 유지하면서 컨테이너에 맞춤 */
        object-position: center;
      }
      img.selected {
        -webkit-filter: brightness(0.5);
        filter: brightness(0.5);
      }
    }

    #count {
      color: var(--white);
      background-color: var(--black);
      display: flex;
      flex-direction: column;
      gap: 10px;
      h1 {
        font-size: 70px;
      }
      h2 {
        font-size: 15px;
      }
    }
  }
}
</style>
