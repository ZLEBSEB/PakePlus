import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

//css动画库
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css"; // 引入 AOS 的 CSS 文件

//scss
import "./style/index.scss";

//时间函数工具
import moment from "moment";

const app = createApp(App);
AOS.init();

app.config.globalProperties.$moment = moment;

app.use(router);
app.use(ElementPlus, { locale: zhCn });

app.mount("#app");
