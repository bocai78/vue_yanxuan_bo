/*
* 包含所有组件路由的数组模块
* */

import Home from '../pages/Home/Home'
import Sort from '../pages/Sort/Sort'
import Knowledge from '../pages/Knowledge/Knowledge'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'
import PersonalIndex from '../pages/Personal/index'
import KnowledgeOne from '../pages/Knowledge/KnowledgeOne/KnowledgeOne'
import KnowledgeTwo from '../pages/Knowledge/KnowledgeTwo/KnowledgeTwo'
import LoginEmail from '../pages/Personal/LoginEmail/LoginEmail'
import LoginPhone from '../pages/Personal/LoginPhone/LoginPhone'




export default [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/sort',
    component:Sort,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/knowledge',
    component:Knowledge,
    meta:{
      showFooter:true
    },
    children:[
      {
        path:'/knowledge',
        redirect:'/knowledge/knowledgeone',
        meta:{
          showFooter:true
        }
      },
      {
        path:'/knowledge/knowledgeone',
        component:KnowledgeOne,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/knowledge/knowledgetwo',
        component:KnowledgeTwo
      }
    ]

  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/personal',
    component:Personal,
    meta:{
      showFooter:false
    },
    children: [
      {
        path:'/personal',
        component:PersonalIndex,
      },
      {
        path:'/personal/loginphone',
        component:LoginPhone,
      },
      {
        path:'/personal/loginemail',
        component:LoginEmail,
      }
    ]
  }

]
