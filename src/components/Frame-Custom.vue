<script lang="ts" setup>
import { ref } from 'vue'
import { usePhotosetStore } from '@/stores/photoset'

const img = usePhotosetStore()

// const selected= ()=>{

// }
</script>

<template>
  <div class="layout">
    <div class="radio_custom">

    </div>
    <div class="radio_custom">
        <div class="radio_custom_button">
            <div class="gray-scale">
                <div class="black"></div>
            <div class="white"></div>
            </div>
        </div>
        <div class="radio_custom_button">
            <div class="color-wheel"></div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;

  overflow: hidden;
  width: auto;
  height: 600px;
  background-color: aquamarine;
  
  

    .radio_custom_button{
        // width: 20px;
        // border: 5px solid black;
        background-color: var(--white);
        box-shadow: 2px 2px 2px var(--gray);
        border-radius: 50%;
        // padding: 3px;
    }

    #count {
      color: var(--white);
      background-color: var(--black);
      display: flex;
      flex-direction: column;
      gap: 10px;
      h1 {
        font-size: 70px;
      }
      h2 {
        font-size: 15px;
      }
    
  }
  .gray-scale{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    background: linear-gradient(to right, white 50%, black 50%);
    
  }
  .color-wheel {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: conic-gradient(
        red, 
        orange, 
        yellow, 
        green, 
        cyan, 
        blue, 
        magenta, 
        red
    );
    
}

}
</style>
