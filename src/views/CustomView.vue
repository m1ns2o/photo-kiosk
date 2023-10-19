<script setup lang="ts">
import Layout3x2 from '@/components/Layout-Frame3x2.vue'
import navbar from '@/components/navigation-view.vue'
import FrameCustom from '@/components/Frame-Custom.vue'
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

// You can also define computed properties here if needed
// const layoutHeight = computed(() => `${(FrameHeight.value * 2 / 3)}px`)
</script>
<template>
  <div class="main">
    <Layout3x2></Layout3x2>
    <FrameCustom></FrameCustom>
  </div>

  <nav>
    <div class="btn">

    </div>
      <div type="button" class="btn">
        <button id="print">
          PRINT <font-awesome-icon :icon="['fas', 'print']" size="2xl" />
        </button>
      </div>
  </nav>
</template>

<style lang="scss" scoped>




.main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 90%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  button {
    background-color: var(--black);
    color: var(--white);
    width: 130px;
    height: 60px;
    border-radius: 40px;
    font-size: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
  #print {
    padding-left: 10px;
    display: flex;
    gap: 5px;
  }

  font-awesome-icon {
    font-size: 50px;
  }
}
</style>
<!-- 프레임 부분 v-if로 해당 컴포넌트 갈아끼기 선택부분 -> img사이즈 기준으로 reactive하게 작성
그냥div안에 검은색 bordr 줘서 선택하기 선택부분 세로 4컷 -> 이미지파일 불러와서 자르지 말고 css로
처리해서 사이드 부분 가려버리기 잘리는 부분 가려서 촬영할 때 크기로 조정  -->
