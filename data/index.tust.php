<?php
    header:'Content-Type:application/json';
    $conn = mysqli_connect('127.0.0.1','root','','newtust',3306);
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);
    $data = [];

//    轮播图
    $sql = "SELECT phref,psrc,ptitle FROM idx_img ORDER BY ptime DESC LIMIT 0,5";
    $result = mysqli_query($conn,$sql);
    while(($row = mysqli_fetch_assoc($result)) != null){
        $data['imgs'][]=$row;
    }

//    新闻
    $sql = "SELECT ndate,ntitle,nid,nabstract FROM news ORDER BY ndate DESC LIMIT 0,6";
    $result = mysqli_query($conn,$sql);
    while(($row = mysqli_fetch_assoc($result)) != null){
        $data['news'][]=$row;
    }

//    公告
    $sql = "SELECT ndate,ntitle,nid,nabstract,ndepartment FROM notice ORDER BY ndate DESC LIMIT 0,3";
    $result = mysqli_query($conn,$sql);
    while(($row = mysqli_fetch_assoc($result)) != null){
        $data['notice'][]=$row;
    }

//    专题
    $sql = "SELECT ndate,ntitle,nid,nabstract FROM special ORDER BY ndate DESC LIMIT 0,3";
    $result = mysqli_query($conn,$sql);
    while(($row = mysqli_fetch_assoc($result)) != null){
        $data['special'][]=$row;
    }

    //发送数据
    echo json_encode($data);