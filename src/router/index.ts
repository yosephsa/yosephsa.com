import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import PageHome from '../components/PageHome.vue'
import PageResume from '../components/PageResume.vue'
import PageProjects from '../components/PageProjects.vue'
import PageAbout from '../components/PageAbout.vue'
import PageContact from '../components/PageContact.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PageHome,
  },
  {
    path: '/resume',
    component: PageResume,
  },
  {
    path: '/projects',
    component: PageProjects,
  },
  {
    path: '/about',
    component: PageAbout,
  },
  {
    path: '/contact',
    component: PageContact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;