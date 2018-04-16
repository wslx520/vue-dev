<template>
    <p> 
        <span :style="{background: bgc}">component a.</span> 
        <b v-color="'blue'">green b</b>
        <br/>
        <button @click="trigger">trigger event</button>
        <slot></slot>
    </p>
</template>

<script>
    import color from '@/directives/color';
    import EventBus from '../EventBus';
    export default {
        name: 'com-a',
        data() {
            return {
                bgc: '#0f0'
            }
        },
        directives: {
            color
        },
        methods:{
            trigger() {
                EventBus.$emit('fromsuba', this.bgc);
                EventBus.$emit('changeC', 'a nother surprise!');
            }
        }
    }
</script>