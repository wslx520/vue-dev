<template>
    <div>
        <p>本页演示了跨多组件通信</p>
        <p>使用的是 Event Bus 技术</p>
        <p>
                event bus 其实就是一个空的Vue实例
                
        </p>
        <quote>
            import Vue from 'vue';
            export const EventBus = new Vue();
        </quote>
        <p>因为vue实例自带on,off,once,emit等事件系统的方法</p>
        <p>所以 event bus 可用于跨组件通讯, 十分方便</p>  
                
        <com-a></com-a>
        <com-c></com-c>
    </div>
</template>

<script>
    import EventBus from './EventBus';
    import comA from './fragments/comA';
    import comC from './fragments/comC';
    EventBus.$on('fromsuba', function(bgc) {
        alert(bgc);
        setTimeout(function () {
            EventBus.$emit('changeC', '我又变了!');
        }, 1000)
        
    });
    export default {
        name: 'cross',
        components:{
            'com-a': comA,
            'com-c': comC
        }
    }
</script>