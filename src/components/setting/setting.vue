<template>
  <div>
    <div class="header">
      <div class="header-content">

        <span class="btn-back" @click="historyBack">
          <label class="leftback-img"></label>
        </span>

        <p class="header-title">设置</p>
      </div>
    </div>

    <div class="setting-wraper">
      <div class="dashboard">
        <ul style="margin-bottom: 1rem;">
          <li>
            <span class="pd20 item-title">清理缓存</span>
            <span class="arr-r"></span>
            <span class="item-tip"></span>
          </li>
          <li style="margin-top: 1rem;">
            <span class="pd20 item-title">关于LifeVC</span>
            <span class="arr-r"></span>
            <span class="item-tip">平台: browser 版本：5.1.2 - 261</span>
          </li>
        </ul>
      </div>
      <div class="acct-logout" style="display: none;">
        <input type="button" value="退出当前账号" class="btn btn-logout">
      </div>
      <div class="acct-logout">
        <input type="button" value="查看版本" class="btn btn-logout" style="background-color: rgb(242, 242, 242); color: rgb(242, 242, 242); margin-top: 70px;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      historyBack () {
        history.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .setting-wraper
    width: 100%;
    margin: 0 auto;
    margin-top: 4rem;
    padding-bottom: 4.5rem;
    color: #2e2e2e;
    .dashboard
      li
        width: 100%;
        height: 5rem;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        margin: -1px auto 0;
        .item-title
          display: inline-block;
          line-height: 5rem;
          text-decoration: none;
          float: left;
          vertical-align: 0;
          font-size: 1.4rem;
          color: #585858;
          padding-left: 20px;
        .arr-r
          width: 10px;
          height: 10px;
          display: inline-block;
          float: right;
          border-right: 2px solid #bbb;
          border-top: 2px solid #bbb;
          margin: 25px 10px 0 0;
          transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -o-transform: rotate(45deg);
        .item-tip
          height: 5rem;
          float: right;
          text-align: right;
          font-size: 1.2rem;
          color: #ccc;
          padding-right: 5px;
          margin-top: 24px;
</style>
