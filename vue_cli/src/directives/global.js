import Vue from 'vue'
// global directive
const focus = Vue.directive('focus', {
    // 每个钩子函数都接收这些参数
    // bind 只会在指令绑定时调用一次
    bind(el, binding, vnode, oldVnode) {
        console.log(el, binding, vnode, oldVnode);
    },
    inserted(el) {
        el.focus();
    },
    update(){},
    componentUpdated(){},
    // unbind 只会在指令解绑时调用一次
    unbind(){}
})

export default focus