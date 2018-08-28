import Vue from 'vue'
import Router from 'vue-router'
import ContactList from '@/components/contacts/list/ContactList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContactList',
      component: ContactList
    }
  ]
})
