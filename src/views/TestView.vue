<script setup lang="ts">
import { ref } from 'vue';
import * as html2canvas from 'html2canvas';
import Layout6 from '@/components/Layout-Frame6.vue';
import card from '@/components/Card-View.vue';
import Layout3x2 from '@/components/Layout-Frame3x2.vue';

const layoutRef = ref(null);

const qr_link = ref("");
const downloadImg = async () => {
  if (layoutRef.value) {
    const canvas = await html2canvas.default(layoutRef.value, { scale: 8, useCORS: true });
    const link = document.createElement('a');
    link.download = 'filename.jpg';
    link.href = canvas.toDataURL();
    document.body.appendChild(link);
    link.click();
  }
};

// 아래의 increament 함수가 정의되지 않았기 때문에 일단 주석 처리하겠습니다.
const increament = () => {
  qr_link.value = "qwewerwer"
  console.log(qr_link.value);
};
</script>

<template>
  <div class="img" ref="layoutRef">
    <Layout3x2 :qr="qr_link"></Layout3x2>
  </div>
  <button type="button" @click="downloadImg">download</button>
  
  <button type="button" @click="increament">++</button>
 
  <font-awesome-icon :icon="['fas', 'caret-right']" />
  <v-icon icon="home" />
</template>

<style lang="scss" scoped>
.img {
  width: 400px;
}
</style>
