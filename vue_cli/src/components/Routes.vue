<template>
    <div class="">
        <p>本页演示了嵌套路由</p>
        <p>要使用嵌套路由, 则父级路由需要有自己的 router-view</p>
        <p>多个 router-view 请使用<b>命名视图</b></p>
        <router-link to="/routes/sub1?name=s">Sub Route 1</router-link>
        <router-link :to="{path: 'sub2'}" append>Sub Route 2</router-link>
        <router-view></router-view>    
    </div>
    
</template>

<script>
    export default {
        name: 'routes'
    }
</script>

