import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/pages/WelcomePage.vue'
import InputName from '@/pages/InputName.vue'
import SurveyStep1 from '@/pages/SurveyStep1.vue'
import SurveyStep2 from '@/pages/SurveyStep2.vue'
import SurveyStep3 from '@/pages/SurveyStep3.vue'
import ResultPage from '@/pages/ResultPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcomePage',
      component: WelcomePage,
    }
    ,
    {
      path: '/input-name',
      name: 'inputName',
      component: InputName,
    }
    ,
    {
      path: '/survey-step1',
      name: 'survey-step1',
      component: SurveyStep1,
    }
    ,
    {
      path: '/survey-step2',
      name: 'survey-step2',
      component: SurveyStep2,
    }
    ,
    {
      path: '/survey-step3',
      name: 'survey-step3',
      component: SurveyStep3,
    }
    ,
    {
      path: '/result',
      name: 'resultPage',
      component: ResultPage,
    }
  ],
})

export default router
