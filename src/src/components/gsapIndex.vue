<template>
  <div class="container">
    <!-- 第一部分 -->
    <div class="first_part" ref="firstPart">
      <div class="first_part_content" ref="firstPartContent">
        <div class="header" ref="firstHeader">
          <div
            class="title animate__animated animate__slideInUp"
            ref="itemRemark"
          ></div>
          <div class="remark animate__animated animate__slideInUp">
            可云端编辑的专业级 UI 设计工具，为中国设计师量身打造
            <br />
            Windows 也能用的「协作版 Sketch」
          </div>

          <div class="input_user animate__animated animate__slideInUp">
            <div class="input_container">
              <svg
                width="24"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.2832"
                  y="1.78613"
                  width="23.433"
                  height="36.4277"
                  rx="2.78483"
                  stroke="#273347"
                  stroke-width="3.06206"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <path
                  d="M17.4668 32.0195H22.532"
                  stroke="#273347"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <el-input
                v-model="userPhone"
                placeholder="输入手机号注册"
                style="width: 280px; outline: none"
                class="user_index_input"
                size="large"
              ></el-input>
              <el-button
                type="primary"
                style="width: 120px; height: 44px; border-radius: 8px"
              >
                免费注册
              </el-button>
            </div>
          </div>
        </div>
        <div class="img" ref="img1">
          <div class="animate__animated animate__slideInUp">
            <img src="@/assets/images/index1.png" alt="" />
            <!-- <img src="@/assets/images/3.webp" alt="" /> -->
          </div>
        </div>
        <div class="left_remark" ref="leftRemark">
          <div class="remark_title_container">
            <div
              class="remark_title animate__animated"
              :class="{
                active_title: activeTitle === '高效',
                animate__tada: activeTitle === '高效',
              }"
            >
              <img
                src="@/assets/images/test1.svg"
                alt=""
                style="width: 64px"
                v-if="activeTitle === '高效'"
              />
              高效
            </div>
            <div
              class="remark_title animate__animated"
              :class="{
                active_title: activeTitle === '专业',
                animate__tada: activeTitle === '专业',
              }"
            >
              <img
                src="@/assets/images/test1.svg"
                alt=""
                style="width: 64px"
                v-if="activeTitle === '专业'"
              />
              专业
            </div>
            <div
              class="remark_title animate__animated"
              :class="{
                active_title: activeTitle === '前沿',
                animate__tada: activeTitle === '前沿',
              }"
            >
              <img
                src="@/assets/images/test1.svg"
                alt=""
                style="width: 64px"
                v-if="activeTitle === '前沿'"
              />
              前沿
            </div>
          </div>
          <div
            v-if="activeTitle === '高效'"
            class="animate__animated animate__fadeIn"
          >
            <div class="remark_main">似闪电，效率看得见</div>
            <div class="remark_sub">高效出圈，极速响应需求，快速搞定事务</div>
          </div>

          <div
            v-if="activeTitle === '专业'"
            class="animate__animated animate__fadeIn"
          >
            <div class="remark_main">铸就非凡</div>
            <div class="remark_sub">
              展现专业风范，深度剖析需求，高效处理各类事务
            </div>
          </div>

          <div
            v-if="activeTitle === '前沿'"
            class="animate__animated animate__fadeIn"
          >
            <div class="remark_main">引领变革</div>
            <div class="remark_sub">
              紧跟前沿趋势，引入创新理念，开创行业全新格局
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 第二部分 -->
    <div class="second_part" ref="secondPart">
      <div class="second_part_content">
        <div data-aos="fade-up" data-aos-duration="800">
          <p class="second_part_title">
            <span style="color: #9da4af">为什么</span>选择我们我们
          </p>
          <p class="second_part_remark">
            打造服务产研的次世代专业级设计工具，
            <br />
            更快实现你和团队的想法。
          </p>
        </div>

        <div class="second_part_item_box">
          <div class="second_part_item" data-aos="fade-left">
            <img
              src="@/assets/images/1.webp"
              alt=""
              style="
                width: 92px;
                height: 92px;
                border-radius: 50%;
                position: absolute;
                top: -12px;
              "
            />
            <p class="item_title">永久免费</p>
            <p class="item_remark">
              坚持为您打造永久免费的模式，无论时光如何流转，都将始终如一地保持免费。
            </p>
            <!-- <p class="item_title">技术专业</p>
            <p class="item_remark">
              科班学长亲手编写，科班出身了解一切项目难点与重点。只为提供最专业的服务
            </p> -->
          </div>
          <div class="second_part_item" data-aos="fade-right">
            <img
              src="@/assets/images/1.webp"
              alt=""
              style="
                width: 92px;
                height: 92px;
                border-radius: 50%;
                position: absolute;
                top: -12px;
              "
            />
            <p class="item_title">永久免费</p>
            <p class="item_remark">
              坚持为您打造永久免费的模式，无论时光如何流转，都将始终如一地保持免费。
            </p>
          </div>
          <div class="second_part_item" data-aos="fade-left">
            <img
              src="@/assets/images/1.webp"
              alt=""
              style="
                width: 92px;
                height: 92px;
                border-radius: 50%;
                position: absolute;
                top: -12px;
              "
            />
            <p class="item_title">永久免费</p>
            <p class="item_remark">
              坚持为您打造永久免费的模式，无论时光如何流转，都将始终如一地保持免费。
            </p>
          </div>
          <div class="second_part_item" data-aos="fade-right">
            <img
              src="@/assets/images/1.webp"
              alt=""
              style="
                width: 92px;
                height: 92px;
                border-radius: 50%;
                position: absolute;
                top: -12px;
              "
            />
            <p class="item_title">永久免费</p>
            <p class="item_remark">
              坚持为您打造永久免费的模式，无论时光如何流转，都将始终如一地保持免费。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 第三部分 -->
    <div class="second_part">
      <div class="second_part_content">
        <div data-aos="fade-up" data-aos-duration="800">
          <p class="second_part_title">用户们怎么评价我们</p>
          <p class="second_part_remark">
            打造服务产研的次世代专业级设计工具，
            <br />
            更快实现你和团队的想法。
          </p>
        </div>

        <div class="second_part_item_box">
          <div class="second_part_item" data-aos="fade-left">
            <img
              src="@/assets/images/1.webp"
              alt=""
              style="
                width: 92px;
                height: 92px;
                border-radius: 50%;
                position: absolute;
                top: -12px;
              "
            />
            <p class="item_title">永久免费</p>
            <p class="item_remark">
              坚持为您打造永久免费的模式，无论时光如何流转，都将始终如一地保持免费。
            </p>
            <!-- <p class="item_title">技术专业</p>
            <p class="item_remark">
              科班学长亲手编写，科班出身了解一切项目难点与重点。只为提供最专业的服务
            </p> -->
          </div>
          <div class="second_part_item" data-aos="fade-right">
            <img
              src="@/assets/images/1.webp"
              alt=""
              style="
                width: 92px;
                height: 92px;
                border-radius: 50%;
                position: absolute;
                top: -12px;
              "
            />
            <p class="item_title">永久免费</p>
            <p class="item_remark">
              坚持为您打造永久免费的模式，无论时光如何流转，都将始终如一地保持免费。
            </p>
          </div>
          <div class="second_part_item" data-aos="fade-left">
            <img
              src="@/assets/images/1.webp"
              alt=""
              style="
                width: 92px;
                height: 92px;
                border-radius: 50%;
                position: absolute;
                top: -12px;
              "
            />
            <p class="item_title">永久免费</p>
            <p class="item_remark">
              坚持为您打造永久免费的模式，无论时光如何流转，都将始终如一地保持免费。
            </p>
          </div>
          <div class="second_part_item" data-aos="fade-right">
            <img
              src="@/assets/images/1.webp"
              alt=""
              style="
                width: 92px;
                height: 92px;
                border-radius: 50%;
                position: absolute;
                top: -12px;
              "
            />
            <p class="item_title">永久免费</p>
            <p class="item_remark">
              坚持为您打造永久免费的模式，无论时光如何流转，都将始终如一地保持免费。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { ref, onMounted, onUnmounted } from "vue";

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// 获取first_part元素的引用
const firstPartContent = ref<HTMLElement | null>(null);
const firstPart = ref<HTMLElement | null>(null);
const firstHeader = ref<HTMLElement | null>(null);
const img1 = ref<HTMLElement | null>(null);
const leftRemark = ref<HTMLElement | null>(null);
const itemRemark = ref<HTMLElement | null>(null);
const secondPart = ref<HTMLElement | null>(null);

//变量
const userPhone = ref<number | string>(); //用户手机号
const activeTitle = ref<string>("高效");

//定义动画时间轴
const timeline = gsap.timeline({
  targets: firstPart.value,
  delay: 0,
});

// 定义滚动事件处理函数
const init = () => {
  if (firstHeader.value) {
    timeline.to(firstHeader.value, {
      y: -80,
      opacity: 0,
      duration: 1, // 动画持续时间
      transform: "scale(0.8)",
      ease: "none",
      scrollTrigger: {
        trigger: firstPart.value,
        start: "0px",
        end: "300px",
        scrub: 0.5, //滚动时动画延迟，0.5表示0.5秒延迟，true表示无延迟
        // markers: true,  // 调试时使用，显示触发器的位置
      },
    });
  }
  if (img1.value) {
    timeline
      .to(img1.value, {
        duration: 1,
        scale: 0.95,
        translateY: "-45%",
        ease: "none",
        scrollTrigger: {
          trigger: firstPart.value,
          start: "200px",
          end: "400px",
          scrub: true,
        },
      })
      .to(img1.value, {
        duration: 1,
        translateX: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: firstPart.value,
          start: "500px",
          end: "700px",
          scrub: true,
        },
      });
  }
  if (leftRemark.value) {
    timeline
      .to(leftRemark.value, {
        duration: 1,
        left: "20%",
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: firstPart.value,
          start: "500px",
          end: "800px",
          scrub: true,
          onUpdate: (self) => {
            if (self.progress < 1) {
              activeTitle.value = "高效";
            }
          },
        },
      })
      .to(leftRemark.value, {
        scrollTrigger: {
          trigger: firstPart.value,
          start: "900px",
          end: "1050px",
          scrub: true,
          onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
              activeTitle.value = "专业";
            } else if (self.progress === 0) {
              activeTitle.value = "高效";
            }
          },
        },
      })
      .to(leftRemark.value, {
        scrollTrigger: {
          trigger: firstPart.value,
          start: "1100px",
          end: "1250px",
          scrub: true,
          onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
              activeTitle.value = "前沿";
            } else if (self.progress === 0) {
              activeTitle.value = "专业";
            }
          },
        },
      });
  }

  if (itemRemark.value) {
    timeline.to(itemRemark.value, {
      duration: 1,
      text: "同时创造，即时设计",
    });
  }
};

onMounted(() => {
  init();
});

onUnmounted(() => {
  // 清除所有ScrollTrigger实例
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<style lang="scss" scoped>
.container {
  padding: 0 16px;
  max-width: 1920px;
  margin: 0 auto;
}

// 第一部分
.first_part {
  width: 100%;
  height: 2200px;
  position: relative; // 确保内层盒子相对于外层盒子定位
}

.first_part_content {
  width: 100%;
  background-image: url("../assets/images/home-bg-2.png");
  background-size: cover;
  height: 847px;
  border-radius: 32px;
  position: sticky; // 使内层盒子固定在滚动时的位置
  top: 60px; // 固定在内层盒子的顶部
  overflow: hidden;

  .header {
    padding-top: 70px;
    z-index: 2;

    .title {
      font-size: 56px;
      color: #000;
      font-weight: 700;
      text-align: center;
      margin-bottom: 24px;
    }

    .remark {
      color: #000;
      text-align: center;
      font: 400 18px "PingFang SC", "Microsoft YaHei", "Microsoft JhengHei",
        "黑体", arial, "STHeiti", "\5b8b\4f53";
    }
  }

  .img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 2;

    img {
      transform: translate(0, 10%);
      width: 1093px;
      aspect-ratio: 16 / 11;
      background-size: cover;
      border-radius: 12px;
    }
  }

  .left_remark {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    opacity: 0;
    width: 400px;
    height: 450px;
    // background-color: red;
    z-index: -1;

    .remark_title_container {
      display: flex;
      gap: 24px;

      .remark_title {
        font-size: 32px;
        color: #fff;
        font-weight: 700;
        height: 70px;
        line-height: 70px;
      }
    }

    .remark_main {
      font-size: 36px;
      font-weight: 700;
      margin-top: 32px;
    }

    .remark_sub {
      font-size: 22px;
      color: #000000;
      opacity: 0.7;
      width: 280px;
      margin-top: 16px;
      line-height: 28px;
    }
  }
}

.active_title {
  width: 180px;
  background-color: #fff;
  color: #000 !important;
  border-radius: 35px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
}

.input_user {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 56px;

  .input_container {
    width: 465px;
    height: 64px;
    background-color: #fff;
    display: flex;
    align-items: center;
    border-radius: 16px;
    padding: 12px;
    box-sizing: border-box;
    gap: 12px;
  }
}

// 第二部分
.second_part {
  width: 100%;
  margin-top: 128px;
  display: flex;
  justify-content: center;
  .second_part_content {
    .second_part_title {
      font-size: 56px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
    }
    .second_part_remark {
      line-height: 32px;
      font-size: 24px;
      color: #000;
      opacity: 0.7;
      text-align: center;
    }
  }
  .second_part_item_box {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    width: 1200px;
    flex-wrap: wrap;
    gap: 64px 0;
    .second_part_item {
      width: 550px;
      height: 254px;
      box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.05);
      border-radius: 32px;
      padding: 32px 48px 32px 48px;
      box-sizing: border-box;
      .item_title {
        font-size: 32px;
        margin-bottom: 18px;
        margin-top: 85px;
      }
      .item_remark {
        font-size: 18px;
        opacity: 0.6;
        line-height: 24px;
        width: 95%;
      }
    }
  }
}
</style>

<style lang="scss">
.user_index_input {
  .el-input__wrapper {
    box-shadow: none;
  }
}
</style>
