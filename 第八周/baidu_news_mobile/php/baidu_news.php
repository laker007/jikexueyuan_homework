<?php

header("Cache-Control:max-age=0");
header("Content-Type:application/json;charset=utf-8");

	$con = mysql_connect("localhost","root","");

	if(!$con)
	{
		echo "connect error";
	}else{
		// echo "connect ok";

		mysql_select_db("phplesson",$con);
		mysql_query("set names 'utf8'");

		$sql = "SELECT * FROM `news` WHERE `newstag` = '推荐'";
		$result = mysql_query($sql);

		$arr = array();

		
		
		while ($row = mysql_fetch_array($result)) {
			// echo $row['newstitle'] . " " . $row['newscontent'];
  			// echo "<br />";

  			// ob_flush();
  			// flush();

  			array_push($arr, array("addtime"=>$row['addtime'],"newstitle"=>$row['newstitle'],"newsimg"=>$row['newsimg'],"newscontent"=>$row['newscontent']));
		}
		echo json_encode($arr, JSON_UNESCAPED_UNICODE);

		// ob_flush();
  // 		flush();

		
	}
	mysql_close($con);

?>