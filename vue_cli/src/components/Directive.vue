
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
        声明指令时的 binding 参数, 是一个对象. 其属性列举: 
        <ul>
            <li>name：指令名，不包括 v- 前缀。</li>
            <li>value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。</li>
            <li>oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。</li>
            <li>expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。</li>
            <li>arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。</li>
            <li>modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。</li>
        </ul>
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