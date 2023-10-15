<template>
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
  <div class="color_picker">
    <div
      v-for="option in colorOptions"
      :key="option"
      class="custom-radio"
      :class="{ 'radio-dot-selected': photoset.backgroundColor=== option }"
      @click="selectColor(option)"
      
    >
      <div
        class="radio-dot"
        :style="{backgroundColor:option}"
      ></div>
      {{ option.label }}
    </div>
    {{ photoset.backgroundColor }}
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

</script>

<style lang="scss" scoped>

.radio_custom_button{
  width: 100px;
  height: 100px;
  // border: 5px solid black;
  background-color: var(--white);
  // box-shadow: 2px 2px 2px var(--gray);
  border-radius: 50%;
  // padding: 3px;
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
.custom-radio {
  display: flex;
  // align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
}

.radio-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #000;
  margin-right: 10px;
}

.radio-dot-selected {
  border: 1px solid #000;
}
</style>
