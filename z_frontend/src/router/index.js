import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index';
import ShopType from '@/components/ShopType';
import Shop from '@/components/shop';
import FoodShop from '@/components/FoodShop';
import Goods from '@/components/goods';

import Update from '@/components/update';
// import Appnew1 from '@/components/APPNew/appnew1';


// import fenlei from '@/components/fenlei';
import test from '@/components/test';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'ShopType',
      component: ShopType
    },
    {
      path: '/FoodShop',
      name: 'FoodShop',
      component: FoodShop
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    // {
    //   path: '/fenlei',
    //   name: 'fenlei',
    //   component: fenlei
    // },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
