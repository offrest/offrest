import { createRouter, createWebHashHistory } from 'vue-router'
import PageOne from '@/pages/PageOne.vue'
import PageTwo from '@/pages/PageTwo.vue'
import PageThree from '@/pages/PageThree.vue'
import PageFour from '@/pages/PageFour.vue'
import PageFive from '@/pages/PageFour.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
      path: '/page-3/:id',
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
  ],
})

export default router
