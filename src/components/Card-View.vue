<script setup lang="ts">

const props = defineProps({
  img: String,
})
</script>
<template>
  <div class="main">
    <div class="shadow">
      <div class="card">
        <div class="content">
          <img class="layout" :src="img" alt="">
          
          <h2>₩5000</h2>
        </div>
        <div class="edge"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  width: 130px;
  height: 40px;
  line-height: 40px;
  background-color: #303030;
  color: white;
  border-radius: 20px;
}


.card {
  width: 300px;
  height: 400px;
  background-color: white;
  // border: 1px solid gray;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 350px, 250px 100%, 0 100%);
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: flex-end;
  /* drop-shadow: 23px 50px 8px 0px rgba(0, 0, 0, 0.3); */
  .content {
    width: 100%;
    height: 100%;
    padding: 50px;
    font-size: 18px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    gap: 50px;
    // padding-top: 30px;
    padding-bottom: 14px;
    // margin-bottom: 0px;
    .layout{
      margin-top: 5px;
      width: 180px;
      height: auto;
    }
  }
 
}


.shadow {
  filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.1));
}
.edge {
  box-sizing: none;
  width: 50px;
  height: 50px;
  clip-path: polygon(0 0, 0 100%, 100% 0);
  background-color: black;
  position: absolute;
  bottom: 0;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  height: 90%;
}
</style>
