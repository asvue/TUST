<?php
    //定义响应头
    header("Content-Type:application/json;charset-utf-8");
    $conn = mysqli_connect('127.0.0.1','root','','newtust');
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);
		
	//接收tab/nid/kw/pno
	@$tab = $_REQUEST['tab'];//表名
	@$nid = $_REQUEST['nid'];//信息id
	@$kw = $_REQUEST['kw'];//关键字
	@$pno = $_REQUEST['pno'];//页码

	//判断是否有表名
	if($tab){
		//判断是否有nid
		if($nid){
			//定义输出数据格式
			$output = [
				'msg'=>1,		//查单条信息
			];
			//查询语句
			$sql = "SELECT * FROM $tab WHERE nid = '$nid'";
			$result = mysqli_query($conn,$sql);
			$row = mysqli_fetch_assoc($result);
			$output['data'] = $row;
			//输出
			echo json_encode($output);
		}else{
			//判断是否有请求页码
			if(!$pno){
				$pno=1;//没有则置为 1
			}
			else {
				$pno = intval($pno);//有则把字符串解析为整数
			}
       //定义数据输出格式
			$output = [
				'msg'=>2,					//查单表信息
				'recordCount'=>0,	//总信息数
				'pageSize'=>5,		//每页显示数
				'pageCount'=>0,		//总页数
				'pno'=>$pno,			//查询页码
				'data'=>[]				//数据
			];
			//查询满足条件的总记录数
			$sql = "SELECT COUNT(*) FROM $tab";
			$result = mysqli_query($conn,$sql);
			$row = mysqli_fetch_assoc($result);
			$output['recordCount'] = intval($row['COUNT(*)']);
			$output['pageCount'] = ceil($output['recordCount']/$output['pageSize']);

			//查询出当前页中指定的数据
			$start = ($output['pno']-1)*$output['pageSize'];	//从哪一行开始读取
			$count = $output['pageSize']; //一次最多读取的行数
			$sql = "SELECT * FROM $tab ORDER BY ndate DESC LIMIT $start,$count";
			$result = mysqli_query($conn,$sql);
			while($p=mysqli_fetch_assoc($result)){
				$output['data'][] = $p;
			}
			//输出
			echo json_encode($output);
		}
	}
	//判断是否有关键字
	else if($kw){
		//定义数据输出格式
		$output = [
			'msg'=>3,	//查关键字
		];
		//定义查询表数组
		$table = ['news','notice','special'];
		//遍历table，插入数据
		for($i=0;$i<count($table);$i++){
			$sql = "SELECT * FROM $table[$i] WHERE ntitle LIKE '%$kw%' OR ncontent LIKE '%$kw%' ORDER BY ndate DESC";
			$output[$table[$i]] = [];
			$result = mysqli_query($conn,$sql);
			while($row = mysqli_fetch_assoc($result)){
					$output[$table[$i]][] = $row;
			}
		}
		echo json_encode($output);
	}
	//都没有输出空
	else{
		echo '[]';
		return;
	}