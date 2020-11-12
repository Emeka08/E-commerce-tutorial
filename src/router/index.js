import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '../views/AppHome'
import Product1 from '../views/Product1'
import Product2 from '../views/Product2'
import Product3 from '../views/Product3'
import Product4 from '../views/Product4'
import Product5 from '../views/Product5'
import Product6 from '../views/Product6'
import AdminPage from '../views/AdminPage'
import Users from '../views/Users'
import Buyers from '../views/Buyers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/product1',
      name: 'Product1',
      component: Product1
    },
    {
      path: '/product2',
      name: 'Product2',
      component: Product2
    },
    {
      path: '/product3',
      name: 'Product3',
      component: Product3
    },
    {
      path: '/product4',
      name: 'Product4',
      component: Product4
    },
    {
      path: '/product5',
      name: 'Product5',
      component: Product5
    },
    {
      path: '/product6',
      name: 'Product6',
      component: Product6
    },
    {
      path: '/adminpage',
      name: 'AdminPage',
      component: AdminPage,
      children: [
        {
          path: '/adminpage/users',
          name: 'Users',
          component: Users
        },
        {
          path: '/adminpage/buyers',
          name: 'buyers',
          component: Buyers
        }
      ]
    }
  ]
})
