/**
 * Created by uid on 2016/10/9.
 */
$('#header_box').load('data/header.tust.php', function () {
  //滚动监听
  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top >= 114) {
      $('#topNav-fake').removeClass('hidden');
      $('#topNav').addClass('navbar-fixed-top');
      $('#toTop').css('bottom','5%').fadeIn();
    } else {
      $('#topNav-fake').addClass('hidden');
      $('#topNav').removeClass('navbar-fixed-top');
      $('#toTop').fadeOut();
    }
  });
  validation();
  $("[href='404.html']").click(function (e) {
    e.preventDefault();
  });
});
$('#footer_box').load('data/footer.tust.php',function () {
  //返回顶部按钮
  $('#toTop').click(function () {
    $("body").animate({scrollTop: 0}, 500);
    $(this).animate({bottom:'100%'},500);
  });
  $("[href='404.html']").click(function (e) {
    e.preventDefault();
  });
});
// 登录验证
var validation = function () {
  var uname = $('#uname');          //用户名输入框
  var upwd = $('#upwd');            //密码输入框
  var klogin = $('#login_remember');//记住密码
  var btn = $('#login_btn');        //提交按钮
  var info = $('#login-info');      //提示信息框
  var login = $('.login_toggle');   //模态框触发按钮
  var topTip = $('#login_topTip');  //顶部提示
  var box = $('#login_box');        //表单
  var mo = $('#login_modal');       //模态框
  //阻止默认表单提交
  box.submit(function (e) {
    e.preventDefault();
  });
  //如果登录过，就直接更新信息
  if(sessionStorage.length){
    for(var i=0; i<sessionStorage.length; i++){
      //是数字且长度为8就赋予uid
      if(!isNaN(sessionStorage.key(i))&&sessionStorage.key(i).length == 8){
        update();
        break;
      }
    }
  }
  //用户进行登录时，查找上次登录用户名置入表单
  login.click(function () {
    var lastUser = localStorage.getItem('lastUser');
    if (lastUser) {
      var userpwd = localStorage.getItem(lastUser);
      uname.val(lastUser);
      upwd.val(userpwd);
      klogin.attr('checked', '');
    }
  });
  //更改用户自动查密码
  uname.blur(function () {
    if (this.value.length == '8') {
      var up = localStorage.getItem(this.value);
      if (up) {
        upwd.val(up);
        klogin.attr('checked', '');
      }
    }
  });
  //提交按钮绑定click事件
  btn.click(function () {
    //客户端验证通过发送异步请求服务器验证
    if (uname[0].validity.valid && upwd[0].validity.valid) {
      $.getJSON('data/login.tust.php', {'uid': uname.val(), 'upwd': upwd.val()}, function (data) {
        doResponse(data);
      })
    }
  });
  // 处理响应消息
  function doResponse(data) {
    info.removeClass();
    if (data.msg == 100) {        // 客户端错误
      info.html('用户名或密码有误，请重新输入！');
      info.addClass('alert alert-danger');
    } else if (data.msg == 200) {  //成功登陆
      info.html('登陆成功！');
      info.addClass('alert alert-success');
      info.slideDown();
      btn.addClass('disabled');
      setTimeout(function () {
        info.slideUp();
        btn.removeClass('disabled');
      }, 1000);
      setTimeout(function () {
        doSuccess(data);
      }, 1200);
      return;
    } else if (data.msg == 0) {    //服务器错误
      info.html('服务器繁忙，请稍后再试！');
      info.addClass('alert alert-warning');
    }
    //清空表单
    uname.val('');
    upwd.val('');
    klogin.removeAttr('checked');
    // 显示提示框
    info.slideDown();
    //禁用按钮
    btn.addClass('disabled');
    //设置一次性定时器关闭提示框，关闭按钮禁用
    setTimeout(function () {
      info.slideUp();
      btn.removeClass('disabled');
    }, 3000);
  }
  //成功响应
  function doSuccess(data) {
    // 判断是否记住密码
    localStorage.removeItem(uname.val());
    if (klogin[0].checked) {
      localStorage.setItem(uname.val(), upwd.val());
    }
    // 隐藏模态框
    mo.modal('hide');
    //保存登录状态
    sessionStorage.setItem(data.uid, data.uname);
    localStorage.setItem('lastUser',data.uid);
    //更新顶部信息
    update();
    //重载
    location.reload();
  }
  // 更新顶部信息
  function update() {
    var i = sessionStorage.key(0);
    var u = sessionStorage.getItem(i);
    login.html('个人中心');
    login.attr('href', "javascript:location.href='home.tust.html';");
    topTip.html(`欢迎你：${u} <a href="javascript:;" onclick="clearsess()">退出</a>`);
    topTip.css('display', 'inline-block');
  }
};
// 退出登录
function clearsess() {
  var out = $('#login_out');
  out.modal('show');
  out.on('click', 'button', function (e) {
    if (e.target.innerHTML == '确定') {
      sessionStorage.clear();
      location.reload();
    } else {
      out.modal('hide');
    }
  })
}
$("[href='404.html']").click(function (e) {
  e.preventDefault();
});



