/**
 * Created by Giantzero on 2016/9/17.
 */
// 加载foot 和 header
$('#header').load('data/old.header.php');
$('#foot').load('data/old.footer.php');

// 为topNav中例li绑定鼠标移入移出事件
$('#topNav>ul>li').mouseover(function () {
  $(this).children("ul").show();
});
$('#topNav>ul>li').mouseout(function () {
  $(this).children("ul").hide();
});

// 从服务器获取数据，之后调用方法加载数据
$.getJSON('data/old.index.php', function (responseData) {
  loadImgs(responseData[0]);//轮播图
  loadNews(responseData[1]);//新闻
  loadNotice(responseData[2]);//公告
  loadNewsImg(responseData[3]);//新闻图
  slider.start();
  scrollInfo($('#newsList')[0]);
  scrollInfo($('#noticeList')[0]);
});

//加载轮播图
function loadImgs(imgs) {
  var list = $('#list');//图容器
  var btns = $('#buttons');//序号容器
  var AWIDTH = 900;//图宽
  var SWIDTH = 20;//序号宽
  var SOFFSET = 5;//序号间隔宽
  list.css('width', AWIDTH * (imgs.length + 2) + 'px');
  btns.css('width', SWIDTH * imgs.length -SOFFSET + 'px');
  btns.css('left', (AWIDTH - parseInt(btns.css('width'))) / 2 + 'px');
  // 创建文档片段
  var flagImg = document.createDocumentFragment();
  var flagSpn = document.createDocumentFragment();
  // 遍历创建img span标签并设置属性
  for (var i = 0; i < imgs.length; i++) {
    var a = document.createElement('a');
    a.href = '#';
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
  var flag = document.createDocumentFragment();
  for (var i = 0; i < news.length; i++) {
    var li = document.createElement('li');
    var b = document.createElement('b');
    li.appendChild(b);
    var a = document.createElement('a');
    a.href = news[i].nhref;
    a.innerHTML = a.title = news[i].ntitle;
    li.appendChild(a);
    var ntime = parseInt(news[i].ndate);
    var now = new Date();
    if (now - ntime < 259200000) {
      li.style.background = 'url(images/index/icons/news.gif) no-repeat center right';
    }
    flag.appendChild(li);
  }
  $('#newsList').append(flag);
}

//加载公告
function loadNotice(notice) {
  var flag = document.createDocumentFragment();
  for (var i = 0; i < notice.length; i++) {
    var li = document.createElement('li');
    var b = document.createElement('b');
    li.appendChild(b);
    var a = document.createElement('a');
    a.href = notice[i].nhref;
    a.innerHTML = a.title = notice[i].ntitle;
    li.appendChild(a);
    var span = document.createElement('span');
    var ntime = parseInt(notice[i].ndate);
    var time = new Date(ntime);
    var mouth = time.getMonth();
    var date = time.getDate();
    span.innerHTML = `[${mouth}-${date}]`;
    var now = new Date();
    if (now - ntime > 259200000) {
      span.className = 'oldDate';
    }
    li.appendChild(span);
    flag.appendChild(li);
  }
  $('#noticeList').append(flag);
}

//加载图片新闻
function loadNewsImg(nImgs) {
  var flag = document.createDocumentFragment();
  for (var i = 0; i < nImgs.length; i++) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = nImgs[i].phref;
    var img = new Image();
    img.src = nImgs[i].psrc;
    a.appendChild(img);
    li.appendChild(a);
    flag.appendChild(li);
  }
  $('#newsImg').append(flag);
}

// 新闻及公告信息滚动播放
function scrollInfo(area) {
  var liHeight = 21;//单行滚动的高度
  var speed = 50;//滚动的速度
  var timer;
  var delay = 3000;//延迟时间
  area.scrollTop = 0;
  area.innerHTML += area.innerHTML;//克隆一份一样的内容
  function startScroll() {
    timer = setInterval(scrollUp, speed);
    area.scrollTop++;
  }

  function scrollUp() {
    if (area.scrollTop % liHeight == 0) {
      clearInterval(timer);
      setTimeout(startScroll, delay);
    } else {
      area.scrollTop++;
      if (area.scrollTop >= area.scrollHeight / 2) {
        area.scrollTop = 0;
      }
    }
  }

  setTimeout(startScroll, delay);
}

// 轮播对象
var slider = {
  container: $('#container'),  // 外部容器
  list: $('#list'),            // 图片容器
  btns: $('#buttons'),         // 按钮容器
  prev: $('#prev'),            // 前一张按钮
  next: $('#next'),            // 后一张按钮
  btn: null,                   // 所有按钮
  imgs: null,                  // 图片数组
  index: 1,                    // 当前显示的图片下标
  DURATION: 450,               // 动画总时长
  STEP: 30,                    // 动画总步数
  WAIT: 5000,                  // 自动轮播延迟
  timer: null,                 // 定时器
  canMove: true,               // 能否进行左右切换
  start: function () {
    this.imgs = this.list.find('a'); //等待图片及按钮加载完成后再设定值
    this.btn = this.btns.find('span');
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
        this.animate(-900);
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
        this.animate(900);
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
          var offset = -900 * (newIndex - this.index);
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
    slider.container.mouseleave();
  },
  // 按钮切换
  showBtn: function () {
    this.btn.eq(this.index - 1).addClass('on').siblings().removeClass('on');
  },
  // 2.设置动画
  animate: function (offset) {
    this.canMove = false;
    var newLeft = parseInt(this.list.css('left')) + offset;
    var interval = this.DURATION / this.STEP;
    var step = offset / interval;

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
        if (newLeft > -900) {
          slider.list.css('left', width + 2 * 900 + 'px');
        }
        if (newLeft < (width + 2 * 900)) {
          slider.list.css('left', -900 + 'px');
        }
      }
    }

    move();
  }
};

