import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Text from '@/components/text'
import Text1 from '@/components/Text1'
import Text2 from '@/components/text2'
import Texturl from '@/components/texturl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/texturl/:userid(\\d+)/:username',
      component:Texturl,
      name:"texturl"
    },
    {
      path: '/text',
      name:'text',
      component: Text,
      children:[
        { 
          path:'text1',
          name:'/text/text1',
          component: Text1
        },
        {
          path:'text2',
          name:'/text/text2',
          component: Text2
        },
        {
          path:'/home',
          redirect:'/'
        }
      ]
    }
  ]
})
