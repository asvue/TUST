<?php
    header:'Content-Type:application/json';
    $conn = mysqli_connect('127.0.0.1','root','','newtust',3306);
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);
    $data = [];

//    轮播图序号：0
    $idx_img=[];
    $sql = "SELECT phref,ptitle,psrc FROM idx_img ORDER BY ptime DESC LIMIT 0,5";
    $result = mysqli_query($conn,$sql);
    while(($row = mysqli_fetch_assoc($result)) != null){
        $idx_img[]=$row;
    }
    $data[] = $idx_img;

//    新闻序号：1
    $idx_news=[];
    $sql = "SELECT nhref,ntitle,nabstract,ndate FROM news ORDER BY ndate DESC LIMIT 0,6";
    $result = mysqli_query($conn,$sql);
    while(($row = mysqli_fetch_assoc($result)) != null){
        $idx_news[]=$row;
    }
    $data[] = $idx_news;

//    公告序号：2
    $idx_notice=[];
    $sql = "SELECT nhref,ntitle,nabstract,ndepartment,ndate FROM notice ORDER BY ndate DESC LIMIT 0,3";
    $result = mysqli_query($conn,$sql);
    while(($row = mysqli_fetch_assoc($result)) != null){
        $idx_notice[]=$row;
    }
    $data[] = $idx_notice;

    //    专题序号：3
        $idx_special=[];
        $sql = "SELECT nhref,ntitle,nabstract,ndate FROM special ORDER BY ndate DESC LIMIT 0,3";
        $result = mysqli_query($conn,$sql);
        while(($row = mysqli_fetch_assoc($result)) != null){
            $idx_special[]=$row;
        }
        $data[] = $idx_special;

    //发送数据
    echo json_encode($data);