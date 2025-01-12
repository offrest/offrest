import { createRouter, createWebHistory } from 'vue-router'
import PageOne from '@/pages/PageOne.vue'
import PageTwo from '@/pages/PageTwo.vue'
import PageThree from '@/pages/PageThree.vue'
import PageFour from '@/pages/PageFour.vue'
import PageFive from '@/pages/PageFive.vue'
import PageSix from '@/pages/PageSix.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page-1',
      name: 'page-1',
      component: PageOne,
    }
    ,
    {
      path: '/page-2',
      name: 'page-2',
      component: PageTwo,
    }
    ,
    {
      path: '/page-3',
      name: 'page-3',
      component: PageThree,
    }
    ,
    {
      path: '/page-4',
      name: 'page-4',
      component: PageFour,
    }
    ,
    {
      path: '/page-5',
      name: 'page-5',
      component: PageFive,
    }
    ,
    {
      path: '/page-6',
      name: 'page-6',
      component: PageSix,
    }
  ],
})

export default router
