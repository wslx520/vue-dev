<template>
    <div>
        <p>component c. Surprise</p>
        {{surprise}}
    </div>
</template>
<script>
    import EventBus from '../EventBus';
    export default {
        name: 'com-c',
        data() {
            return {
                surprise: 'hahaha'
            }
        },
        created() {
            let self = this;
            EventBus.$on('changeC', function (val) {
                self.surprise = val;
            })
        }
    }
</script>