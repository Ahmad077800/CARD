<?php

include('db.php');


$name = $_POST['name'];


$sql = "SELECT * FROM students WHERE LOWER(students.name) LIKE '%$name%' OR LOWER(students.email) LIKE '%$name%'";


$res = mysqli_query($conn,$sql);

while($row = mysqli_fetch_assoc($res)){
  $data[] = $row;
}

echo json_encode($data);
?>
