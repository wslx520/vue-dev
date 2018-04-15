<template>
    <div class="">
        <p>本页演示了嵌套路由</p>
        <p>要使用嵌套路由, 则父级路由需要有自己的 router-view</p>
        <router-link to="/routes/sub1?name=s">Sub1</router-link>
        <router-link to="/routes/sub2">Sub2</router-link>
        <router-view></router-view>    
    </div>
    
</template>

<script>
    export default {
        name: 'routes'
    }
</script>

