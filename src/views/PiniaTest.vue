<template>
  <div>
    <div
      v-for="option in colorOptions"
      :key="option.value"
      class="custom-radio"
      @click="selectColor(option.value)"
      :style="{backgroundColor:option.value}"
    >
      <div
        class="radio-dot"
        :class="{ 'radio-dot-selected': photoset.backgroundColor=== option.value }"
      ></div>
      {{ option.label }}
    </div>
    {{ photoset.backgroundColor }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { usePhotosetStore } from '@/stores/photoset'

const photoset = usePhotosetStore()

const colorOptions = [
  { label: "Option 1", value: "#000000" },
  { label: "Option 2", value: "#176456" },
  { label: "Option 3", value: "#177596" },
  { label: "Option 4", value: "#993456" },

];

const selectedColor = ref<string | null>(null);

const selectColor = (value: string) => {
  // selectedColor.value = value;
  photoset.backgroundColor = value;
};

</script>

<style>
.custom-radio {
  display: flex;
  align-items: center;
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
  background-color: #000;
}
</style>
