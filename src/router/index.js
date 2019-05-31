import Vue from 'vue'
import Router from 'vue-router'
//choosecity
import ChooseCity from '@/components/ChooseCity'
//evaluate
import EvaluateIndex from '@/components/EvaluateIndex'
import EvaluateAll from '@/components/evaluate/All'
import EvaluateSatisfied from '@/components/evaluate/Satisfied'
import EvaluateUnSatisfied from '@/components/evaluate/Unsatisfied'
import EvaluateHasImg from '@/components/evaluate/HasImg'

//Business
import Business from '@/components/Business'
//product_detail
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChooseCity',
      component: ChooseCity
    },
    {
      path: '/cc',
      name: 'ChooseCity',
      component: ChooseCity
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: EvaluateIndex,
      children: [
         {
          path: '/',
          name: 'EvaluateAll',
          component: EvaluateAll
        },
        {
          path: '/evaluateall',
          name: 'EvaluateAll',
          component: EvaluateAll
        },
        {
          path: '/evaluates',
          name: 'EvaluateSatisfied',
          component: EvaluateSatisfied
        },
        {
          path: '/evaluateus',
          name: 'EvaluateUnSatisfied',
          component: EvaluateUnSatisfied
        },
        {
          path: '/evaluatehimg',
          name: 'EvaluateHasImg',
          component: EvaluateHasImg
        }
      ]
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/p_detail',
      name: 'p_detail',
      component: ProductDetail
    }
  ]
})
