<template>
        <div id="el2">
                两个或多个元素的切换, 使用 v-if, v-else, <br>
                注意相同的 tagName 要使用不同的 key, 不然不会出现过渡效果 <br>
                <button @click="toggle">toggle</button>
                <transition name="fade">
                    <p key="p1" v-if="show == 1">this is p 1</p>
                    <p key="p2" v-else-if="show == 2">section 2</p>
                    <p key="p3" v-else>paragraph 3</p>
                </transition>
            </div>
</template>

<script>
    export default {
            name: 'el2',
            data() {
                return {
                    show: 1
                }
            },
            methods: {
                toggle: function () {
                    if (this.show==1) {
                        this.show = 2;
                    } else if (this.show==2) {
                        this.show =3;
                    } else {
                        this.show = 1;
                    }
                }
            }
        }
</script>
<style>
        .fade-enter-active, .fade-leave-active {
            transition: opacity 0.5s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
        }
</style>