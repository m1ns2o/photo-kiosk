<script setup lang="ts">
import Layout3x2 from '@/components/Layout-Frame3x2.vue'
// import navbar from '@/components/navigation-view.vue'
import FrameCustom from '@/components/Frame-Custom.vue'
import * as html2canvas from 'html2canvas';
import { ref, nextTick} from 'vue'
import { usePhotosetStore } from '@/stores/photoset'
import axios from 'axios';
import Layoutswitch from '@/components/Layout-switch.vue'

const img = usePhotosetStore()
const local_server = "http://127.0.0.1:8008"
const external_server = "http://158.179.167.107"
const layoutRef = ref(null);
const showDialog = ref(false); // 다이얼로그를 보여줄지 결정하는 ref

const increament = ()=>{
  location.href = "/"
}

//location.href ="/"
const downloadImg = async () => {
  showDialog.value = true;
  img.show_half_frame = true;
  console.log("상태변경"+ img.show_half_frame)
  if (layoutRef.value) {
    const startTime = performance.now();
    await nextTick();
    const canvas = await html2canvas.default(layoutRef.value, { scale: 6, useCORS: true });
    
    const res = await axios.get(local_server + '/qr')
    
    const res_filename = await axios.post(external_server+'/save', { image_addr: res.data.qr,image_data: canvas.toDataURL('image/jpeg', 0.9)  });
    const file_name = res_filename.data.file_name
    img.qr = external_server +"/"+ res.data.qr
    // provide('qr_link',qr_link)
    await nextTick();
    const newCanvas = await html2canvas.default(layoutRef.value, { scale: 3, useCORS: true }); //300dpi scale*100 == dpi
    axios.post(local_server+ '/save', { image_data: newCanvas.toDataURL('image/jpeg', 0.9)  });
    
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`실행 시간: ${elapsedTime.toFixed(2)}ms`);
    console.log(local_server+"/mp4/"+file_name)
    await axios.get(local_server+"/mp4/"+file_name)
    showDialog.value = false;

    //counter store로 출력해야하는 장수 전송하기 + 레이아웃 6x2 6x4도 데이터 전송하기
  }
};


</script>
<template>
  <div class="main">
    <div class="img" ref="layoutRef" >
      <Layoutswitch></Layoutswitch>
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

  <div v-if="showDialog" class="fullscreen-dialog">
    사진을 인쇄 중입니다. 잠시만 기다려 주세요...
  </div>
</template>

<style lang="scss" scoped>

/* ... (기존의 style 코드) */

.fullscreen-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 1.0); // 반투명 검은색 배경
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  z-index: 9999; // 다른 요소보다 위에 표시
}


.main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 90%;
  .img{
    width: 400px;
    height: 600px;
    
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
