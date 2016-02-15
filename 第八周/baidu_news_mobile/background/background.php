<?php
// header("Content-Type:text/html;charset=utf-8");
header("Content-Type:application/json;charset=utf-8");
	//$con = mysql_connect("localhost","root","");
  include_once "mysql_con.php";

if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  } 
  else
  {
  	echo "Mysql connect OK";
  	mysql_select_db("phplesson",$con);
  	mysql_query("set names 'utf8'");

    $newstag = $_REQUEST['newstag'];
  	$newstitle = $_REQUEST['newstitle'];
  	$newsimg = $_REQUEST['newsimg'];
  	$newscontent = $_REQUEST['newscontent'];
  	$addtime = $_REQUEST['addtime'];

  	$sql = "INSERT INTO `news`(`newstag`,`newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES ('".$newstag."','".$newstitle."','".$newsimg."','".$newscontent."','".$addtime."')";

  	$result = mysql_query($sql);

  // 	$arr = array();

  // 	while($row = mysql_fetch_array($result))
  // {
  // echo $row['newstitle'] . " " . $row['newscontent'];
  // echo "<br />";

  // 	array_push($arr, array("newstitle"=>$row['newstitle'],"newscontent"=>$row['newscontent']));
  // }
  // echo json_encode($arr, JSON_UNESCAPED_UNICODE);

  // if(!mysql_query($sql))
  // {
  // 	die('Error: ' . mysql_error());
  // }else{
  // 	echo "success";
  // }
}
mysql_close($con);
?>