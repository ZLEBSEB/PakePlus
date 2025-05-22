<template>
  <div>
    <button @click="abc(1)">状态切换</button>
    <button @click="abc(2)">调整倍率</button>
    <button @click="abc(3)">调整码率</button>
    <div class="abcd" style="padding: 150px 0 0 0">
      <div
        v-for="index in 3"
        :key="index"
        class="box"
        :ref="
        (el) => {
          if (el) boxRefs[index] = el as HTMLElement;
        }
      "
      >
        Box {{ index + 1 }}
      </div>
    </div>

    <div class="abcd1">
      <div v-for="index in 10" :key="index" class="box1">
        Box {{ index + 1 }}
      </div>
    </div>
    <div class="abcd">
      <div v-for="index in 10" :key="index" class="box1">
        Box {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, onUnmounted } from "vue";
import { throttle } from "lodash";

// 存储每个 box 的引用
const boxRefs = ref<HTMLElement[]>([]);

// 存储每个 box 的时间轴实例
// const timelines = ref<gsap.core.Timeline[]>([]);

//定义动画
gsap.registerEffect({
  name: "demo",
  effect: (targets: HTMLElement[], config: any) => {
    return gsap.to(targets, config);
  },
  extendTimeline: true,
  defaults: { duration: 3 },
});

const timeline = gsap.timeline({
  targets: boxRefs.value,
  delay: 0,
});

gsap.registerPlugin(ScrollTrigger);
// 定义滚动事件处理函数
const init = () => {
  timeline.demo(boxRefs.value, {
    scrollTrigger: {
      trigger: ".abcd",
      start: "top",
      end: "bottom ",
      scrub: true,
      // markers: true,
    },
    opacity: 1,
    rotation: 360,
    x: "100vw",
    backgroundColor: "#000000",
    xPercent: -100,
    repeat: 0, // 重复的次数
    ease: "power2.inOut",
    stagger: 0.3, //多元素驱动所需间断时间
    duration: 3,
    borderRadius: 300,
    onStart: () => {
      console.log("动画开始");
    },
    // onUpdate: (data: number, data1: number, data2: number) => {},
    onComplete: () => {
      console.log("动画结束");
    },
    //传递给onUpdate的参数数组
    onUpdateParams: [1, 2, 3],
  });

  gsap.to(".abcd", {
    scrollTrigger: {
      trigger: ".abcd",
      start: "top",
      end: "bottom",
      scrub: true,
    },

    backgroundColor: "#42b883",
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.5,
    repeat: 1,
    onStart: () => {
      console.log("动画开始");
    },
    // onUpdate: (data: number, data1: number, data2: number) => {},
    onComplete: () => {
      console.log("动画结束");
    },
    //传递给onUpdate的参数数组
    onUpdateParams: [1, 2, 3],
  });

  gsap.from(".box1", {
    scrollTrigger: {
      trigger: ".abcd",
      start: "top",
      end: "bottom",
      scrub: true,
    },
    width: 0,
    height: 0,
    ease: "power2.inOut",
  });
};

/**
 *
 * @param time 动画开始执行到现在的时间
 * @param delTime 每一帧的间隔毫秒数
 * @param frame 帧率编号 从1开始
 */
const myFn = (time: number, delTime: number, frame: number) => {
  console.log(time, delTime, frame);
};

const myFn1 = (time: number, delTime: number, frame: number) => {
  console.log(time, delTime, frame);
};

// 参数分别时回调参数，是否只执行一次，true加入到队列顶部(优先执行)，false加入到队列底部
gsap.ticker.add(myFn, true, false);
gsap.ticker.add(myFn1, true, true);

//切换动画状态
const abc = (type: number) => {
  switch (type) {
    case 1:
      let state = gsap.globalTimeline.paused();
      if (!state) {
        gsap.globalTimeline.pause();
      } else {
        gsap.globalTimeline.play();
      }
      break;

    case 2:
      //切换速率
      gsap.globalTimeline.timeScale(0.5);
      //移出回调
      gsap.ticker.remove(myFn);
      break;
    case 3:
      //切换码率
      gsap.ticker.fps(1);
      console.log(123);

      break;
  }
};

// 在组件挂载时添加滚动事件监听器
onMounted(() => {
  // window.addEventListener("scroll", throttle(init, 100));
  // 初始化一次滚动事件以处理初始状态
  init();
});

// 在组件卸载时移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener("scroll", throttle(init, 100));
});
</script>

<style scoped lang="scss">
.box,
.box1 {
  width: 100px;
  height: 100px;
  background-color: #42b883;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 15px;
}
</style>
