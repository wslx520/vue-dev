<script>
    import Vue from 'vue'
    const comA1 = Vue.component('com-a',{
        name: 'com-a',
        template: `<p>component a</p>`
    });
    const comB = Vue.component('com-b',{
        name: 'com-b',
        template: `<p>component b. hahaha</p>`
    });
    export default comA1
    export {comB}
</script>