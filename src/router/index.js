import Vue from  'vue'
import VueRouter from 'vue-router'
import MSite from '../router-pages/MSite/MSite'
import Order from '../router-pages/Order/Order'
import Profile from '../router-pages/Profile/Profile'
import Search from '../router-pages/Search/Search'
import Login from '../router-pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path : '/msite',
      component : MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path : '/order',
      component : Order,
      meta:{
        showFooter:true
      }
    },
    {
      path : '/profile',
      component : Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path : '/search',
      component : Search,
      meta:{
        showFooter:true
      }
    },
    {
      path : '/',
      component : MSite
    },
    {
      path : '/login',
      component : Login
    },
  ]
})
