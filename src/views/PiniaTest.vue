<template>
  <div>
    <!-- Vue 컴포넌트를 이미지로 렌더링하기 위한 컨테이너 -->
    <div ref="componentContainer">
      <VideoTest></VideoTest>
    </div>

    <!-- 렌더링된 이미지를 표시할 <canvas> 요소 -->
    <canvas ref="canvas"></canvas>

    <button @click="renderComponentToCanvas">컴포넌트 렌더링</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import html2canvas from 'html2canvas';
import VideoTest from '@/components/Video-Test.vue';

const componentContainer = ref<HTMLElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

const renderComponentToCanvas = async () => {
  if (componentContainer.value && canvas.value) {
    // Vue 컴포넌트를 이미지로 랜더링
    const canvasImage = await html2canvas(componentContainer.value);

    // Canvas에 이미지 그리기
    const context = canvas.value.getContext('2d');
    context.clearRect(0, 0, canvas.value.width, canvas.value.height);
    context.drawImage(canvasImage, 0, 0);
  }
};
</script>

<style scoped>
/* 스타일 코드 */
</style>

