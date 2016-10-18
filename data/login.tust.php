<?php
    header('Content-Type:application/json;charset=utf-8');
    $uid = $_REQUEST['uid'];
    @$upwd = $_REQUEST['upwd'];

    $conn = mysqli_connect('127.0.0.1','root','','newtust',3306);
    $sql = 'SET NAMES UTF8';
    mysqli_query($conn,$sql);
    $sql = "SELECT * FROM user WHERE uid ='$uid' AND upwd = '$upwd'";
    $result = mysqli_query($conn,$sql);
    $data = [];
    if($result){
        if($row = mysqli_fetch_assoc($result)){
            $data['msg'] = '200';//成功登录
            $data['uname'] = $row['uname'];
            $data['uid'] = $uid;
        }else{
            $data['msg'] = '100';//用户名或密码错误
        }
    }else{
        $data['msg'] = '0';//服务器错误
    }
    echo json_encode($data);