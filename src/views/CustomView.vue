<script setup lang="ts">
import Layout3x2 from '@/components/Layout-Frame3x2.vue'
import navbar from '@/components/navigation-view.vue'
import FrameCustom from '@/components/Frame-Custom.vue'
import * as html2canvas from 'html2canvas';
import { ref, nextTick } from 'vue'
import { usePhotosetStore } from '@/stores/photoset'
import axios from 'axios';

const img = usePhotosetStore()

const layoutRef = ref(null);

const qr_link = ref("");
const downloadImg = async () => {
  if (layoutRef.value) {
    const startTime = performance.now();
    const canvas = await html2canvas.default(layoutRef.value, { scale: 6, useCORS: true });
    
    const res = await axios.get('http://127.0.0.1:8000/qr')
    
    axios.post('http://127.0.0.1:8080/save', { image_addr: res.data.qr,image_data: canvas.toDataURL()  });
    qr_link.value = res.data.qr
    await nextTick();
    const newCanvas = await html2canvas.default(layoutRef.value, { scale: 6, useCORS: true });
    axios.post('http://127.0.0.1:8000/save', { image_data: newCanvas.toDataURL()  });
    const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(`실행 시간: ${elapsedTime.toFixed(2)}ms`);
    //counter store로 출력해야하는 장수 전송하기 + 레이아웃 6x2 6x4도 데이터 전송하기
  }
};

// 아래의 increament 함수가 정의되지 않았기 때문에 일단 주석 처리하겠습니다.
const increament = () => {
  // location.reload();

  qr_link.value = "qwewerwer"
  console.log(qr_link.value);
};
</script>
<template>
  <div class="main">
    <div class="img" ref="layoutRef">
      <Layout3x2 :qr="qr_link"></Layout3x2>
    </div>
    <FrameCustom></FrameCustom>
  </div>

  <nav>
    <div class="btn">
      <button type="button" @click="increament">
        PRINT <font-awesome-icon :icon="['fas', 'print']" size="2xl" />
      </button>
    </div>
      <div type="button" class="btn">
        <button id="print" type="button" @click="downloadImg">
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
  .img{
    width: 400px;
  }
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
