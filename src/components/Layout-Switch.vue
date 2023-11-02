<script lang="ts" setup>
import { usePhotosetStore } from '@/stores/photoset'
import { onMounted } from 'vue'
import LayoutFrame2x2 from './Layout-Frame2x2.vue';
import LayoutFrame3x2 from './Layout-Frame3x2.vue';
import LayoutFrame4x1 from './Layout-Frame4x1.vue';
const photoset = usePhotosetStore()

onMounted(() =>{
    console.log("인덱스번호:" + photoset.index)
})

</script>

<template>

    <LayoutFrame4x1 v-if="photoset.index == 0"></LayoutFrame4x1>
    <LayoutFrame2x2 v-else-if="photoset.index == 1"></LayoutFrame2x2>
    <LayoutFrame3x2 v-else-if="photoset.index == 2"></LayoutFrame3x2>
    
</template>
  

  
<style lang="scss" scoped>
// .main{
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   align-items: center;
//   align-content: center;
      
// }



</style>
