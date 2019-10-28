<?php
$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['user-street'];
$buiding = $_POST['user-street']; 
$block = $_POST['user-block'];
$appartment = $_POST['user-appartment'];
$zipcode = $_POST['zip-code'];
$payment = $_POST['payment'];

$callback = $_POST['callback'];
$callback = isset($callback) ? 'NO' : 'YES';

$mail_message = '
<html>
<head>
<tittle> Order </title>
</head>
<body>
    <h2> Order list</h2>
    <ul>
        <li> Name: ' . $name .  '</li>
        <li> Telephone number:' . $phone .' </li>
        <li> Name of Street: ' . $street .'  </li>
        <li> Number of building: ' . $building .'</li>
        <li> Number of block: ' . $block .' </li>
        <li> Appartment number: ' . $appartment .' </li>
        <li> Zip code: ' . $zipcode .' </li>
        <li> Payment method:' . $payment .'  </li>
        <li> To call you back: ' . $callback .'  </li>
        
    </ul>
</body>
</html>';

$headers = "From: Администратор сайта <irinabayova@gmail.com>\r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('irinabayova@gmail.com', 'Заказ', $mail_message, $headers);

$data = []; // это пустой массив который ниже мы заполняем

if ($mail) {
     $data['status'] = "OK";
     $data['mes'] = "Сообщение отправлено";
     //echo 'done';
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data); //чтобы превратить массив в джейсон используем функцию json_encode

 ?>