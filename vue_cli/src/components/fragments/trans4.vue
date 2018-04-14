<template>
        <div id="el4" style="position: relative;">
                靠定义过渡钩子函数,JS实现动画 <br>
                transition可设置mode, 不设置(默认)时是leave与enter同时发生; <br>
                in-out是先enter再leave; out-in 是先 leave 完成再 enter
                <button @click="toggle">toggle</button>
                <div style="position: relative;">
                    <transition 
                        mode="in-out"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @after-enter="afterEnter"
                        @enter-cancelled="enterCancelled"
                        v-on:before-leave="beforeLeave"
                        v-on:leave="leave"
                        v-on:after-leave="afterLeave"
                        v-on:leave-cancelled="leaveCancelled"
                        >
                        <div id="dynamic" :is="com"></div>
                    </transition>    
                </div>
                
            </div>
</template>

<script>
    import comC from './comC';
    // import $  from 'jquery';
    import  Velocity from 'velocity-animate'
    // console.log(Velocity.hook);
  export default {
    name: 'el4',
    data() {
        return {
            com: 'com-a'
        }
    },
    components: {
      // 注册局部组件
      'com-c': comC
    },
    methods: {
      toggle: function () {
        if (this.com == 'com-a') {
          this.com = 'com-b';
        } else if (this.com == 'com-b') {
          this.com = 'com-c';
        } else {
          this.com = 'com-a';
        }
      },
      beforeEnter(el) {
        Velocity.hook(el, 'position', 'absolute');
        Velocity.hook(el, 'top', '-100px');
        Velocity.hook(el, 'opacity', '0');
      },
      enter(el, done) {
        Velocity(el, {
          top: 0,
          opacity: 1
        }, {
          complete: done,
          duration: 1000
        })
      },
      afterEnter(el) {
        el.style.position = 'static';
      },
      enterCancelled(el) {},
      beforeLeave(el) {
        Velocity.hook(el, 'position', 'absolute');
        Velocity.hook(el, 'top', '0');
      },
      leave(el, done) {
        Velocity(el, {
          top: '500px',
          opacity: 0
        }, {
          complete: done,
          duration: 1000
        })
      },
      afterLeave(el) {
        el.style.position = 'static';
      },
      leaveCancelled(el) {}
    }
  }

</script>
