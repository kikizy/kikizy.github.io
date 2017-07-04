<template>
	<div class="hello">
        <mt-button type="default" size="large" @click.native="">default</mt-button>
        <br>
        <mt-button type="primary" size="large" @click.native="">primary</mt-button>
        <br>
        <mt-button type="danger" size="large">danger</mt-button>
        <br>

        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            
        </mt-loadmore>

    </div>
</template>

<style></style>

<script>
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Loadmore } from 'mint-ui';

export default {
    name: 'hello',
    data () {
        let list = [];
        for (var i=0; i<50; i++) {
            list.push(i);
        }
        return {
            msg: 'Welcome to Your Vue.js App',
            list: list,
            allLoaded: false
        }
    },
    methods: {
        hello() {
            // Toast('Hello');
            Toast({
                message: '提示',
                position: 'middle',
                iconClass: 'icon icon-success',
                duration: 2000
            });
        },
        alert() {
            // MessageBox({
            //     title: '提示',
            //     message: '确定执行此操作?',
            //     showCancelButton: true
            // });
            MessageBox.confirm('可以接受吗？', '询问').then(value=>{
                //MessageBox.alert(value);
                Toast({
                    message: '操作成功',
                    position: 'middle',
                    duration: 1000
                });
            }).catch(value => {
                //MessageBox.alert(value);
                Toast({
                    message: '操作失败',
                    position: 'middle',
                    duration: 2000
                });
            });
        },
        loadTop() {
            // load more data
            for (var i=51; i<100; i++) {
                this.list.unshift(this.list.length);
            }
            this.$refs.loadmore.onTopLoaded();
            console.log('loadTop');
        },
        loadBottom() {
            // load more data
            this.allLoaded = true;
            //this.$refs.loadmore.onBottomLoaded();
            console.log('loadBottom');
        }
    }

}
</script>