
<template>
    <div id="app">
        <p>指令有两种声明方式: 函数 或 对象</p>
        <p>对象是一个指定了bind, inserted, update, componentUpdated, unbind 等钩子函数的对象</p>
        <p>同组件一样, 指令也分为全局指令和局部指令, 绑定方式类似于 component</p>
        <p>可使用在组件内定义 directives 还定义局部指令; 也可以使用 <b>Vue.directive</b> 来定义全局指令</p>
        注意 v-color="'red'" 里的单引号
        <p v-color="'red'">I'll be red.
            <b v-color="how">yellow </b>
        </p>
        <com-a><input type="text" placeholder="input in com-a" v-focus:haha></com-a>
    </div>
</template>
<script>
    import Vue from 'vue'
    import ComA from './fragments/comA'
    import color from '../directives/color'
    import glob from '../directives/global'
    export default {
        components: {
            'com-a': ComA
        },
        data: function (){
            return {
                how: 'yellow'
            }
        },
        directives: {
            color
        }
    }
</script>