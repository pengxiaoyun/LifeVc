<template>
  <div>
    <div class="login-wrap">

      <div class="old_user_login">
        <label class="acct_top_back" @click="historyBack"><span></span></label>
        <img src="./login-logo.png" class="acct_top_show">
      </div>

      <div class="bg-wrap">
        <div class="login_content">
          <h1>老用户登录</h1>

          <div id="wrap">

            <div>
              <form id="register-form">
                <ul class="fm_list">
                  <li>
                    <input ref="tel" type="tel" maxlength="11" placeholder="请输入手机号" required="required" class="field_ipt">
                  </li>
                  <li>
                    <input ref="password" type="text" maxlength="20" placeholder="请设置6-20位密码,包含字母、数字或符号" id="regPwd" required="required" class="field_ipt">
                  </li>
                  <li>
                    <input ref="picture" required="required" type="text" maxlength="10" id="regCaptcha" placeholder="请输入图形验证码" class="field_ipt" style="width: 70%;">
                    <div class="verifycode_img">
                      <img src="http://account.lifevc.com/Account/NewVerifyCode?t=1499778920812" style="width: 20%; border-left: 0px solid silver; margin-top: 26px;">
                      <img src="./down.png" style="width: 5%;">
                    </div>
                  </li>
                  <li class="multi">
                    <input ref="phone" type="password" maxlength="20" placeholder="请输入手机验证码" required="required" class="field_ipt">
                    <a class="fidld_skip">获取验证码</a>
                  </li>
                </ul>
                <div id="setting" class="set_link">
                  <p>遇到问题？请<a href="javascript:;">联系客服</a></p>
                </div>
              </form>
            </div>

            <router-link to="/login">
              <input type="button" value="登录" class="btn_login">
            </router-link>
            <input type="button" value="注册" class="btn_regisiter" @click="register">
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    methods: {
      historyBack () {
        history.back()
      },

      register () {
        const tel = this.$refs.tel
        const password = this.$refs.password
        const picture = this.$refs.picture
        const phone = this.$refs.phone
        const reg=/^[0-9a-zA-Z][0-9a-zA-Z_.-]{2,16}[0-9a-zA-Z]$/
        if(tel.value=='') {
          this.$toast('请输入手机号')
          return
        }
        if(reg.test(tel.value)==false){
          this.$toast('请输入正确的手机号')
          return
        } else {
          if (password.value) {
            if (picture.value) {
              if (phone.value) {
                this.$toast('注册成功')
              } else {
                this.$toast('请输入手机验证码')
                return
              }
            } else {
              this.$toast('请输入图形验证码')
              return
            }
          } else {
            this.$toast('请输入密码')
            return
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login-wrap
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    width: 100%;
    height: 640px;
    padding: 0;
    z-index 1000
    background-color: #f2f2f2;
    .old_user_login
      width: 100%;
      height: 135px
      background: #fff;
      position: relative;
      .acct_top_back
        width: 26px;
        height: 26px;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 14.5px
        top: 46px;
        border: 1px solid #3aad36;
        span
          content: "";
          width: 14px;
          height: 14px;
          display: block;
          border-left: 1px solid #3aad36;
          border-top: 1px solid #3aad36;
          position: absolute;
          left: 10px;
          top: 5px;
          transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);

      .acct_top_show
        width: 115px
        overflow: hidden;
        display: block;
        position: absolute;
        top: 30%;
        left: 50%;
        margin-left: -58px
    .bg-wrap
      height: 83.4%;
      background: url('./login-big-bg.jpg') no-repeat;
      background-size: 100% 100%;
      background-position: bottom;
      .login_content
        width: 100%;
        height: 312px
        box-sizing: border-box;
        h1
          width: 100%;
          text-align: center;
          color: #037049;
          font-size: 20px;
          line-height: 67px
          box-sizing: border-box;
    #wrap
      .btn_login
        width: 80%;
        overflow: hidden;
        display: block;
        outline: none;
        text-align: center;
        font-size: 19px;
        color: #fff;
        line-height: 35px
        letter-spacing: 20px;
        text-indent: 20px;
        box-sizing: border-box;
        margin: 0 auto 14.4px
        background-color: #8a8a8a;
        border: 1px solid #8a8a8a;
        border-radius: 5px;
        opacity: .5;
      .btn_regisiter
        margin: 10px auto 0;
        background-color: #3aad36;
        border: 1px solid #3aad36;
        border-radius: 5px;
        fill-opacity: 50%;
        width: 80%;
        overflow: hidden;
        display: block;
        outline: none;
        text-align: center;
        font-size: 19px;
        color: #fff;
        line-height: 34.5px;
        letter-spacing: 20px;
        text-indent: 20px;
        box-sizing: border-box;
    #register-form
      .fm_list
        li
          width: 90%;
          margin: 0 auto;
          height: 48px
          border-bottom: 1px solid #dbdbdb;
          position: relative;
          .field_ipt
            font-size: 16px;
            width: 100%;
            background: transparent;
            position: absolute;
            left: 0;
            top: 0;
            height: 48px;
            box-sizing: border-box;
          .verifycode_img
            position: absolute;
            right: -70%;
            width: 100%;
            top: -14px;


        .multi
          .field_ipt
            font-size: 16px;
            width: 100%;
            background: transparent;
            position: absolute;
            left: 0;
            top: 0;
            height: 48px
            box-sizing: border-box;
            font-family: Microsoft YaHei;

          .fidld_skip
            display: inline-block;
            float: right;
            font-size: 16px;
            color: #3aad36;
            text-decoration: none;
            border: 1px solid #3aad36;
            border-radius: 4px;
            padding: 3.84px 14.4px
            text-align: center;
            position: absolute;
            right: 0;
            top: 9.6px
      .set_link
        padding: 8.64px 19.2px
        height: 48px
        width: 90%;
        margin: 0 auto;
        font-size: 14px;
        box-sizing: border-box;
        position: relative;
        text-align: center;
        p
          font-size: 14px;
          color: #666;
          width: 100%;
          text-align: center;
          margin-bottom: 5px
          a
            color: #3ea438;
            text-decoration: underline;

</style>
