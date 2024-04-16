<?php
include('db.php');

$id = $_POST['id'];

$sql = "SELECT * FROM students Where id = '$id'";

$res = mysqli_query($conn,$sql);

$row = mysqli_fetch_assoc($res);

echo json_encode($row);
?>