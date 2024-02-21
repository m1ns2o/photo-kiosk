<script setup lang="ts">
import { onMounted } from 'vue';
import load from '@/components/loading-page.vue'
import axios from 'axios';
import router from '@/router';


const layoutWidth = '160px'
const layoutHeight = '240px'
const footer = 'none'
const borderWidth = '5px'

onMounted(() =>{
    
    setTimeout(() => {
        console.log('navigate')
        // window.chrome.webview.postMessage("buttonClicked");
        router.push('/photo');
        // const res = axios.get('http://127.0.0.1:8080/downsampling')
        // console.log(res);
    }, 1000);
})
</script>
<template>
		<load>
            <h2>사진을 불러오는 중 입니다.</h2>
        </load>
</template>

<style scoped>
</style>