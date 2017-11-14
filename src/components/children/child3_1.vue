<template>
    <div>
        <h1>我是子弹窗</h1>
        <el-button type="success" @click="child">打开子弹窗</el-button>
        <el-button type="success" @click="determine">确定</el-button>
        <el-button type="info" @click="cancel">关闭</el-button>
    </div>
</template>
<script>
import child from './child3_2'
import dialog from '../../libs/dialog'
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
        child(){
            dialog({
                title: '子弹窗的子弹窗',//当前弹窗的标题
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
                    this.$emit('close')
                },
                confirm: (result) => {//显式$emit('confirm')时触发
                    console.log('弹窗已关闭，弹窗的结果：', result)
                }
            })
        },
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
