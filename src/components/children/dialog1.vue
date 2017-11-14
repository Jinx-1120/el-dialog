<template>
    <div>
        <h1>我是一级弹窗</h1>
        <el-button type="success" @click="determine">确定</el-button>
        <el-button type="info" @click="cancel">取消</el-button>
    </div>
</template>
<script>
export default {
    props: {
        value: Object,
    },
    data(){
        return{

        }
    },
    created(){
        console.log(this.value)//父组件传递的数据
    },
    methods:{
        determine(){
            this.$emit('close')
        },
        cancel(){
            this.$emit('close')
        }
    }
}
</script>
<style scoped>
    div{
        text-align: center
    }
</style>
