import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//路径模块
import { fileURLToPath, URL } from "node:url";

//自动注册
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

//ELEmentPlus
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: "./", //打包路径
  plugins: [
    vue(),

    //自动导入
    AutoImport({
      imports: ["vue", "pinia", "vue-router"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 1234,
    host: "0.0.0.0",
    // open: true, //自动打开
    proxy: {
      "/api": {
        target: "http://192.168.2.188:8911",
        changeOrigin: true, //代理
      },
    },
  },
  resolve: {
    //@替代根路径
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta?.url)),
    },
  },

  css: {
    //全局sass变量
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@use "@/style/variable.scss" as *;`,
      },
    },
  },
});
