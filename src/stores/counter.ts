import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(2)
  // const index = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  function increment(): void {
    if (count.value <= 8) {
      count.value += 2
    }
    // 5000*10 이상시 서명해야 함 개수는 나중에 조정하기
  }
  function decrement(): void {
    if (count.value >= 4) {
      count.value -= 2
    }
  }

  return { count, increment, decrement }
})
