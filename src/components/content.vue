<template>
  <div class="hello">
    <h1>关于el-dialog组件处理的demo</h1>
    <el-button type="success" @click="one">一级弹窗</el-button>
    <el-button type="primary" @click="closeCurrent">多级弹窗(关闭当前)</el-button>   
    <el-button type="warning" @click="closeAll">多级弹窗(关闭当前)</el-button>   
  </div>
</template>

<script>
import dialog from '../libs/dialog'
import one from './children/dialog1'//一级弹窗
import two from './children/dialog2'//多级弹窗  关闭当前
import three from './children/dialog3'//多级弹窗  关闭所有
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods:{
    one(){//一级弹窗
      dialog({
        title: '一级弹窗',//当前弹窗的标题
        width:'500px', //当前弹窗的宽度
        component: one,//当前弹窗内的子组件
        data: {//用于向弹窗内的子组件传递数据
            name:'gfhfghfghgf'
        },
        // beforeClose: (done) => {
        //     //点右上角关闭按钮后触发
        //     console.log('dialog is closing');
        //     done()
        // },
        close: () => {//关闭后触发
            console.log('一级弹窗已关闭')
        },
        confirm: (result) => {//显式$emit('confirm')时触发
            console.log('弹窗已关闭，弹窗的结果：', result)
        }
      })
    },
    closeCurrent(){//多级弹窗  关闭当前窗口
        dialog({
            title: '多级弹窗 关闭当前',//当前弹窗的标题
            width:'500px', //当前弹窗的宽度
            component: two,//当前弹窗内的自组件
            data: {
                
            },
            // beforeClose: (done) => {
            //     //点右上角关闭按钮后触发
            //     console.log('dialog is closing');
            //     done()
            // },
            close: () => {//关闭后触发
                console.log('一级弹窗已关闭')
            },
            confirm: (result) => {//显式$emit('confirm')时触发
                console.log('弹窗已关闭，弹窗的结果：', result)
            }
        })
    },
    closeAll(){//多级弹窗  关闭所有
        dialog({
            title: '多级弹窗关闭当前所有',//当前弹窗的标题
            width:'800px', //当前弹窗的宽度
            component: three,//当前弹窗内的自组件
            data: {
                
            },
            // beforeClose: (done) => {
            //     //点右上角关闭按钮后触发
            //     console.log('dialog is closing');
            //     done()
            // },
            close: () => {//关闭后触发
                console.log('一级弹窗已关闭')
            },
            confirm: (result) => {//显式$emit('confirm')时触发
                console.log('弹窗已关闭，弹窗的结果：', result)
            }
        })
    }
  },
  components:{
    one,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
