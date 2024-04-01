<script setup lang="ts">
import { onMounted } from 'vue';
import Layout6 from '@/components/Layout-Frame6.vue'
import Card from '@/components/Card-View.vue'
import Navbar from '@/components/navigation-view.vue'
import router from '@/router';
import axios from "axios"
import { usePhotosetStore } from '@/stores/photoset';
import { useCounterStore } from '@/stores/counter';

const layoutWidth = '160px'
const layoutHeight = '240px'
const footer = 'none'
const borderWidth = '5px'

const img = usePhotosetStore()
const counter = useCounterStore()


const paymentsAsync = async () => {
  let unitPrice = 4000; // 개당 가격
  let quantity = counter.count / 2; // 갯수

  switch (img.frame) {
    case 0: unitPrice = 4000; break;
    case 1: unitPrice = 5000; break;
    case 2: unitPrice = 5000; break;
    case 3: unitPrice = 5000; break;
  }
  let price = unitPrice * quantity;
  let tax = Math.round(price * 0.1 / 1.1);
  console.log(`http://localhost:5000/api/NVCAT?value1=${price}&value2=${tax}&value3=0`)
  // await axios.get(`http://localhost:5129/api/NVCAT?value1=${price}&value2=${tax}&value3=0`)
  try {
    const response = await axios.get(`http://localhost:5129/api/NVCAT?value1=${price}&value2=${tax}&value3=0`);
    // 요청이 성공한 경우
    console.log("요청 성공:", response.data);
    router.push('/preshot')
    // 여기서 응답 데이터를 처리합니다.
  } catch (error) {
    // 요청이 실패한 경우
    console.error("요청 실패:", error);
    // 여기서 오류를 처리합니다.
  }

};

const testpage = () => {
  router.push('/photo')
}


</script>
<template>
  <div class="main">
    <div class="card" @click="paymentsAsync">
      <font-awesome-icon icon="fa-solid fa-credit-card" size="2xl" style="color: #000000" />
      <!-- <p>카드 결제</p> -->
    </div>
    <div class="card" @click="testpage">
      <font-awesome-icon icon="fa-solid fa-dollar-sign" size="2xl" style="color: #000000" />
    </div>
  </div>
  <navbar></navbar>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  height: 90%;
  .card {
    width: 300px;
    height: 300px;
    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.1);
    font-size: 70px;
    text-align: center;
    line-height: 300px;
    p {
      font-size: 20px;
      line-height: 0px;
    }
    // .font-awesome-icon {
    //   //   font-size: 200px;
    //   width: 100%;
    // }
  }
}

// ----------------------------------------------------------------
</style>
