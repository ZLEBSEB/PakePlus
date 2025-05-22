<template>
  <el-menu
    :default-active="curRoute"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <el-menu-item
      v-for="item in menuList"
      :key="item.path"
      :index="item.path"
      @click="router.push(item?.path)"
    >
      <template #title>
        <div class="my_menu_item">
          <i :class="'iconfont ' + item?.meta?.icon + ' menu_icon'"></i>
          {{ item?.meta?.title ?? "" }}
        </div>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";

import { useRouter, useRoute, RouteRecordRaw } from "vue-router";

const router = useRouter();
const route = useRoute();

// console.log("route", route);
// console.log("router", router);

const isCollapse = ref(false);

// 当前路由判断
const curRoute = computed(() => {
  let value = route.path;
  route.matched.forEach((item) => {
    item.meta?.active ? (value = item.path) : "";
  });
  return value;
});


const menuList = ref<RouteRecordRaw[]>([]);

onMounted(() => {
  //路由数组过滤非菜单项
  router.options.routes.forEach((item) => {
    if (item.meta?.isMenu) {
      menuList.value.push(item);
    }
    if (item.children) {
      item.children.forEach((child) => {
        if (child.meta?.isMenu) {
          menuList.value.push(child);
        }
      });
    }
  });
  
});
</script>

<style lang="scss" scoped>
:deep(.el-menu-item) {
  height: 40px;
  padding: 0px !important;
  width: 172px;
  margin-top: 4px;
  &.is-active {
    background-color: $active-bg-color;
    border-radius: 8px;
  }
}
.my_menu_item {
  padding: 0 8px;
  height: 40px;
  line-height: 40px;
}
.menu_icon {
  font-size: 20px;
  margin-right: 8px;
}
.el-menu-item:hover {
  border-radius: 8px;
  color: $default-color;
}
</style>
