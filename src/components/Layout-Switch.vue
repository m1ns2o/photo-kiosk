<script setup lang="ts">
import { usePhotosetStore } from '@/stores/photoset'
import { onMounted } from 'vue'
import LayoutFrame2x2 from './Layout-Frame2x2.vue';
import LayoutFrame3x2 from './Layout-Frame3x2.vue';
import LayoutFrame4x1 from './Layout-Frame4x1.vue';
import LayoutFrame1n2 from './Layout-Frame1n2.vue';
const photoset = usePhotosetStore()

onMounted(() =>{
    console.log("인덱스번호:" + photoset.frame)
})

</script>

<template>
    <!-- <LayoutFrame4x1 v-show="photoset.frame == 0 && show_half_frame"></LayoutFrame4x1> -->
    <LayoutFrame4x1 v-if="photoset.frame == 0"></LayoutFrame4x1>
    <LayoutFrame2x2 v-else-if="photoset.frame == 1"></LayoutFrame2x2>
    <LayoutFrame3x2 v-else-if="photoset.frame == 2"></LayoutFrame3x2>
    <LayoutFrame1n2 v-else-if="photoset.frame == 3"></LayoutFrame1n2>
</template>
  

  
<style lang="scss" scoped>


// html,
// body {
//   height: 100%;
//   width: 100%;
//   padding: 0;
//   margin: 0;
// }

</style>
