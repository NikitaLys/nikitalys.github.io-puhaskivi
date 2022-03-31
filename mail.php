<?php
// несколько получателей
$to  = 'go8351@gmail.com' //. ', ';  // обратите внимание на запятую
// $to .= 'wez@example.com';

// тема письма
$subject = 'Puhaskivi запрос';

// текст письма меняется он!!
$message = $_POST['name'] . '<br />' . $_POST['tel'] . '<br />' . $_POST['textarea'] ;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Дополнительные заголовки
$headers .= 'To: Alexey <go8351@gmail.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>
