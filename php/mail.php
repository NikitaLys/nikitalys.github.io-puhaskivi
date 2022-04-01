<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exceprion;

require 'phpmailer/src/phpPHPMailer.php'
require 'phpmailer/src/Exceprion.php'

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('et', 'phpmailer/language/');
$mail->IsHTML(true);

//From
$mail->setFrom('go8351@gmail.com','Puhaskivi');
//To
$mail->addAddress('go8351@gmail.com');
//Theme
$mail->Subjekt = 'Puhaskivi pakkumine';

//Body
$body= '<h1>Teil on uus pakkumine!</h1>'

if(trim(!empty($_POST['name']))){
   $body.='<p><strong>Nimi:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['tel']))){
  $body.='<p><strong>Tel:</strong> '.$_POST['tel'].'</p>';
}
if(trim(!empty($_POST['textarea']))){
  $body.='<p><strong>Komment:</strong> '.$_POST['textarea'].'</p>';
}
$mail->Body = $body;

//Send
if(!$mail->send()){
  $message = 'Oops! Palun, proovige veel kord!';
} else {
  $message = 'Aitäh, võtame teiega esimesel võimalusel ühendust!';
}
$response = ['message' => $message];

header('Content-type : application/json')
echo json_encode($response)
?>

