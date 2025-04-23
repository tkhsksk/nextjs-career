<?php
$to = "tkhsksk0318@gmail.com";  // 送信先
$subject = "テストメール";
$message = "ボタンをクリックして送信されました。";
$headers = "From: sender@example.com";

if (mail($to, $subject, $message, $headers)) {
    echo "メールが送信されました。";
} else {
    echo "メール送信に失敗しました。";
}
?>