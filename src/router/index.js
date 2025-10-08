import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import FileTicket from '../views/FileTicket.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/dashboard', name: 'Dashboard', component: DashboardPage, meta: { requiresAuth: true } },
  { path: '/file-ticket', name: 'FileTicket', component: FileTicket, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken') // true if logged in

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to login if not logged in
    next({ name: 'Login' })
  } else if (to.name === 'Login' && isAuthenticated) {
    // Prevent going back to login if already logged in
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
// ******************************************************************************************************