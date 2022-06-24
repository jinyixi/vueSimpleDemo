<template>
  <!-- logo和文字 -->
  <div class="header">
    <a href="#/">   <!-- 点击进入首页 -->
      <img class="logo" src="@/assets/Logo1.png" width="25px" />
      <span class="company">冯导专用绩效打分系统</span>
    </a>
  <!-- logo和文字结束 -->


  <!--  下拉菜单-->
<el-dropdown @command="handleCommand"><!--  绑定指令,在methods里定义-->
    <span class="el-dropdown-link">
      您好
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
        <!-- icon是修改图标 ，command是点击后传给方法的值-->
      <el-dropdown-item icon="el-icon-edit" command="edit">>修改密码</el-dropdown-item>

      <el-dropdown-item icon="el-icon-s-operation" command="quit">>退出登录</el-dropdown-item>
      
    </el-dropdown-menu>
</el-dropdown>
  <!--  下拉菜单结束-->


  </div>

</template>

<script>
import {logout} from '@/api/login' // 导入退出系统接口
  export default {
    methods: {
      handleCommand(command){
        switch (command) {
          case 'edit':
            this.$message.success('功能未开放');
            break;
          case 'quit':
            // 获取token
            const token = localStorage.getItem('token')

            // 调用退出登录接口
            logout(token).then(res =>{
              if (res.success){
                // 退出成功，清除本地数据
                localStorage.removeItem('token')

                // 回到登录页面，重新登录
                this.$router.push('/login')
              }else{
                // 退出失败
                this.$message.warning('退出失败');
              }
            })
            
            break;
        
          default:
            break;
        }
      }
    },
  }
</script>

<style scoped>
/* logo */
.logo {
  vertical-align: middle; /* 居中 */
  padding: 0px 10px 0px 10px; /* 上右下左 */
}

/* 文字 */
.company {
  position: absolute;
  color: white;
}

/* 下拉菜单 */
.el-dropdown{
    float: right; /* 浮动在右边 */
    margin-right: 40px; /* 靠右40px */
}
/* 系统管理 */
.el-dropdown-link{
    color: white;
    cursor: pointer; /* 鼠标放上去是手的形状 */
}
</style>