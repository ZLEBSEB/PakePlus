<template>
  <div class="upload_area" @paste="handlePaste" tabindex="0" @click="focusArea">
    <p>点击聚焦后粘贴文件或图片</p>
    <div v-if="previewUrl">
      <img
        :src="previewUrl"
        alt="预览"
        style="max-width: 200px"
        v-if="isImage"
      />
      <p>{{ fileName }}</p>
    </div>
    <p v-if="uploading">上传中... {{ progress }}%</p>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, onMounted } from "vue";
import type { UploadProgressEvent } from "axios";
import axios from "axios";

interface UploadState {
  previewUrl: string | null;
  fileName: string;
  isImage: boolean;
  uploading: boolean;
  progress: number;
}

// 响应式状态
const uploadArea = ref<HTMLElement | null>(null);
const state = ref<UploadState>({
  previewUrl: null,
  fileName: "",
  isImage: false,
  uploading: false,
  progress: 0,
});

// 类型守卫：检查是否为图像文件
const isImageFile = (file: File): boolean => file.type.startsWith("image/");

// 聚焦上传区域
const focusArea = () => {
  if (uploadArea.value) {
    uploadArea.value.focus();
  }
};

// 处理粘贴事件
const handlePaste = async (event: ClipboardEvent) => {
  const clipboardData = event.clipboardData || window.clipboardData;

  if (!clipboardData) {
    console.warn("剪贴板数据不可用");
    return;
  }

  // 查找文件类型
  const items = Array.from(clipboardData.items);
  const fileItem = items.find((item) => item.kind === "file");

  if (!fileItem) {
    console.warn("剪贴板中没有文件");
    return;
  }

  const file = fileItem.getAsFile();
  if (!file) {
    console.warn("无法获取文件");
    return;
  }

  // 更新状态
  state.value.fileName = file.name;
  state.value.isImage = isImageFile(file);

  // 预览处理
  if (state.value.isImage) {
    const reader = new FileReader();
    reader.onload = (e) => {
      state.value.previewUrl = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  // 执行上传
  await uploadFile(file);
};

// 文件上传方法
const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    state.value.uploading = true;
    await axios.post("/api/upload", formData, {
      onUploadProgress: (progressEvent: UploadProgressEvent) => {
        state.value.progress = Math.round(
          (progressEvent.loaded * 100) / (progressEvent.total || 1)
        );
      },
    });
    console.log("上传成功");
  } catch (error) {
    console.error("上传失败:", error);
  } finally {
    state.value.uploading = false;
    state.value.previewUrl = null;
  }
};

// 组件挂载时自动聚焦
onMounted(() => {
  focusArea();
});
</script>

<style scoped>
.upload_area {
  width: 400px;
  height: 200px;
  border: 2px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.upload_area:focus {
  border-color: #409eff;
  outline: none;
}
</style>
