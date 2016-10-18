SET NAMES UTF8;
DROP DATABASE IF EXISTS tust;
CREATE DATABASE tust CHARSET=UTF8;
USE tust;

#创建主页大图表
CREATE TABLE idx_img(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    psrc VARCHAR(64),
    ptitle VARCHAR(32),
    phref VARCHAR(64)
);
INSERT INTO idx_img VALUES
    (NULL,'images/index/mainImages/44.jpg','学习型宿舍','http://www.baidu.com'),
    (NULL,'images/index/mainImages/42.jpg','2016年研究生','#'),
    (NULL,'images/index/mainImages/45.jpg','网络文化节','#'),
    (NULL,'images/index/mainImages/49.jpg','两学一做 专题教育网站','#'),
    (NULL,'images/index/mainImages/53.jpg','大学生创新创业大赛','#'),
    (NULL,'images/index/mainImages/57.jpg','热烈庆祝中国共产党成立95周年','#'),
    (NULL,'images/index/mainImages/58.jpg','天津科技大学“校园邮箱”','#');
SELECT * FROM idx_img;

#创建主页新闻表
CREATE TABLE idx_news(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    nhref VARCHAR(64),
    ntitle VARCHAR(64),
    ndate BIGINT
);
INSERT INTO idx_news VALUES
    (NULL,'#','我校学子在“中国软件杯”大学生软件设计大赛中获佳绩',1474442456512),
    (NULL,'#','我校在“创青春”全国比赛中连创佳绩',1474342456512),
    (NULL,'#','我校获批41项天津市教育科学“十三五”规划课题',1474542456512),
    (NULL,'#','我校召开2016年迎新工作会议 安排部署迎新工作',1474142456512),
    (NULL,'#','天津科技大学2016级新生即将报到',1474232456512),
    (NULL,'#','我校获立13项天津市2016年度哲学社会科学规划项目',1474342456512),
    (NULL,'#','海南省委书记罗保铭亲切会见天津科技大学',1474412456512),
    (NULL,'#','国防生及国旗护卫队暑期集训圆满结束',1474602456512),
    (NULL,'#','我校与四川恒成钾盐化工、中盐院签署全面战略合作协议',1474638456512),
    (NULL,'#','我校“食品创新工坊”荣获2015年度',1474642456512);
SELECT * FROM idx_news;

#创建主页公告表
CREATE TABLE idx_notice(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    nhref VARCHAR(64),
    ntitle VARCHAR(64),
    ndate BIGINT
);
INSERT INTO idx_notice VALUES
    (NULL,'#','【人力资源处】关于开展2016年专业技术职务聘任（评审）工作预报名的通知',1474242456512),
    (NULL,'#','【科技处】关于组织申报2016年度“中国商业联合会科学技术奖”的通知',1474122456512),
    (NULL,'#','【造纸学院】博士研究生答辩会通知',1474232456512),
    (NULL,'#','【海洋与环境学院】泰达海洋论坛（第三讲）',1474133456512),
    (NULL,'#','【研工部】第二届“良师益友—我心目中的最好导师”评选结果公示',1474463456512),
    (NULL,'#','【校团委】关于2016-2017学年第一学期学生社团注册相关事项的通知',1474111456512),
    (NULL,'#','【化工与材料学院】博士研究生答辩会通知',1474123456512),
    (NULL,'#','【体育部】2016年学生体质测试通知',1474321456512),
    (NULL,'#','【实验室与设备管理处】关于各学院完善上报2015-2016年度实验室信息统计数据的通知',1474642456512),
    (NULL,'#','【校团委】关于组织我校学生参加“于家堡创新创业季”活动的通知',1474222456512);
SELECT * FROM idx_notice;

#创建主页小图表
CREATE TABLE idx_nimg(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    psrc VARCHAR(64),
    ptitle VARCHAR(32),
    phref VARCHAR(64)
);
INSERT INTO idx_nimg VALUES
    (NULL,'images/index/n1.jpg','','#'),
    (NULL,'images/index/n2.jpg','','#'),
    (NULL,'images/index/n3.jpg','','#'),
    (NULL,'images/index/n4.jpg','','#'),
    (NULL,'images/index/n5.jpg','','#');
SELECT * FROM idx_nimg;

