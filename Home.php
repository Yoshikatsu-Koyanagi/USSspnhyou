<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="ja">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS">
<title>home</title>
<link rel="stylesheet" href="./Home.css">
<script src=""></script>
</head>
<body>
    <h2>出品票入力画面</h2>
    <div class="wrapper">
        <div class="inputs-area area">
            <form method="post" action="Home.php">
                <textarea name="No" class="ta-No" placeHolder="No."></textarea>

                <textarea name="Syareki" class="ta-Syareki" placeHolder="車歴"></textarea>
                <textarea name="Haikiryou" class="ta-Haikiryou" placeHolder="排気量"></textarea>
                <textarea name="Katashiki" class="ta-Katashiki" placeHolder="型式"></textarea>
                <textarea name="Syodo" class="ta-Syodo" placeHolder="初度"></textarea>
                <textarea name="Syamei" class="ta-Syamei" placeHolder="車名"></textarea>
                <textarea name="Keijou" class="ta-Keijou" placeHolder="型式"></textarea>
                <textarea name="Grade" class="ta-Grade" placeHolder="グレード"></textarea>
                <textarea name="Hyoukaten" class="ta-Hyoukaten" placeHolder="評価点"></textarea>
                <textarea name="Naisou" class="ta-Naisou">内装</textarea>
                <input type="submit" name="submit" value="完了" class="login-button">
            </form>
        </div>
    

        <div class="picture-area area">
            <img src="./USSpic/S17007.jpg" class="pic">
        <div>
    </div>
</body>
</html>

<?php
ini_set( 'display_errors', 1 );
ini_set( 'error_reporting', E_ALL );



?>