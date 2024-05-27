<script setup lang="ts">
import Layout3x2 from '@/components/Layout-Frame3x2.vue'
import Layout4 from '@/components/Layout-Frame4.vue'
import PhotoList from '@/components/PhotoList.vue'
import navbar from '@/components/navigation-view.vue'
import { ref, computed, onMounted } from 'vue'
import { usePhotosetStore } from '@/stores/photoset'
import axios from 'axios'
import Layoutswitch from '@/components/Layout-switch.vue'

const img = usePhotosetStore()

const disabled = computed(() => img.selected == img.imgLength[img.frame])

onMounted(() =>{
    axios.get('http://127.0.0.1:8008/imgprocess/videoencoding');
    console.log(img.imgLength[img.frame])
})

// You can also define computed properties here if needed
// const layoutHeight = computed(() => `${(FrameHeight.value * 2 / 3)}px`)
</script>
<template>
  <div class="main">
    <!-- <Layout3x2></Layout3x2> -->
    <Layoutswitch></Layoutswitch>
    <PhotoList :imgHeight="'190px'" />
  </div>
  <navbar :show_back="false" link="/custom" :disabled="!disabled" />
</template>

<style lang="scss" scoped>
h2 {
  width: 130px;
  height: 40px;
  line-height: 40px;
  background-color: #303030;
  color: white;
  border-radius: 20px;
}

.card {
  width: 300px;
  height: 400px;
  background-color: white;
  // border: 1px solid gray;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 350px, 250px 100%, 0 100%);
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: flex-end;
  /* drop-shadow: 23px 50px 8px 0px rgba(0, 0, 0, 0.3); */
}

.content {
  width: 100%;
  height: 100%;
  padding: 50px;
  font-size: 18px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  gap: 50px;
  // padding-top: 40px;
  padding-bottom: 14px;
  // margin-bottom: 0px;
}
.shadow {
  filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.1));
}
.edge {
  box-sizing: none;
  width: 50px;
  height: 50px;
  clip-path: polygon(0 0, 0 100%, 100% 0);
  background-color: black;
  position: absolute;
  bottom: 0;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 90%;
}
</style>
<!-- 프레임 부분 v-if로 해당 컴포넌트 갈아끼기 선택부분 -> img사이즈 기준으로 reactive하게 작성
그냥div안에 검은색 bordr 줘서 선택하기 선택부분 세로 4컷 -> 이미지파일 불러와서 자르지 말고 css로
처리해서 사이드 부분 가려버리기 잘리는 부분 가려서 촬영할 때 크기로 조정  -->
