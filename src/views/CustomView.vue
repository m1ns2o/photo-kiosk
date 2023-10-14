<script setup lang="ts">
import Layout6 from '@/components/Layout-Frame6.vue'
import Layout3x2 from '@/components/Layout-Frame3x2.vue'
import { ref, computed } from 'vue'
import { usePhotosetStore } from '@/stores/photoset'

const img = usePhotosetStore()
// const FrameHeight = ref(600)
// const layoutHeight = computed(() => `${FrameHeight.value}px`)

const qr = ref('qwre')
const layoutWidth = ref('4in')

const layoutHeight = ref('6in')
const borderwidth = ref('10px')
const imgHeight = ref('190px')

const disabled = computed(() => img.selected == img.imgLength[img.frame])
</script>
<template>
  <div class="main">
    <Layout3x2></Layout3x2>
    <button type="button" @click="counter.increment">
        <font-awesome-icon icon="fa-solid fa-plus" style="color: #ffffff" />
      </button>
    <!-- <PhotoList :imgHeight="imgHeight" /> -->
    <!-- <div class="shadow">
      <div class="card">
        <div class="content">
          <slot></slot>
        </div>
        <div class="edge"></div>
      </div>
    </div> -->
  </div>
  <!-- <navbar link="asdfd" :disabled="!disabled" /> -->
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
