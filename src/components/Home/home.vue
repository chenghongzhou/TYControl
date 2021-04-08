<template lang="html">
    <div class="container" style="height: 100%;">
        <div class="left_active">
            <el-menu 
            theme="dark" 
            class="el-menu-vertical-demo" 
            unique-opened 
            router>
                <el-menu-item index="/workbench" @click="hanleToLink('/workbench')">工作台</el-menu-item>
                <el-menu-item index="/matter" style="position: relative;" @click="hanleToLink('/matter')">事项<div class="matter_mask" v-if="matterMask"></div></el-menu-item>
                <el-menu-item index="/information" @click="hanleToLink('/information')">消息</el-menu-item>
                <el-menu-item index="/organization" @click="hanleToLink('/organization')">组织</el-menu-item>
            </el-menu>
        </div>
        
        <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </el-col>
    </div>
</template>

<script>
export default {
     data() {
        return {
            matterMask: false,
        };
    },
    mounted: function(){
       
    },
    methods: {
        hanleToLink(link){
            if(link == '/matter'){
                this.matterMask = true
                return false;
            }
            this.matterMask = false
            this.$router.push(link)
        },
        handleMatterList(){
            this.matterMask = true
        },
        closeMatterMask(){
            
        }
    }
}
</script>

<style lang="css">
.container　{
    /* min-width: 1080px; */
    height: 100%;
}
.el-menu-vertical-demo > .el-menu-item{
    background-color: #324157 !important;
}
.left_active {
    width: 6%;
    min-width: 100px;
    /* min-height: 944px; */
    /* min-height: 914px; */
    height: 100% ;
    background-color: #324157;
    float: left;
}
.content-all-wrapper {
    /*margin-top: 2px;*/
    height: 100%;
    /* min-width: 1200px; */
}
.content-container {
    display:inline-block;
    overflow-y: scroll;
    padding: 20px;
}
.content-wrapper {
    width: 87% !important;
    height: 100%;
    background-color: #fff;
    float: left;
}
/*  */
.el-menu-item-group__title{
    padding-top: 0 !important;
}
.el-submenu__title{
    height: 40px !important;
    line-height: 40px !important;
}
/* 设置为相应左边导航选中的item高度以及行高，对应为三级路由的行高进行设置 */
.el-submenu .el-menu-item{
    height: 40px !important;
    line-height: 40px !important;
}
/* 设置为相应左边导航选中的item高度以及行高，对应为二级路由的行高进行设置 */
/* el-menu */
.left_active .el-menu-item{
    height: 60px !important;
    line-height: 60px !important;
    text-align: center;
}
.el-dialog__body{
    padding-top: 10px !important;
}
.el-menu--horizontal{
    background-color: #324157 !important;	
	border-bottom: none !important;
}
.el-menu--horizontal>.el-menu-item{
	color: #bfcbd9 !important;
}
.el-menu--horizontal>.el-menu-item.is-active{
	color: #409EFF !important;
	border-bottom: 5px solid transparent !important;	
	background-color: #324157 !important;	
}
.el-menu--horizontal>.el-menu-item.is-active:hover{
	color: #409EFF !important;	
}
.el-menu--horizontal>.el-menu-item:hover{
	background-color: #324157 !important;
	color: #bfcbd9 !important;
	border-bottom: 5px solid #409EFF !important;
}
.matter_mask{
    width: 80px;
    height: 200px;
    background-color: #ffffff;
    position: absolute;
    top: -30px;
    left: 100%;
    box-shadow: 0 0 6px -1px #cccccc;
}
</style>
