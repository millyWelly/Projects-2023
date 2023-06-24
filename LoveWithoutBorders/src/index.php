<?php

$to = 'milly.welly007@gmail.com'; // адрес получателя
$subject = 'Оставлена заявка'; // тема письма
$message = "Имя: {$_POST['name']}\r\n"; // добавляем имя в текст
$message .= "Телефон: {$_POST['number']}"; // добавляем телефон в текст
$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n"; // установливаем кодировку
 
if( mail($to, $subject, $message, $headers) ){
	echo '<link rel="stylesheet" href="../src/styles/style_1920.css">
	<div class="php_div">
	<p class="php_p">Заявка успешно отправлена!</p>
	<svg class="php_svg" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#C50942"/>
    <path d="M78 31L40.1875 69L23 51.7273" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
	</div>';
}else{
	echo '<p style="color: red;">Ошибка!</p>';
}