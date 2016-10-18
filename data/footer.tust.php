<!--版权信息-->
<footer>
  <div class="container text-center well">
    <p>版权所有：天津科技大学 信息化建设与管理办公室维护 <a href="404.html">联系我们 <span class="glyphicon glyphicon-envelope"></span></a></p>
    <p>河西校区：天津市河西区大沽南路1038号 邮编：300222 滨海校区：天津经济技术开发区第十三大街29号 邮编：300457</p>
    <p>津教备0010号 津ICP备11001142号</p>
  </div>
</footer>
<!--登录模态框-->
<div id="login_modal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h3 class="modal-title">门户登录</h3>
      </div>
      <div class="modal-body">
        <!--错误信息-->
        <div  class="text-center h3" >
          <div id="login-info" style="display: none;"></div>
        </div>
        <form id="login_box">
          <fieldset>
            <div class="form-group has-feedback">
              <label for="uname">用户名：</label>
              <input id="uname" name="uname" class="form-control" placeholder="8位数字(例：12031105)" required autofocus pattern="^[0-9]{8}$">
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <label for="upwd">密码：</label>
              <input type="password" id="upwd" name="upwd" class="form-control" placeholder="6-16位字母或数字(例：123456)" required pattern="^[a-zA-Z0-9]{6,16}$">
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-xs-12">
                  <div class="form-group">
                    <label>
                      <input id="login_remember" type="checkbox" name="keepLog"> 记住密码
                    </label>
                    <input id="login_btn" type="submit" value="登录" class="btn btn-primary btn-block">
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
        <p>忘记了您的用户 <a href="404.html" title="找回密码">密码</a> ?
          <span class="pull-right">不在校内?
            <a href="404.html" title="校外信息门户入口">在此登录</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</div>

<!--返回顶部小按钮-->
<div id="toTop">
  <a href="javascript:;" title="返回顶部"> </a>
</div>

<!--退出提示框-->
<div id="login_out" class="modal fade">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title text-center">确定退出登录么？</h3>
      </div>
      <div class="modal-body text-center">
        <button type="button" class="btn btn-success">确定</button>
        <button type="button" class="btn btn-danger">取消</button>
      </div>
    </div>
  </div>
</div>