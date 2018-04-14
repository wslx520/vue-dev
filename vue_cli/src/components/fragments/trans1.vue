<template>
        <div id="el1">
                单个元素的状态动画
                <button @click="show = !show">toggle</button>
                <transition name="fade">
                    <p key="p1" v-show="show">this is p 1</p>
                </transition>
            </div>
</template>

<script>
    export default {
        name: 'el1',
        data() {
            return {show: true}
        }
    }
</script>