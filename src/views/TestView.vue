<script lang="ts">
//import { ref, onMounted } from 'vue'
//import Vue from "vue";
import * as html2canvas from 'html2canvas'
import Layout6 from '@/components/Layout-Frame6.vue'
import card from '@/components/Card-View.vue'
// import { useCounterStore } from '@/stores/index'

// const store = useCounterStore()
//html2canvas scale옵션 찾아보기 -> 이미지 배율&해상도 옵션

export default {
  components: {
    Layout6,
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
  <!-- <div class="layout" ref="layout">
    <div class="layout__images">
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
    </div>
    <div class="layout__footer">
      <div class="left">Hello World</div>
      <div class="right">
        <div class="qr"></div>
      </div>
    </div>
  </div> -->
  <!-- <Layout6cut /> -->
  <Layout6 qr="adss" />

  <button type="button" @click="downloadImg">download</button>
  <button type="button" @click="increament">++</button>

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
<!-- <style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;

  overflow: hidden;

  background-color: #333333;
  width: 4in;
  height: 6in;
  .layout__images {
    width: 100%;
    flex: 1;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);

    gap: 10px;
    padding: 10px;
    padding-bottom: 0;

    .layout__images__box {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #eeeeee;
      overflow: hidden;
    }
  }

  .layout__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;
    color: white;

    padding: 10px;

    .qr {
      background-color: red;
      width: 20px;
      height: 20px;
    }
  }
}
.big {
  width: 400px;
  height: 400px;
  background-color: red;
  opacity: 0.1;
}
</style> -->
<style lang="scss" scoped></style>
