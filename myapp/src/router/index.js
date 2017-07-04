/**
 * Created by Ying on 2017/6/28.
 */

import Vue from 'vue'
import Router from 'vue-router'
import API from '@/components/API'
import Base from '@/components/base'
import Login from '@/components/drzc/Login'
import Register from '@/components/drzc/Register'

import personalindex from '@/components/personal/index'
import personalshou from '@/components/personal/show'
import personalinfo from '@/components/personal/Info'

import Revisename from '@/components/personal/revisename'
import site from '@/components/personal/site'
import birthday from '@/components/personal/birthday'

import xq from '@/components/personal/xq'
Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/',
      name:'api',
      component:API
    },{
      path:'/Login',
      name:'Login',
      component:Login
    },{
      path:'/Register',
      name:'Register',
      component:Register
    },{
      path:'/index',
      name:'personalindex',
      component:personalindex
    },{
      path:'/show',
      name:'personalshou',
      component:personalshou
    },{
      path:'/info',
      name:'personalinfo',
      component:personalinfo
    },{
      path:'/revisename',
      name:'personalinfo',
      component:Revisename
    },{
      path:'/site',
      name:'site',
      component:site
    },{
      path:'/birthday',
      name:'birthday',
      component:birthday
    },{
      path:'/xq',
      name:'xq',
      component:xq
    }
  ]
})
