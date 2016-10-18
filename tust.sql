SET NAMES UTF8;
DROP DATABASE IF EXISTS newtust;
CREATE DATABASE newtust CHARSET = UTF8;
USE newtust;

#用户表
CREATE TABLE user(
    uid INT PRIMARY KEY,
    uname VARCHAR(16),
    upwd VARCHAR(32),
    uidcard BIGINT,
    usrc VARCHAR(64)
);
INSERT INTO user VALUES
    ('12031105','顾','123456','111111199311062222','../images/user/12031105.jpg'),
    ('12031106','何','456789','111111199409122222','../images/user/12031106.jpg'),
    ('12031107','孔','789123','111111199602242222','../images/user/12031107.jpg');
SELECT * FROM user;

#主页大图表
CREATE TABLE idx_img(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    psrc VARCHAR(64),
    phref VARCHAR(64),
    ptitle VARCHAR(32),
    ptime BIGINT
);
INSERT INTO idx_img VALUES
    (NULL,'images/index/mainImages/44.jpg','404.html','学习型宿舍',1475744803884),
    (NULL,'images/index/mainImages/42.jpg','404.html','2016年研究生',1475744803884),
    (NULL,'images/index/mainImages/45.jpg','404.html','网络文化节',1475744803884),
    (NULL,'images/index/mainImages/49.jpg','404.html','两学一做 专题教育网站',1475744803884),
    (NULL,'images/index/mainImages/53.jpg','404.html','大学生创新创业大赛',1475744803884),
    (NULL,'images/index/mainImages/57.jpg','404.html','热烈庆祝中国共产党成立95周年',1475744803884),
    (NULL,'images/index/mainImages/58.jpg','404.html','天津科技大学“校园邮箱”',1475744803884);
SELECT * FROM idx_img;

#新闻表
CREATE TABLE news(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    nsrc VARCHAR(512),
    nhref VARCHAR(64),
    ntitle VARCHAR(64),
    nabstract VARCHAR(1024),
    ncontent VARCHAR(10240),
    ndate BIGINT
);
INSERT INTO news VALUES
    (NULL,'','404.html','我校学子在“中国软件杯”大学生软件设计大赛中获佳绩','摘要：软件杯”大学生软件设计大赛中获佳绩,Lorem ipsum dolor sit amet, consectetur adipisicing','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803800),
    (NULL,'','404.html','我校在“创青春”全国比赛中连创佳绩','摘要：我校在“创青春”全国比赛中连创佳绩','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803801),
    (NULL,'','404.html','我校获批41项天津市教育科学“十三五”规划课题','摘要：项天津市教育科学“十三五”规划课题','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803802),
    (NULL,'','404.html','我校召开2016年迎新工作会议 安排部署迎新工作','摘要：6年迎新工作会议 安排部署迎新工作','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803803),
    (NULL,'','404.html','天津科技大学2016级新生即将报到','摘要：天津科技大学2016级新生即将报到','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803804),
    (NULL,'','404.html','我校获立13项天津市2016年度哲学社会科学规划项目','摘要：市2016年度哲学社会科学规划项目','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803805),
    (NULL,'','404.html','海南省委书记罗保铭亲切会见天津科技大学','摘要：省委书记罗保铭亲切会见天津科技大学,Lorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicing','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803806),
    (NULL,'','404.html','国防生及国旗护卫队暑期集训圆满结束','摘要：国防生及国旗护卫队暑期集训圆满结束,Lorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicing','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803807),
    (NULL,'','404.html','我校与四川恒成钾盐化工、中盐院签署全面战略合作协议','摘要：盐化工、中盐院签署全面战略合作协议Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803808),
    (NULL,'','404.html','我校“食品创新工坊”荣获2015年度','摘要：校“食品创新工坊”荣获2015年度,Lorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicing','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.',1475744803809);
SELECT * FROM news;

#公告表
CREATE TABLE notice(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    nsrc VARCHAR(512),
    nhref VARCHAR(64),
    ntitle VARCHAR(64),
    nabstract VARCHAR(1024),
    ncontent VARCHAR(10240),
    ndepartment VARCHAR(64),
    ndate BIGINT
);
INSERT INTO notice VALUES
    (NULL,'','404.html','关于开展2016年专业技术职务聘任（评审）工作预报名的通知','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','人力资源处',1475744803810),
    (NULL,'','404.html','关于组织申报2016年度“中国商业联合会科学技术奖”的通知','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','科技处',1475744803811),
    (NULL,'','404.html','博士研究生答辩会通知','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','造纸学院',1475744803812),
    (NULL,'','404.html','泰达海洋论坛（第三讲）','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','海洋与环境学院',1475744803813),
    (NULL,'','404.html','第二届“良师益友—我心目中的最好导师”评选结果公示','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','研工部',1475744803814),
    (NULL,'','404.html','关于2016-2017学年第一学期学生社团注册相关事项的通知','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','校团委',1475744803815),
    (NULL,'','404.html','博士研究生答辩会通知','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','化工与材料学院',1475744803816),
    (NULL,'','404.html','2016年学生体质测试通知','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','体育部',1475744803817),
    (NULL,'','404.html','关于各学院完善上报2015-2016年度实验室信息统计数据的通知','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','实验室与设备管理处',1475744803818),
    (NULL,'','404.html','关于组织我校学生参加“于家堡创新创业季”活动的通知','摘要：Lorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ameLorem ipsum dolor sit ame','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','校团委',1475744803819);
SELECT * FROM notice;

#创建专题表
CREATE TABLE special(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    nsrc VARCHAR(512),
    nhref VARCHAR(64),
    ntitle VARCHAR(64),
    nabstract VARCHAR(1024),
    ncontent VARCHAR(10240),
    ndate BIGINT
);
INSERT INTO special VALUES
    (NULL,'','404.html','我校学子在“中国软件杯”大学生软件设计大赛中获佳绩','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803800),
    (NULL,'','404.html','我校在“创青春”全国比赛中连创佳绩','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803801),
    (NULL,'','404.html','我校获批41项天津市教育科学“十三五”规划课题','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803802),
    (NULL,'','404.html','我校召开2016年迎新工作会议 安排部署迎新工作','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803803),
    (NULL,'','404.html','天津科技大学2016级新生即将报到','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803804),
    (NULL,'','404.html','我校获立13项天津市2016年度哲学社会科学规划项目','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803805),
    (NULL,'','404.html','海南省委书记罗保铭亲切会见天津科技大学','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803806),
    (NULL,'','404.html','国防生及国旗护卫队暑期集训圆满结束','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803807),
    (NULL,'','404.html','我校与四川恒成钾盐化工、中盐院签署全面战略合作协议','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803808),
    (NULL,'','404.html','我校“食品创新工坊”荣获2015年度','摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur doloremque eius exercitationem officiis omnis optio perspiciatis possimus repudiandae rerum. Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam.','Cumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quamCumque explicabo illo modi praesentium voluptate. Ea exercitationem minima quam',1475744803809);
SELECT * FROM special;

