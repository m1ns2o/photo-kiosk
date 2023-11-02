<script setup lang="ts">
import { onMounted } from 'vue';
import Layout6 from '@/components/Layout-Frame6.vue'
import Card from '@/components/Card-View.vue'
import Navbar from '@/components/navigation-view.vue'
import router from '@/router';


const layoutWidth = '160px'
const layoutHeight = '240px'
const footer = 'none'
const borderWidth = '5px'


const paymentsAsync = () => {
  router.push('/preshot')
};

const testpage = () => {
  router.push('/pinia')
}


</script>
<template>
  <div class="main">
    <div class="card" @click="testpage">
      <font-awesome-icon icon="fa-solid fa-credit-card" size="2xl" style="color: #000000" />
      <!-- <p>카드 결제</p> -->
    </div>
    <div class="card" @click="paymentsAsync">
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
