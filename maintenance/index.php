<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>現在メンテナンス中です</title>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" sizes="229x256">
</head>
<style>
@font-face {
    font-family: 'MyFont';
    src: url(myfont.ttf);
}

html {
    -webkit-text-size-adjust: 100%;
    height: 100svh;
    font-family: MyFont;
}

body {
    height: 100%;
    margin: 0;
}

main {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.mainView {
    padding: 0 2em;
}

.mainView img {
    max-width: 450px;
    width: 100%;
    margin: 0 0 2em;
    filter: none !important;
  mix-blend-mode: normal !important;
}

.mainView h1 {
    text-align: center;
    font-size: 1.6rem;
    margin: 0 0 1rem;
}

.mainView p {
    font-size: 14px;
    text-align: center;
    margin: 0;
}

.mainView p span {
    font-size: 120%;
    font-weight: bold;
    margin-right: .5rem;
}


@media (prefers-color-scheme: dark) {
    html {
        background-color: oklch(27.9% .041 260.031);
    }

    .theme-image {
        content: url('images/logo-dark.svg');
    }

    h1,
    p{
        color: white;
    }
}
</style>

<body>
    <main>
        <div class="mainView">
            <img class="theme-image" src="images/logo.svg">

            <h1>サイト一時停止中です</h1>
            <p><span>9:00〜18:00</span>の時間帯に<br />公開しているので、再度お越しくださいませ</p>
            <!-- <form action="mail.php" method="post">
                <input type="submit" value="メールを送信">
            </form> -->
        </div>
    </main>
</body>

</html>