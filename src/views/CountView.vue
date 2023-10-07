<script setup lang="ts">
import Layout6 from '@/components/Layout-Frame6.vue'
import Card from '@/components/Card-View.vue'
import Navbar from '@/components/navigation-view.vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
const link = '/payments'
</script>
<template>
  <div class="main">
    <div class="count">
      <button type="button" @click="counter.decrement">
        <font-awesome-icon icon="fa-solid fa-minus" />
      </button>
      <div>{{ counter.count }}</div>
      <button type="button" @click="counter.increment">
        <font-awesome-icon icon="fa-solid fa-plus" style="color: #ffffff" />
      </button>
    </div>
  </div>
  <navbar :link="link"></navbar>

</template>

<style lang="scss" scoped>
.main {
  // gap: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 90%;
}

.count {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;

  div {
    font-size: 100px;
    background-color: var(--white);
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 5px 5px 5px 5px gray;
  }

  button {
    width: 70px;
    height: 70px;
    // height: 40px;
    line-height: 50px;
    text-align: center;
    font-size: 50px;
    color: var(--white);
    background-color: var(--black);
    border-radius: 50%;
    border: none;
  }
}

// ----------------------------------------------------------------
</style>
