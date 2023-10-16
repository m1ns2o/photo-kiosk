<script lang="ts">
//import { ref, onMounted } from 'vue'
//import Vue from "vue";
import * as html2canvas from 'html2canvas'
import Layout6 from '@/components/Layout-Frame6.vue'
import card from '@/components/Card-View.vue'
import Layout3x2 from '@/components/Layout-Frame3x2.vue'
// import { useCounterStore } from '@/stores/index'

// const store = useCounterStore()
//html2canvas scale옵션 찾아보기 -> 이미지 배율&해상도 옵션

export default {
  components: {
    Layout6,
    card,
    Layout3x2
  },
  methods: {
    downloadImg(): void {
      html2canvas.default(this.$refs.layout, { scale: 10, useCORS: true }).then((canvas) => {
        const link = document.createElement('a')
        link.download = 'filename.jpg'
        link.href = canvas.toDataURL()
        document.body.appendChild(link)
        link.click()
      })
    }
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
</script>

<template>
      <div class="img" ref="layout">
        <Layout3x2></Layout3x2>
      </div>
  <button type="button" @click="downloadImg">download</button>
  <button type="button" @click="increament">++</button>

  <font-awesome-icon :icon="['fas', 'caret-right']" />
  <v-icon icon="home" />
</template>
<style lang="scss" scoped>
  .img{
    display: flex;
  }
</style>
