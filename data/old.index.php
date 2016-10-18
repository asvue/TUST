<?php
    header:'Content-Type:application/json';
    $conn = mysqli_connect('127.0.0.1','root','','tust',3306);
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);
    $sql = "SELECT * FROM idx_img";
    $result = mysqli_query($conn,$sql);
    $data = [];

    $idx_sliderImg=[];
    while(($row = mysqli_fetch_assoc($result)) != null){
        $idx_sliderImg[]=$row;
    }
//    轮播图序号：0
//    TODO 仅倒序查询最后20条数据 ？
    $data[] = $idx_sliderImg;
    $idx_news=[];
    $sql = "SELECT * FROM idx_news";
    $result = mysqli_query($conn,$sql);
    while(($row = mysqli_fetch_assoc($result)) != null){
        $idx_news[]=$row;
    }
//    新闻序号：1
    $data[] = $idx_news;
    $idx_notice=[];
    $sql = "SELECT * FROM idx_notice";
    $result = mysqli_query($conn,$sql);
    while(($row = mysqli_fetch_assoc($result)) != null){
        $idx_notice[]=$row;
    }
//    公告序号：2
    $data[] = $idx_notice;
    $idx_newsImg=[];
        $sql = "SELECT * FROM idx_nimg";
        $result = mysqli_query($conn,$sql);
        while(($row = mysqli_fetch_assoc($result)) != null){
            $idx_idx_newsImg[]=$row;
        }
//    图片新闻序号：2
    $data[] = $idx_idx_newsImg;
    echo json_encode($data);