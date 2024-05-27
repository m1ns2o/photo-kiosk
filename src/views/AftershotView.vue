<script setup lang="ts">
import { onMounted } from 'vue';
import load from '@/components/loading-page.vue'
import axios from 'axios';
import router from '@/router';
import { usePhotosetStore } from '@/stores/photoset'

const img = usePhotosetStore()


const layoutWidth = '160px'
const layoutHeight = '240px'
const footer = 'none'
const borderWidth = '5px'

onMounted(() =>{
    
    // console.log(img.imgLength[img.frame])
    setTimeout(() => {
        console.log('navigate')
        imgProcess();
    }, 100);
    
})

const imgProcess = async () => {
  try {
    let url=''
    console.log("프레임 번호" + img.frame)
    if(img.frame == 1){
        url = 'http://127.0.0.1:8008/imgprocess/grayscale?hvRatio=0.6923'
    }
    else{
        url = 'http://127.0.0.1:8008/imgprocess/grayscale'
    }
    console.log(url);
    console.log(img.frame == 1);
    const response = await axios.get(url);
    console.log(response.data);
    // await delay(500);
    router.push('/photo');
  } catch (error) {
    console.error(error);
  }
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

</script>
<template>
		<load>
            <h2>사진을 불러오는 중 입니다.</h2>
        </load>
</template>

<style scoped>
</style>