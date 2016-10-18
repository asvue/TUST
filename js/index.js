/**
 * Created by uid on 2016/10/3.
 */

// 接收数据
$.getJSON('data/index.tust.php', function (responseData) {
  loadImgs(responseData[0]);//轮播图
  loadNews(responseData[1]);//新闻
  loadNotice(responseData[2]);//公告
  loadSpecial(responseData[3]);//专题
  slider.start();
  getTime();
});

//加载轮播
function loadImgs(imgs) {
  var list = $('.list');//图容器
  var btns = $('.buttons');//序号容器
  // 创建文档片段
  var flagImg = document.createDocumentFragment();
  var flagSpn = document.createDocumentFragment();
  // 遍历创建img span标签并设置属性
  for (var i = 0; i < imgs.length; i++) {
    var a = document.createElement('a');
    a.href = imgs[i].phref;
    var img = new Image();
    img.src = imgs[i].psrc;
    img.title = imgs[i].ptitle;
    a.appendChild(img);
    flagImg.appendChild(a);
    var span = document.createElement('span');
    span.title = i + 1;
    flagSpn.appendChild(span);
  }
  // 克隆第一张图片保存到first中，克隆最后一张图片插入到文档首位，将first插入到文档末位
  var first = flagImg.firstChild.cloneNode(true);
  flagImg.insertBefore(flagImg.lastChild.cloneNode(true), flagImg.firstChild);
  flagImg.appendChild(first);
  flagSpn.firstChild.className = 'on';
  // 将文档片段添加到list和btns中
  list.append(flagImg);
  btns.append(flagSpn);
}

//加载新闻
function loadNews(news) {
  var container = $('.news .panel-group');
  var html = '';
  var height = 0;
  var j = 0;
  for (var i = 0; i < news.length; i++) {
    var ntime = parseInt(news[i].ndate);
    var now = new Date();
    var span = (now - ntime < 172800000 ? `<span class="label label-danger">New</span>` :
      '');
    html += `<div class="panel panel-primary">
            <div class="panel-heading">
                ${news[i].ntitle} ${span}
              <a href="${news[i].nhref}" class="pull-right">>>阅读原文</a>
            </div>
            <div class="panel-body">${news[i].nabstract}</div>
          </div>`;
  }
  container.html(html);
  while (height < 400) {
    height += parseInt(getComputedStyle(container.children('.panel')[j]).height) + 5;
    j++;
  }
  container.css('height', height);
  scrollInfo(container[0]);
}

//滚动新闻
function scrollInfo(area) {
  area.scrollTop = 0;
  area.innerHTML += area.innerHTML;//克隆一份一样的内容
  var interval = 10;//滚动的速度 越小越快
  var timer;
  var delay = 5000;//延迟时间
  var i = 0;
  var move = 0;//已移动距离
  var pa = $('.news .panel');
  var height = 0;
  var nextHeight = 0;
  function startScroll() {
    timer = setInterval(scrollUp, interval);
    area.scrollTop++;//启动scrollUp
    nextHeight!=0&&$(area).css('height', nextHeight);
  }
  function scrollUp() {
    liHeight = parseInt(getComputedStyle(pa[i]).height) + 5;
    if ((area.scrollTop-move) % liHeight == 0) {
      if(i==5){
        i=0;
        move=0;
      }else{
        i++;
        move += liHeight;
      }
      height = 0;
      nextHeight = 0;
      var j = i;
      var k = i+1;
      while (height < 400) {
        height += parseInt(getComputedStyle(pa[j]).height) + 5;
        j++;
      }
      while(nextHeight < 400){
        nextHeight += parseInt(getComputedStyle(pa[k]).height) + 5;
        k++;
      }
      $(area).css('height', height);
      clearInterval(timer);
      setTimeout(startScroll, delay);
    } else {
      area.scrollTop++;
      if (area.scrollTop >= area.scrollHeight / 2) {//642
        area.scrollTop = 0;
        move=0;
      }
    }
  }
  setTimeout(startScroll,delay);
}

//加载公告
function loadNotice(notice) {
  var html = '';
  for (var i = 0; i < notice.length; i++) {
    var ntime = parseInt(notice[i].ndate);
    var now = new Date();
    var span = (now - ntime < 172800000 ? `<span class="label label-danger">New</span>` :
      '');
    var hasIn = (i == 0 ? ' in' : '');
    html += `<div class="panel panel-warning">
            <div class="panel-heading">
              <div class="panel-title">
                <a data-toggle="collapse" data-parent="#notice" href="#notice${i}">
                  <span class="label label-default">${notice[i].ndepartment}</span> ${notice[i].ntitle} ${span}
                </a>
              </div>
            </div>
            <div class="panel-collapse collapse ${hasIn}" id="notice${i}">
              <div class="panel-body">${notice[i].nabstract} <a href="${notice[i].nhref}">>>查看全文</a></div>
            </div>
          </div>`;
  }
  $('#notice').html(html);
}

//加载专题
function loadSpecial(special) {
  var html = '';
  for (var i = 0; i < special.length; i++) {
    var ntime = parseInt(special[i].ndate);
    var now = new Date();
    var span = (now - ntime < 172800000 ? `<span class="label label-danger">New</span>` :
      '');
    html += `<div class="panel panel-info">
            <div class="panel-heading">${special[i].ntitle} ${span}
              <a href="${special[i].nhref}" class="pull-right">>>阅读原文</a>
            </div>
            <div class="panel-body">${special[i].nabstract}</div>
          </div>`;
  }
  $('.special .panel-group').html(html);
}

//获取时间
function getTime() {
  var showTime = $('#showTime')[0];
  var time = new Date();
  var y = time.getFullYear();
  var M = time.getMonth() + 1;
  var d = time.getDate();
  var x = time.getDay();
  x = (x == 0 ? '日' : x == 1 ? '一' : x == 2 ? '二' : x == 3 ? '三' : x == 4 ? '四' : x == 5 ? '五' : '六');
  var h = time.getHours();
  h < 10 && (h = '0' + h);
  var m = time.getMinutes();
  m < 10 && (m = "0" + m);
  var s = time.getSeconds();
  s < 10 && (s = "0" + s);
  showTime.innerHTML =
    showTime.innerHTML.indexOf(':') == -1 ?
      `${y}年${M}月${d}日 星期${x} ${h} : ${m} : ${s} ` :
      `${y}年${M}月${d}日 星期${x} ${h}&nbsp;&nbsp;&nbsp;${m}&nbsp;&nbsp;&nbsp;${s} `;
  setTimeout(getTime, 500);
}

//轮播图
var slider = {
  container: $('#sliderBox'),  // 外部容器
  list: $('.list'),            // 图片容器
  btns: $('.buttons'),         // 按钮容器
  prev: $('.prev'),            // 前一张按钮
  next: $('.next'),            // 后一张按钮
  btn: null,                   // 所有按钮
  imgs: null,                  // 图片数组
  index: 1,                    // 当前显示的图片下标
  DURATION: 300,               // 动画总时长
  STEP: 30,                    // 动画总步数
  WAIT: 5000,                  // 自动轮播延迟
  timer: null,                 // 定时器
  canMove: true,               // 能否进行左右切换
  AWIDTH: null,                //图片宽度
  AHEIGHT: null,               //图片高度
  ARATE: 325 / 900,              //todo 抓取图片高度

  start: function () {
    this.imgs = this.list.find('img'); //等待图片及按钮加载完成后再设定值
    this.btn = this.btns.find('span');
    // 响应式
    window.onresize = function () {
      this.AWIDTH = parseInt(slider.container.css('width'));
      this.imgs.css({'width': this.AWIDTH + 'px'});
      this.AHEIGHT = this.AWIDTH * this.ARATE;
      this.list.css({
        'width': this.AWIDTH * this.imgs.length + 'px',
        'left': -this.AWIDTH + 'px'
      });
      this.container.css({'height': this.AHEIGHT + 'px'});
      this.btns.css({'left': (this.AWIDTH - (20 * (this.imgs.length - 2) - 5)) / 2 + 'px'});
      $('.arrow').css({'top': (this.AHEIGHT - 66) / 2 + 'px'});
    }.bind(this);
    window.onresize();
    // 为next prev绑定鼠标点击事件
    this.next.click(function () {
      // 判断当前是否在执行动画  =>防止狂点鼠标出现计算错误
      if (this.canMove) {
        // 判断当前显示按钮，是不是最后一个
        if (this.index == this.imgs.length - 2) {
          this.index = 1;
        }
        else {
          this.index += 1;
        }
        this.animate(-this.AWIDTH);
        this.showBtn();
      }
    }.bind(this));
    this.prev.click(function () {
      if (this.canMove) {
        if (this.index == 1) {
          this.index = this.imgs.length - 2;
        }
        else {
          this.index -= 1;
        }
        this.animate(this.AWIDTH);
        this.showBtn();
      }
    }.bind(this));
    // 遍历btn绑定鼠标点击事件
    for (var i = 0; i < this.btn.length; i++) {
      this.btn[i].onclick = function (e) {
        if (e.target.className == 'on') {
          return;
        }
        if (this.canMove) {
          var newIndex = parseInt(e.target.title);
          var offset = -this.AWIDTH * (newIndex - this.index);
          this.animate(offset);
          this.index = newIndex;
          this.showBtn();
        }
      }.bind(this);
    }
    // 为容器添加鼠标移入事件，清空定时器。添加鼠标移出事件，设置定时器
    this.container.mouseover(function () {
      clearInterval(this.timer);
    }.bind(this));
    this.container.mouseleave(function () {
      this.timer = setInterval(function () {
        slider.next[0].click();
      }, this.WAIT);
    }.bind(this));
    this.container.mouseleave();
  },
  // 按钮切换
  showBtn: function () {
    this.btn.eq(this.index - 1).addClass('on').siblings().removeClass('on');
  },
  // 设置动画
  animate: function (offset) {
    this.canMove = false;
    var newLeft = parseInt(this.list.css('left')) + offset;
    var interval = this.DURATION / this.STEP;
    var step = offset / this.STEP;

    function move() {
      var left = parseInt(slider.list.css('left'));
      var width = -parseInt(slider.list.css('width'));
      if (
        ( step < 0 && left > newLeft) ||
        ( step > 0 && left < newLeft)
      ) {
        slider.list.css('left', left + step + 'px');
        setTimeout(move, interval);
      } else {
        // 转换到指定newLeft后 判断是否处于第一张或最后一张，就拉回到正确的位置
        slider.canMove = true;
        slider.list.css('left', newLeft + 'px');
        if (newLeft > -slider.AWIDTH) {
          slider.list.css('left', width + 2 * slider.AWIDTH + 'px');
        }
        if (newLeft < (width + 2 * slider.AWIDTH)) {
          slider.list.css('left', -slider.AWIDTH + 'px');
        }
      }
    }

    move();
  }
}