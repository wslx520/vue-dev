<template>
    <div id="transition">
            本页试验了 vue 的 两种动画方式: css 与 js <br>
            但两种方式都离不开 transition 组件
            <tran-1></tran-1>
            <hr>
            <tran-2></tran-2>
            <hr>
            <tran-3></tran-3>
            <hr>
            <tran-4></tran-4>
    </div>
</template>

<script>
    import pub from './fragments/public'
    import Trans1 from './fragments/trans1'
    import Trans2 from './fragments/trans2'
    import Trans3 from './fragments/trans3'
    import Trans4 from './fragments/trans4'

    export default {
        name: 'transition',
        components: {
            'tran-1': Trans1,
            'tran-2': Trans2,
            'tran-3': Trans3,
            'tran-4': Trans4,
        }
    }
</script>
<style>
    #transition {
        text-align: left;
    }
</style>