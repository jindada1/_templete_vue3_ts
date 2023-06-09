import type { App } from 'vue'
import { BASE_ROUTE } from "@/common/constants";
import { createWebHistory, createRouter } from "vue-router";
import { setPermissionGuard } from "@/router/permission";


const router = createRouter({
    history: createWebHistory(BASE_ROUTE),
    routes: [
        {
            path: '/',
            component: () => import("@/pages/Home.vue")
        },
        {
            path: '/sign',
            component: () => import("@/pages/Sign.vue")
        }
    ]
})

export function setupRouter(app: App<Element>) {
    // 设置路由访问的权限
    setPermissionGuard(router);
    app.use(router);
}

export default router