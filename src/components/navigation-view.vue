<script setup lang="ts">
import { useRouter } from 'vue-router'
// import { defineProps } from 'vue'

const props = defineProps({
  link: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  show_back: {
    type: Boolean,
    default: true
  }
})

const router = useRouter()

const back = () => {
  router.go(-1)
}
</script>

<template>
  <nav>
    <div class="btn">
      <button type="button" @click="back" id="prev" v-if="show_back">
        <font-awesome-icon :icon="['fas', 'caret-left']" size="2xl" />PREV
      </button>
    </div>
    <!-- <p>link : {{ link }}</p> -->
    <router-link :to="link">
      <div type="button" class="btn" v-if="link">
        <button id="next" :disabled="disabled">
          NEXT <font-awesome-icon :icon="['fas', 'caret-right']" size="2xl" />
        </button>
      </div>
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
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

    // .text {
    //   display: flex;
    //   flex-direction: row;
    //   //   justify-content: flex-end;
    //   align-items: center;
    //   height: 10px;
    //   gap: 10px;
    //   margin-left: 10px;
    //   //   flex-wrap: nowrap;
    //   //   gap: 20px;
    // }

    // span {
    //   height: 50px;
    //   line-height: 46px;
    // }
    // .arrow {
    //   height: 30px;
    //   width: 30px;
    //   //   color: white;
    //   background-color: var(--white);
    //   clip-path: polygon(0 0, 0% 100%, 50% 50%);
    // }
  }
  button:disabled {
    background-color: var(--black);
    opacity: 0.2;
  }
  #prev {
    // margin-right: 50px;
    padding-right: 10px;
  }
  #next {
    padding-left: 10px;
  }

  font-awesome-icon {
    font-size: 50px;
  }
}
</style>
