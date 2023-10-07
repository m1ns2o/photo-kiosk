<template>
  <main>
    <h2>Hello Pinia!</h2>
    <div>
      <h4>{{ counter.count }}</h4>
      <!-- <h4>Doubled {{ counter.doubleCount }}</h4> -->
      <button type="button" @click="counter.increment">increment</button>
      <button type="button" @click="counter.decrement">decrement</button>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const counter = useCounterStore()
    counter.count = 2
    return {
      counter
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
