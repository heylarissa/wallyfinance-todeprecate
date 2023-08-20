const authRoutes = [
  {
    path: '/',
    name: 'auth',
    component: () => import('@/modules/auth/AuthView.vue'),
    title: 'auth',
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
        component: () => import('@/modules/auth/LoginView.vue')
      },
      {
        path: '/logout',
        name: 'logout',
        component: () => import('@/modules/auth/LogoutView.vue')
      }
    ]
  }
]

export default authRoutes;