<script lang="ts" setup>
// export default {
//   // props: {
//   //   layoutWidth: String,
//   //   layoutHeight: String, // 전달받을 CSS 변수의 prop 정의
//   //   footer : String,
//   //   borderwidth: String,
//   // },
// }
</script>

<template>
  <div class="layout" ref="layout">
    <div class="layout__images" >
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
      <div class="layout__images__box"></div>
    </div>
    <div class="layout__footer">
      <div class="left" >Hello World</div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;

  overflow: hidden;

  background-color: #333333;
  width: 200px;
  height: 300px;
  .layout__images {
    width: 100%;
    flex: 1;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);

    gap: 5px;
    padding: 5px;
    // padding == gap
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
    // min-height: 10px; //프레임 선택 때 비율 조정을 위한 최소 크기
    // height: 0px;
    // padding: 10px;

    .qr {
      background-color: red;
      width: 20px;
      height: 20px;
    }
  }
}
.left{
    visibility: hidden;
}

</style>
