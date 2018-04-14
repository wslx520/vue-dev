<template>
    <p>component a. 
        <b v-color="'blue'">green b</b>
        <br/>
        <slot></slot>
    </p>
</template>

<script>
    import color from '@/directives/color'
    export default {
        name: 'com-a',
        directives: {
            color
        }
    }
</script>