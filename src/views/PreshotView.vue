<script setup lang="ts">
import { onMounted } from 'vue';
import load from '@/components/loading-page.vue'
import router from '@/router';


const layoutWidth = '160px'
const layoutHeight = '240px'
const footer = 'none'
const borderWidth = '5px'

onMounted(() =>{
    // setTimeout(() => {
    //     window.navigate2next = navigate2next
    //     window.openRemoteCapture = openRemoteCapture
    //     window.chrome.webview.postMessage("buttonClicked");
    //     console.log("buttonClicked")
    // }, 1000);

    window.navigate2next = navigate2next
    // window.openRemoteCapture = openRemoteCapture
    window.chrome.webview.postMessage("remoteCaptureOpen");
    // console.log("remoteCaptureOpen")

})

const navigate2next = () => {
    // alert('called' )
    router.push('/aftershot');
    console.log("navigate2next")
}

//  const openRemoteCapture = () => {
//     window.chrome.webview.postMessage("remoteCaptureOpen");
//  }
</script>
<template>
		<load>
            <h2>잠시 후 촬영이 시작됩니다.</h2>
        </load>
</template>

<style scoped>
</style>