<?php
include('db.php');
 
$sql = "SELECT * FROM students";

$res = mysqli_query($conn,$sql);

// print_r($res);  
while ($row = mysqli_fetch_assoc($res)) {
    $data[] = $row;    //$data => array contunt with json data
}   

echo json_encode($data);

?>