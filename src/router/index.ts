import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrameView from '@/views/FrameView.vue'
import PaymentsView from '@/views/PaymentsView.vue'
import CountView from '@/views/CountView.vue'
import PhotoView from '@/views/PhotoView.vue'
import CustomView from '@/views/CustomView.vue'
import PreshotView from '@/views/PreshotView.vue'
import AftershotView from '@/views/AftershotView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/frame',
      name: 'frame',
      component: FrameView
    },
    {
      path: '/count',
      name: 'count',
      component: CountView
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsView
    },
    {
      path: '/preshot',
      name: 'preshot',
      component: PreshotView
    },
    {
      path: '/aftershot',
      name: 'aftershot',
      component: AftershotView
    },
    {
      path: '/photo',
      name: 'photo',
      component: PhotoView
    },
    {
      path: '/custom',
      name: 'custom',
      component: CustomView
    },
    
  ]
})

export default router
