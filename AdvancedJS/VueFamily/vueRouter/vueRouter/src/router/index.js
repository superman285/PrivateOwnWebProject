import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/components/Message';
import Contact from '@/components/Contact';
import Discover from '@/components/Discover';
import Me from '@/components/Me';
import hidden from '@/components/Hidden'
import BottomNav from '@/components/BottomNav';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BottomNav',
      component: BottomNav
    },

    {
      path: '/msg',
      name: 'Message',
      component: Message
    },
    {
      path: '/con',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/dis',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/hid',
      name: 'hidden',
      component: hidden
    }
  ]
})
