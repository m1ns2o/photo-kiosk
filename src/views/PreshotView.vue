<script setup lang="ts">
import { onMounted } from 'vue';
import load from '@/components/loading-page.vue'
import router from '@/router';


const layoutWidth = '160px'
const layoutHeight = '240px'
const footer = 'none'
const borderWidth = '5px'

onMounted(() =>{
    setTimeout(() => {
        console.log('navigate')
        window.chrome.webview.postMessage("buttonClicked");
        router.push('/photo');
    }, 5000);
})
</script>
<template>
		<load>
            <h2>잠시 후 촬영이 시작됩니다.</h2>
        </load>
</template>

<style scoped>
</style>