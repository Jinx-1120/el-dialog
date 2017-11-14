<template>
    <div>
        <h1>我是二级弹窗的父级弹窗</h1>
        <el-button type="success" @click="child">打开子弹窗</el-button>
        <el-button type="info" @click="cancel">关闭</el-button>
    </div>
</template>
<script>
import child from './child2_1'
import dialog from '../../libs/dialog'
export default {
    props: {
        value: Object,
    },
    data(){
        return{

        }
    },
    methods:{
        child(){
            dialog({
                title: '二级弹窗的子弹窗',//当前弹窗的标题
                width:'400px', //当前弹窗的宽度
                component: child,//当前弹窗内的子组件
                data: {//用于向弹窗内的子组件传递数据
                    name:'sdadadad'
                },
                // beforeClose: (done) => {
                //     //点右上角关闭按钮后触发
                //     console.log('dialog is closing');
                //     done()
                // },
                close: () => {//关闭后触发
                    console.log('子弹窗已关闭')
                },
                confirm: (result) => {//显式$emit('confirm')时触发
                    console.log('弹窗已关闭，弹窗的结果：', result)
                }
            })
        },
        cancel(){
            this.$emit('close')
        }
    },
    components:{
        child
    }
}
</script>
<style scoped>
    div{
        text-align: center
    }
</style>
