import AuthView from '@/modules/auth/views/AuthView.vue'
import LoginView from '@/modules/auth/views/LoginView.vue'

const authRoutes = [
  {
    path: '/',
    name: '',
    component: LoginView,
    title: '',
    redirect: { name: 'login' },
    children: [
      {
        path: '/register',
        name: 'register',
        component: () => import('@/modules/auth/RegisterView.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: LoginView
      },
      {
        path: '/logout',
        name: 'logout',
        component: () => import('@/modules/auth/LogoutView.vue')
      }
    ]
  }
]

export default authRoutes
