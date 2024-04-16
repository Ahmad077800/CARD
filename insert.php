<?php
include('db.php');

// print_r($_POST);
$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO students(id, name, email, password)
        VALUES ('$id','$name','$email','$password')
        ON DUPLICATE KEY UPDATE name=VALUES(name), email=VALUES(email), password=VALUES(password)";

if (mysqli_query($conn,$sql) ) {
    echo "successful Added";
}else{
    echo "not Added";
}       

?>