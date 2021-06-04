<?php 

include ('password.php');
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

//Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

if(isset($name) && isset($phone)) {
// Формирование самого письма
    $title = "Новое письмо - ehya";
    $body = "
    <h2>Пришли данные:</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>";

    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth   = true;
        // $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        // Настройки вашей почты
        $mail->Host       = 'smtp.inbox.ru'; // SMTP сервера вашей почты
        $mail->Username   = 'oksana_ovchinnikova@inbox.ru'; // Логин на почте
        $mail->Password   = $password; // Пароль на почте
        $mail->SMTPSecure = 'ssl'; 
        $mail->Port       = 465;
        $mail->setFrom('oksana_ovchinnikova@inbox.ru', 'Оксана Овчинникова'); // Адрес самой почты и имя отправителя

        // Получатель письма
        $mail->addAddress('ludmila.ovchinnikova.67@gmail.com'); // Ещё один, если нужен

    // Отправка сообщения
        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }
    // Отображение результата
    header('Location: thanckyou.html');
} else if(isset($email)) {
    $title = "Подписка на истории - ehya";
    $body = "
    <h2>Оформить подписку:</h2>
    <b>Email:</b> $email<br><br>";

    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth   = true;
        // $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        // Настройки вашей почты
        $mail->Host       = 'smtp.inbox.ru'; // SMTP сервера вашей почты
        $mail->Username   = 'oksana_ovchinnikova@inbox.ru'; // Логин на почте
        $mail->Password   = $password; // Пароль на почте
        $mail->SMTPSecure = 'ssl'; 
        $mail->Port       = 465;
        $mail->setFrom('oksana_ovchinnikova@inbox.ru', 'Оксана Овчинникова'); // Адрес самой почты и имя отправителя

        // Получатель письма
        $mail->addAddress('ludmila.ovchinnikova.67@gmail.com'); // Ещё один, если нужен

    // Отправка сообщения
        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }
    // Отображение результата
    header('Location: thanckyou.html');
}