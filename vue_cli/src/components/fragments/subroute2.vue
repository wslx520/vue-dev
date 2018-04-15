<template>
    <div>
    <h2>这是第二个被嵌套的路由</h2>
    <p>下面将显示路由参数 param, query </p>
    <p>$route.param:{{$route.param}}, $route{{$route.query}}</p>    
    </div>
    
</template>
<script>
    export default {
        name: 'subroute2'
    }
</script>