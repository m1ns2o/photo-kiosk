import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import FrameView from '@/views/FrameView.vue'
import PaymentsView from '@/views/PaymentsView.vue'
import CountView from '@/views/CountView.vue'
import PhotoView from '@/views/PhotoView.vue'
import PiniaTest from '@/views/PiniaTest.vue'
import Pinia2View from '@/views/Test2View.vue'

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
      path: '/photo',
      name: 'photo',
      component: PhotoView
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaTest
    },
    {
      path: '/pinia2',
      name: 'pinia2',
      component: Pinia2View
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    }
  ]
})

export default router
