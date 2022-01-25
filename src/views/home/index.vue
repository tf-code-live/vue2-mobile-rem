<template>
    <div class="home">
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="query">
                查询
            </mt-tab-item>
            <mt-tab-item id="into">
                录入
            </mt-tab-item>
            <mt-tab-item id="profile">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    components: {

    },
    data () {
        return {
            selected: 'query'
        }
    },
    methods: {

    },
    computed: {

    },
    created () {

    }
}
</script>
<style lang='scss'>

</style>
