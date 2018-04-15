<template>
    <div class="grey">
        这是一个被嵌套的路由
        <p>下面将显示路由参数 param, query </p>
        <p>$route.params:{{$route.params}}, $route.query: {{$route.query}}</p>
        <p>当路由 path 很长时, 推荐 <b>命名路由</b>, 然后在 router-link 上<b>动态绑定</b> to, 并使用路由的 name 而不是 path 来跳转</p>
        <p>而且这样一来路由参数可随意变化, you can <button @click="change">change</button> then click </p>
        本嵌套路由还可以继续嵌套下级:
        <router-link :to="{name: 'sub_sub2', query: {from: referrer}}">去下级</router-link>
        <router-view></router-view>
    </div>
    
</template>
<script>
    export default {
        name: 'subroute1',
        data() {
            return {
                referrer : 'subroute1'
            }
        },
        methods: {
            change() {
                this.referrer = this.referrer === 'subroute1' ? 'I won\'t tell you' : 'subroute1';
                console.log(this.referrer)
            }
        }
    }
</script>
<style>
        .grey {
            background-color: grey;
        }
    </style>