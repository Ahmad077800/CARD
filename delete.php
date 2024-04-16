<?php
include('db.php');

$id = $_POST['id'];

$sql = "DELETE FROM students WHERE  id='$id'";

if (mysqli_query($conn , $sql)) {
    echo"successful deleted";
}else{
    echo"cann’t deleted";
}
?>