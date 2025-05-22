import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import layout from "@/components/layout.vue";
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index.vue"),
      meta: { title: "登录页", icon: "", isMenu: false, child: false },
    },
    {
      path: "/index",
      name: "index",
      component: () => import("@/views/index/index.vue"),
      meta: { title: "官网", icon: "", isMenu: false, child: false },
    },
    {
      path: "/",
      redirect: "/index",
      name: "layout",
      component: layout,
      meta: { title: "", icon: "", isMenu: false, child: true },
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home/index.vue"),
          meta: {
            title: "首页",
            icon: "icon-ceshi",
            isMenu: true,
            child: false,
          },
        },
        {
          path: "/hot",
          name: "hot",
          component: () => import("@/views/hot/index.vue"),
          meta: {
            title: "热门推荐",
            icon: "icon-ceshi",
            isMenu: true,
            child: false,
          },
        },
        {
          path: "/template",
          name: "template",
          component: () => import("@/views/template/index.vue"),
          meta: {
            title: "模板广场",
            icon: "icon-ceshi",
            isMenu: true,
            child: false,
          },
        },
        {
          path: "/preview",
          name: "preview",
          component: () => import("@/views/preview/index.vue"),
          meta: {
            title: "在线预览",
            icon: "icon-ceshi",
            isMenu: true,
            child: false,
          },
        },
        {
          path: "/record",
          name: "record",
          component: () => import("@/views/record/index.vue"),
          meta: {
            title: "浏览记录",
            icon: "icon-ceshi",
            isMenu: true,
            child: false,
          },
        },
        {
          path: "/study",
          name: "study",
          component: () => import("@/views/study/index.vue"),
          meta: {
            title: "在线学习",
            icon: "icon-ceshi",
            isMenu: true,
            child: false,
          },
        },
      ],
    },
  ],
});

// // 添加导航守卫
router.beforeEach((to, from, next) => {
  // 检查目标路径是否存在于路由配置中
  if (to.matched.length === 0) {
    console.log(from, to);

    // 如果不存在，重定向到 home 页面
    next({ name: "home" });
    return;
  }

  if (to.path === "/login") {
    return next();
  }

  // 获取token
  const tokenStr = sessionStorage.getItem("token");

  // 如果没有token,返回值是空
  if (!tokenStr) {
    // next("/login");
    next();
  } else {
    NProgress.start();
    next();
  }
});

router.afterEach((to) => {
  NProgress.done();
  console.log("afterEach", to);
});

export default router;
