<?php
    //定义响应头
    header("Content-Type:application/json;charset-utf-8");
    $conn = mysqli_connect('127.0.0.1','root','','newtust');
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);

    @$uid = $_REQUEST['uid'];
    if(!$uid){echo '[]';return;}
    $sql = "SELECT * FROM user WHERE uid ='$uid'";
    $result = mysqli_query($conn,$sql);
    $output = mysqli_fetch_assoc($result);
    echo json_encode($output);