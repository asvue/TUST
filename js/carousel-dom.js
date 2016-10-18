/**
 * Created by Administrator on 2016/9/17.
 */
//TODO 1 图片数组
/*var imgs=[
 {"alt":1,"src":"images/index/mainImages/42.jpg",
 "href":"#"},
 {"alt":2,"src":"images/index/mainImages/44.jpg",
 "href":"#"},
 {"alt":3,"src":"images/index/mainImages/45.jpg",
 "href":"#"},
 {"alt":4,"src":"images/index/mainImages/49.jpg",
 "href":"#"},
 {"alt":5,"src":"images/index/mainImages/53.jpg",
 "href":"#"},
 {"alt":6,"src":"images/index/mainImages/57.jpg",
 "href":"#"},
 {"alt":7,"src":"images/index/mainImages/58.jpg",
 "href":"#"}
 ];*/
/***todo HTML结构
    todo <div id="slider">
    todo    <div id="list" style="left:-900px;"></div>
    todo    <div id="buttons"></div>
    todo    <a href="javascript:;" id="prev" class="arrow">&lt;</a>
    todo    <a href="javascript:;" id="next" class="arrow">&gt;</a>
    todo </div>
 ***/
if(imgs){
    document.head.removeChild(
        document.querySelector('head script:last-Child')
    );
}
//TODO 轮播对象
var slider={
    container:document.querySelector('#container'),//TODO 外部容器
    list:document.querySelector('#list'),//TODO 图片容器
    btns:document.querySelector('#buttons'),//TODO 按钮容器
    btn:document.querySelector('#buttons').getElementsByTagName('span'),//TODO 按钮
    prev:document.querySelector('#prev'),//TODO 前一张
    next:document.querySelector('#next'),//TODO 后一张
    imgs:imgs,//TODO 图片数组对象
    index:1,//TODO 当前显示的图片下标
    DURATION:450,//TODO 动画总时长
    STEP:30,//TODO 动画总步数
    WAIT:5000,//TODO 自动轮播时间间隔
    timer:null,//TODO 定时器
    canMove:true,//TODO 能否点击上下页
    picWidth:900,//TODO 图片宽度
    //TODO 启动器
    start:function () {
        this.loadImgs(this.imgs);
        //TODO 1.为next prev绑定鼠标点击时间提前绑定this
        this.next.onclick=function () {
            //TODO 判断当前是否在执行动画  =>防止狂点鼠标出现计算错误
            if(this.canMove){
                //TODO 判断当前显示按钮，是不是最后一个
                if(this.index == this.imgs.length){
                    this.index = 1;
                }else{
                    this.index += 1;
                }
                //TODO 调用annimate
                this.animate(-this.picWidth);
                //TODO 调用showBtn
                this.showBtn();
            }
        }.bind(this);
        this.prev.onclick=function () {
            if(this.canMove){
                if(this.index == 1){
                    this.index = this.imgs.length;
                }else{
                    this.index -= 1;
                }
                this.animate(this.picWidth);
                this.showBtn();
            }
        }.bind(this);
        //TODO 遍历btn绑定鼠标点击事件
        for(var i = 0; i < this.btn.length; i++){
            this.btn[i].onclick = function (e) {
                if(e.target.className == 'on'){return ;}
                if(this.canMove){
                    var newIndex = parseInt(e.target.title);
                    var offset = -this.picWidth * (newIndex - this.index);
                    this.animate(offset);
                    this.index = newIndex;
                    this.showBtn();
                }
            }.bind(this);
        }
        //TODO 为容器添加鼠标移入事件，清空定时器。添加鼠标移出事件，设置定时器
        this.container.onmouseover = function () {
            clearInterval(this.timer);
        }.bind(this);
        this.container.onmouseleave = function () {
            this.timer=setInterval(function () {
                this.slider.next.onclick();
            },this.WAIT);
        }.bind(this);
        //TODO 调用自动轮播
        this.container.onmouseleave();
    },
    //TODO 按钮切换
    showBtn:function () {
        //TODO 遍历清除btn的class
        for(var i=0;i<this.btn.length;i++){
            if(this.btn[i].className == 'on'){
                this.btn[i].className='';
                break;
            }
        }
        //TODO 为当前btn添加class
        this.btn[this.index-1].className = 'on';
    },
    //TODO 设置动画
    animate:function (offset) {
        this.canMove=false;
        var newLeft = parseInt(this.list.style.left) + offset;
        var interval=this.DURATION/this.STEP;
        var step=offset/interval;
        //TODO 单次点击动画
        function move() {
            var left=this.slider.list.style.left;
            var width=-parseInt(this.slider.list.style.width);
            //TODO 判断 向右(left不断减小)并且当前left > 设定值
            //TODO  或者 向左(left不断增加)并且当前left < 设定值
            //TODO      就将当前left值加上步长step
            //TODO      递归调用自身，间隔为interval
            if(
                ( step < 0 && parseInt(left) > newLeft) || ( step > 0 && parseInt(left) < newLeft)
            ){
                this.slider.list.style.left=parseInt(left)+step +'px';
                setTimeout(move,interval);
            }else{
                //TODO 转换到指定newLeft后 判断是否处于第一张或最后一张，就拉回到正确的位置
                this.slider.canMove=true;
                this.slider.list.style.left=newLeft + 'px';
                if(newLeft > -900){
                    this.slider.list.style.left = width+2*this.slider.picWidth + 'px';
                }
                if(newLeft < (width+2*this.slider.picWidth)){
                    this.slider.list.style.left = - this.slider.picWidth + 'px';
                }
            }
        }
        move();
    },
    //todo 动态加载图片和按钮
    loadImgs:function (imgs) {
        //TODO 设置list和btns的宽度，btns的left
        this.list.style.width=this.picWidth*(imgs.length+2)+'px';
        this.btns.style.width=20*imgs.length+'px';
        this.btns.style.left=(this.picWidth-parseInt(this.btns.style.width))/2+'px';
        //TODO 创建文档片段
        var flagImg=document.createDocumentFragment();
        var flagSpn=document.createDocumentFragment();
        //TODO 遍历创建img span标签并设置属性
        for(var i=0;i<imgs.length;i++){
            var img=new Image();
            img.src=imgs[i].src;
            img.title=imgs[i].title;
            flagImg.appendChild(img);
            var span=document.createElement('span');
            span.title=i+1;
            flagSpn.appendChild(span);
        }
        //TODO 克隆第一张图片保存到first中，克隆最后一张图片插入到文档首位，将first插入到文档末位
        var first=flagImg.firstChild.cloneNode();
        flagImg.insertBefore(flagImg.lastChild.cloneNode(),flagImg.firstChild);
        flagImg.appendChild(first);
        flagSpn.firstChild.className='on';
        //TODO 将文档片段添加到list和btns中
        this.list.appendChild(flagImg);
        this.btns.appendChild(flagSpn);
    }
}
//TODO 调用start方法启动轮播
 slider.start();