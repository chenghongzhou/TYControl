<template>
<el-form 
:model="ruleForm" 
ref="ruleForm" 
label-position="left" 
label-width="0px"
class="demo-ruleForm login-container">
    <h3 class="title">综合管控系统平台</h3>
    <el-form-item prop="account">
        <el-input 
        autofocus 
        type="text" 
        v-model="ruleForm.account" 
        auto-complete="off" 
        placeholder="账号" 
        @keyup.native.enter="handleSubmit"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
        <el-input 
        type="password" 
        v-model="ruleForm.checkPass" 
        auto-complete="off" 
        placeholder="密码" 
        @keyup.native.enter="handleSubmit"></el-input>
    </el-form-item>
   
   
    <el-checkbox 
    v-model="checked" 
    checked 
    class="remember">记住密码</el-checkbox>
    <el-button 
    type="primary" 
    style="width:100%;" 
    @click.native.prevent="handleSubmit" 
    :loading="listLoading">登录</el-button>
</el-form>
</template>

<script>
export default {
    data() {
        return {
            listLoading: false, //登录时的状态
            ruleForm: {
                account: '',
                checkPass: '',
            },
            checked: true,
        };
    },
    methods: {
        handleSubmit(){
            this.$router.push('/home')
        }
       
    },
    mounted() {
        
    },
}
</script>

<style lang="css" scoped>
  .login-container {
    /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02); */
    /* position: absolute;
    top: 40%;
    left: 45%;
    margin-left: -175px; */
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto; 
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
      margin: 0px auto 40px auto;
      text-align:center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
</style>
