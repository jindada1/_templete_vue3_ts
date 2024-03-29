import type { Router } from "vue-router";
import { useUserStore } from "@/store/user";
import { IGNORE_AUTH } from "@/common/constants";

const PAGE_ROOT = '/';
const PAGE_LOGIN = "/sign";
const PAGE_404 = "/exception";

const whiteList: string[] = [PAGE_ROOT, PAGE_LOGIN, PAGE_404];

interface RedirectParams {
  path: string;
  replace: boolean;
  query?: any;
}

export function setPermissionGuard(router: Router) {
  router.beforeEach((to, from, next) => {

    // whitelist can be directly entered
    if (IGNORE_AUTH || whiteList.includes(to.path)) {
      next();
      return;
    }

    const userStore = useUserStore();
    const token = userStore.getToken;

    function toLogin() {
      // redirect login page
      const redirectData: RedirectParams = {
        path: PAGE_LOGIN,
        replace: true,
        query: {}
      };
      if (to.path) {
        redirectData.query.redirect = to.path
      }
      next(redirectData);
    }

    // token or user does not exist
    if (!token) {
      // if you set the routing meta.ignoreAuth to true
      // you can access without permission. 
      if (to.meta.ignoreAuth) {
        next();
        return;
      }

      toLogin();
      return;
    }

    userStore.getUserInfoAction()
      .then(() => next())
      .catch(() => {
        toLogin();
      })
  });
}
