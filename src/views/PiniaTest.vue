<script lang="ts">
//import { ref, onMounted } from 'vue'
//import Vue from "vue";
import * as html2canvas from 'html2canvas'
import Layout6 from '@/components/Layout-Frame6.vue'
import Layout4 from '@/components/Layout-Frame4.vue'
import Layout4x2 from '@/components/Layout-Frame4x2.vue'
import card from '@/components/Card-View.vue'
// import { useCounterStore } from '@/stores/index'

// const store = useCounterStore()
//html2canvas scale옵션 찾아보기 -> 이미지 배율&해상도 옵션

export default {
  components: {
    Layout6,
    Layout4,
    Layout4x2,
    card
  },
  methods: {
    downloadImg(): void {
      html2canvas.default(this.$refs.layout).then((canvas) => {
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
  
  <Layout4
    />

  <button type="button" @click="downloadImg">download</button>
  <button type="button" @click="increament">++</button>
  <div class="container">
    <Layout4x2></Layout4x2>
    <Layout4x2></Layout4x2>
  </div>
  <card>
    <Layout6
      :layoutWidth="layoutWidth"
      :layoutHeight="layoutHeight"
      :footer="footer"
      :borderwidth="borderwidth"
    />
    <h2>\5000</h2>
  </card>
  <font-awesome-icon :icon="['fas', 'caret-right']" />
  <v-icon icon="home" />
</template>
<style lang="scss" scoped>
  .container {
    margin: 0;
    padding: 0;
    display: flex;
    // width: 900px;
  }
</style>
