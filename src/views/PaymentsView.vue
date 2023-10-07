<!-- <script lang="ts">
import Layout6 from '@/components/Layout-Frame6.vue'
import card from '@/components/Card-View.vue'
import navbar from '@/components/navigation-view.vue'

export default {
  components: {
    Layout6,
    card,
    navbar
  },
  data() {
    return {
      layoutWidth: '160px',
      layoutHeight: '240px',
      footer: 'none',
      borderwidth: '5px'
    }
  }
}
</script> -->
<script setup lang="ts">
import Layout6 from '@/components/Layout-Frame6.vue'
import Card from '@/components/Card-View.vue'
import Navbar from '@/components/navigation-view.vue'

const layoutWidth = '160px'
const layoutHeight = '240px'
const footer = 'none'
const borderWidth = '5px'
</script>
<template>
  <div class="main">
    <div class="card">
      <font-awesome-icon icon="fa-solid fa-credit-card" size="2xl" style="color: #000000" />
      <!-- <p>카드 결제</p> -->
    </div>
    <div class="card">
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
