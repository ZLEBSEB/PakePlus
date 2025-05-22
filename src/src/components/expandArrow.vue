<template>
  <div :class="{ top: isOpen, open_arrow: true }">
    <i
      :class="'iconfont' + ' ' + props.className"
      :style="{ fontSize: props.fontSize, color: props.color }"
    ></i>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  fontSize: {
    type: String,
    default: "12px",
  },
  color: {
    type: String,
    default: "#232334",
  },
  className: {
    type: String,
    default: "icon-xiangxia",
  },
});
</script>

<style lang="scss" scoped>
.top {
  transform: rotate(180deg);
}
.open_arrow {
  transition: all 0.3s;
}
</style>
