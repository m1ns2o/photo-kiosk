import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const api: string = 'http://127.0.0.1:8000/file/'

// const src0 = api+"0.JPG"
// const src1 = api+"1.JPG"
// const src2 = api+"2.JPG"
// const src3 = api+"3.JPG"
// const src4 = api+"4.JPG"
// const src5 = api+"5.JPG"

export const usePhotosetStore = defineStore('photoset', () => {
  const frame = ref(2)
  let index = 0
  const imgLength = <number[]>[4, 4, 6, 6]
  // const imgSrc = ref<string[]>([])

  const initialArray = Array(imgLength[frame.value]).fill('')
  const imgSrc = ref<string[]>(initialArray)

  const selected = computed(
    () => imgLength[frame.value] - imgSrc.value.filter((value) => value == '').length
  )
  function update(src: string): boolean {
    // for (let i = 0; i <= imgLength[index]; i++) {
    //   if (imgSrc.value[i] == ''){
    //     index = i;
    //     break;
    //   }
    // }

    console.log(imgSrc.value)
    index = imgSrc.value.indexOf(src)
    if (index != -1) {
      //이미지 있을 시 삭제
      console.log('0번')
      imgSrc.value[index] = ''
      console.log(imgSrc.value)
      return false
    } else {
      index = imgSrc.value.indexOf('')
      if (index != -1) {
        console.log('1번')
        console.log(index)
        imgSrc.value[index] = src // 빈자리 있음 -> 빈자리에 대입 imgSrc.value.length !=-1
        return true
      }
      // else if (index == -1 && imgSrc.value.length < imgLength[frame.value]) {
      //   //앞배열에 빈자리 없음 & 뒷자리 있음 -> 배열 끝에 push
      //   console.log('2번')
      //   imgSrc.value.push(src)
      //   return true
      // }
      else {
        console.log('3번')
        //빈자리 없음 & 배열자리 없음 index == -1 && imgSrc.value.length > imgLength
        return false
      }
    }
  }
  return { imgSrc, frame, imgLength, update, selected }
})

/*
 frameselect : 선택한 프레임 종류
 framecount : 출력 장수
*/

/*
img_data.ts
선택한 이미지 1~6 || 1~4
qr코드 링크
https://www.npmjs.com/package/qrcode.vue
*/
