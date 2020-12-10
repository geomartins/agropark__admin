
const routes = [
  {
    path: '/',
    component: () => import('layouts/Master.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/password_reset', component: () => import('pages/PasswordReset.vue') },
     
    ]
  },

  {
    path: '/food-park',
    component: () => import('layouts/Legend.vue'),
    children: [
      { path: '', component: () => import('pages/foodpark/dashboard.vue') },

      // { path: '/login', component: () => import('pages/Login.vue') },
      // { path: '/password_reset', component: () => import('pages/PasswordReset.vue') },
     
    ]
  },

  {
    path: '/dashboard',
    component: () => import('layouts/Legend.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/registered_users', component: () => import('pages/RegisteredUsers.vue') },
      { path: '/report', component: () => import('pages/Report.vue') },
     
      


    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
