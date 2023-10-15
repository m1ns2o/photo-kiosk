<template>
    <div class="main">
        <div class="radio_custom">
          <div class="radio_custom_button" @click="changeGrayscale(true)">
              <div class="gray-scale">
              </div>
          </div>
          <div class="radio_custom_button" @click="changeGrayscale(false)">
              <div class="color-wheel"></div>
          </div>
      </div>
    <div class="radio_custom">
      <div
        v-for="option in colorOptions"
        :key="option"
        class="custom-radio"
        :class="{ 'radio-dot-selected': photoset.backgroundColor=== option }"
        @click="selectColor(option)"
      ><div
          class="radio-dot"
          :style="{backgroundColor:option}"
        ></div>
        <!-- {{ option.label }} -->
      </div>
      <!-- {{ photoset.backgroundColor }} -->
    </div>
    </div>
  </template>
  
<script lang="ts" setup>
import { usePhotosetStore } from '@/stores/photoset'

const photoset = usePhotosetStore()

const colorOptions = <string[]>["#000000","#176456", "#60738D","#F9B75A"];

const selectColor = (value: string) => {
  // selectedColor.value = value;
  photoset.backgroundColor = value;
};

const changeGrayscale = (val:boolean) => {
  photoset.grayScale = val
}

</script>
  
<style lang="scss" scoped>
.main{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // align-items: center;
  // background-color: aquamarine;
  align-content: center;
      .radio_custom{
          padding-left: 100px;
          width: 300px;
          height: 200px;
          display: flex;
          justify-content: space-between;
          .radio_custom_button{
              width: 55px;
              height: 55px;
              display: flex;
              align-items: center;
              justify-content: center;
              // border: 5px solid black;
              background-color: var(--white);
              box-shadow: 1px 1px 1px var(--gray);
              border-radius: 50%;
              // padding: 3px;
              
          }
          .custom-radio {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 31px;
              height: 31px;
              border-radius: 50%;
              box-shadow: 1px 1px 1px var(--gray);
              // align-items: center;
              cursor: pointer;
          }
          
          .radio-dot {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: 2px solid #fff;
              // margin: 0;
          }
      
          .radio-dot-selected {
              border: 1px solid #fff;
          }
      } 
      .radio_custom:first-child{
        justify-content: space-around;
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



</style>
