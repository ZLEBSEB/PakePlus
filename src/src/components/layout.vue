<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="layout_header">
          <img
            src="@/assets/images/element-plus-logo.svg"
            alt=""
            class="desk_logo"
          />

          <div class="layout_header_right">
            <div class="layout_header_right_img">
              <img src="@/assets/images/1.webp" />
            </div>

            <el-dropdown placement="bottom" @visible-change="isOpen = !isOpen">
              <div style="display: flex; align-items: center">
                <div class="user_name_box">蟑螂恶霸</div>
                <expandVue :isOpen="isOpen" :color="arrowColor" />
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>联系客服</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="auto" style="min-width: 85px">
          <div class="layout_menu">
            <MenuVue />
          </div>
        </el-aside>
        <el-main class="layout_main">
          <div>
            <div style="height: calc(100vh - 102px)" class="main_box">
              <router-view v-slot="{ Component }">
                <transition name="slide-fade" mode="out-in">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import MenuVue from "@/components/menu.vue";
import expandVue from "@/components/expandArrow.vue";

import { ref, watch } from "vue";
//箭头组件状态
const isOpen = ref<boolean>(false);
const arrowColor = ref<string>("#232334");
watch(
  () => isOpen.value,
  (newVal) => {
    if (newVal) {
      arrowColor.value = "var(--default-color)";
    } else {
      arrowColor.value = "#232334";
    }
  }
);
</script>

<style lang="scss" scoped>
.layout_main {
  background-color: $bg-layout-main-color;
}
.el-menu {
  border-right: 0px solid #ebeef5;
}
.layout_menu {
  padding: 0 16px;
}
.desk_logo {
  width: 128px;
  height: 28px;
}
.layout_header {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  .layout_header_right {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .layout_header_right_img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .user_name_box {
    min-width: 80px;
    text-align: center;
    font-size: 16px;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: $font-color;
    transition: all 0.5s;
    &:hover {
      color: $default-color;
    }
  }
}

.user_operate {
  cursor: pointer;
  & > div {
    padding: 4px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: $active-bg-color;
      color: $default-color;
    }
  }
  & > div:nth-child(1) {
    margin-top: 4px;
  }
} 
.el-tooltip__trigger {
  &:focus-visible {
    outline: none;
  }
}
.main_box {
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
