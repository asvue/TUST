<?php
    header("Content-Type:application/json");
    $kw = $_REQUEST['kw'];
    $conn = mysqli_connect('127.0.0.1','root','','newtust',3306);
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);
    $data = [];
    $sql = "SELECT * FROM news WHERE ntitle LIKE '%$kw%' OR nabstract LIKE '%$kw%' ORDER BY ndate DESC";
    $result = mysqli_query($conn,$sql);
    $news = [];
    while($row = mysqli_fetch_assoc($result)){
        $news[] = $row;
    }

    $sql = "SELECT * FROM special WHERE ntitle LIKE '%$kw%' OR nabstract LIKE '%$kw%' ORDER BY ndate DESC";
    $result = mysqli_query($conn,$sql);
    $special = [];
    while($row = mysqli_fetch_assoc($result)){
        $special[] = $row;
    }

    $sql = "SELECT * FROM notice WHERE ntitle LIKE '%$kw%' OR nabstract LIKE '%$kw%' ORDER BY ndate DESC";
    $result = mysqli_query($conn,$sql);
    $notice = [];
    while($row = mysqli_fetch_assoc($result)){
        $notice[] = $row;
    }
    $data[] = $news;
    $data[] = $notice;
    $data[] = $special;

    echo json_encode($data);