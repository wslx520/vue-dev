<template>
        <div id="el3">
                两个或多个元素的切换, 使用动态组件, <br>
                transition可设置mode, 不设置(默认)时是leave与enter同时发生; <br>
                in-out是先enter再leave; out-in 是先 leave 完成再 enter
                <button @click="toggle">toggle</button>
                <transition name="translate" mode="in-out">
                    <div id="dynamic" :is="com"></div>
                </transition>
            </div>
</template>

<script>
    import comC from './comC'
    export default {
            name: 'el3',
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
                    if (this.com== 'com-a') {
                        this.com = 'com-b';
                    } else if (this.com=='com-b') {
                        this.com = 'com-c';
                    } else {
                        this.com = 'com-a';
                    }
                }
            }
        }
</script>

<style>
    .translate-enter-active, .translate-leave-active {
        transition: all 0.7s;
        position: absolute;
    }
    .translate-enter {
        opacity: 0;
        transform: translate(-500px)
    }
    .translate-leave-to {
        opacity: 0;
        transform: translate(500px)
    }
</style>