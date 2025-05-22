<template>
  <el-popover
    placement="bottom-start"
    trigger="hover"
    @before-enter="isOpen = !isOpen"
    @after-leave="isOpen = !isOpen"
    :popper-style="{ padding: '0', width: 'auto', borderRadius: '12px' }"
  >
    <template #default>
      <div class="dropdown_content">
        <div
          class="dropdown_item"
          v-for="(item, index) in props.options"
          :key="index"
          @click="router.push(item?.path)"
        >
          <div class="icon_box" style="">
            <img width="28" height="28" :src="item?.icon" />
          </div>
          <div>
            <div class="dropdown_item_title">
              {{ item?.title }}
            </div>
            <div class="dropdown_item_remark">
              {{ item?.remark }}
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #reference>
      <div class="dropdown_title">
        {{ props.title }} <expandVue :isOpen="isOpen" :color="arrowColor" />
      </div>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import expandVue from "@/components/expandArrow.vue";
import { ref, defineProps, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  title: {
    type: String,
    default: "",
    required: true,
  },
  options: {
    type: Object,
    default: [],
    required: true,
  },
});

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
.dropdown_title {
  color: #62646a;
  font-size: 15px;
  display: flex;
  gap: 4px;
  transition: all 1s;
  &:hover {
    color: var(--default-color);
  }
}
.dropdown_content {
  padding: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  .dropdown_item {
    width: 300px;
    height: 57px;
    padding: 0 12px;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    align-items: center;
    .icon_box {
      width: 36px;
      height: 36px;
      margin-right: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;
      border-radius: 8px;
      background-color: #fff;
    }

    &:hover {
      transition: all 0.5s;
      background-color: $active-bg-color;
      .icon_box {
        box-shadow: inset 0 0 0 1px #e9e9e9;
        transform: scale(1.1);
        transition: all 0.5s;
      }
      img {
        transition: all 0.5s;
      }
    }
  }
  .dropdown_item_title {
    font-size: 16px;
    color: #243042;
  }
  .dropdown_item_remark {
    font-size: 12px;
    color: #62646a;
  }
}
</style>
