import Vue from 'vue'

function Dialog (option)  {
    var dom = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(dom);
    let tpl = '\
        <el-dialog \
            :close-on-click-modal="false" \
            :custom-class="customClass" \
            :title="title" \
            :visible.sync="show" \
            :width="width" \
            :before-close="handleClose" \
            @close="close">\
                <dialogContent  @close="closeDialog" @confirm="confirmDialog" v-model="dialogData"></dialogContent>\
        </el-dialog>';
    var vue = new Vue({
        el: dom,
        data: function () {
            return {
                title: option.title,
                width: option.width || '1000px',
                show: true,
                dialogData: option.data,
            };
        },
        template: tpl,
        computed: {
            customClass(){
                return `el-dialog--width-${option.width || 'auto'}`;
            }
        },
        methods: {
            handleClose(done){
                if (option.beforeClose) {
                    option.beforeClose(done);
                } else {
                    done();
                }
            },
            close() {
                if (option.close) {
                    option.close();
                }
            },

            closeDialog(){
                this.show = false
            },
            confirmDialog(result){
                this.show = false
                option.confirm && option.confirm(result)
            }
        },
        components: {
            dialogContent: option.component,
        },
    });
    return vue;
}
export default Dialog