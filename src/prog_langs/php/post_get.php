<form action="post_get.php" method="post">
    <input type="text" name="name" value="model car">
    <input type="submit" value="送信">
</form>

<?php
echo $_POST['name'];// model carが出力される
echo '<a href="post_get.php?get=inval">リンク</a>';
echo $_GET['get'];// invalが出力される
?>