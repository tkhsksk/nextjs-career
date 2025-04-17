import type { Metadata } from "next";

import Link  from 'next/link'
import Image from "next/image"
import Github from '@components/github';
import Syhl from '@components/code';

export const metadata: Metadata = {
   title: 'go｜'+process.env.SITE_TITLE,
   description: "について",
};

function WrapCode(txt: string) {
   return <code className="break-all bg-black/[.1] dark:text-black dark:bg-white/[.8] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">go</span><span className="text-md">について</span></h1>
      <p className="leading-7">本項目ではphpの書き方について、基本から応用までを学習し、<br />最終はフレームワーク{WrapCode('gin')}にて基本動作を作成するまでの経緯です</p>
      
      <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200">
         <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="text-left">
         <tbody className="dark:text-gray-600">
            <tr>
               <th className="pr-4">go</th><td>v1.22.5</td>
            </tr>
            <tr>
               <th className="pr-4">gin</th><td>v1.10.0</td>
            </tr>
            <tr>
               <th className="pr-4">mysql</th><td>v11.5.2-MariaDB</td>
            </tr>
            </tbody>
         </table>
      </div>

      <section id="helloWorld">

         <h2 className="text-2xl font-semibold mb-3">Hello World、変数</h2>
         <p className="leading-7 mb-3">文字列としてHello Worldの出力、変数への代入について記述します</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">Hello World.</h3>
            <p className="leading-7">goで文字列を表示する場合は、以下のファイルを{WrapCode('go run ファイル名')}実行できます</p>
            <Syhl
               lang='go'
               file='helloWorld.go'
            />
            <p className="leading-7 mb-3">Hello World!以外の文字列を表記する場合は、上記コードのHello World!部分をそれ以外の文字列に置き換えるだけです<br />
            次にgoの文字列を改行したい場合があります、htmlでは単純に{WrapCode('br')}タグのみで改行できましたが{WrapCode('go')}で実行した場合以下の出力になります
            </p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='go'
               file='helloWorld_br.go'
            />
            <p className="leading-7 mb-3">htmlタグを{WrapCode('go')}の文中挟むとそのまま表示されてしまいます。<br />go中の改行には末尾の半角スペース対策と同じく\nを用います。</p>
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='go/helloWorld.sh'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">変数</h3>
            <p className="leading-7 mb-3">文字列にテキストや数値を格納しておくことも可能です<br />中学生の数学で学習したx=1,y=2と同じ要領です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='go'
               file='var.go'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='go/var.sh'
            />

            <p className="leading-7 mb-3">{WrapCode('x := "test"')}でxにtestを格納し、それを{WrapCode('fmt.Println()')}で呼び出します<br />文字を結合する場合にはx,yにそれぞれの文字列を格納して+(プラス)で結合することができます</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='go'
               file='join.go'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='go/join.sh'
            />

            <p className="leading-7 ">ここまでで分かりましたが、pythonやjavaで厳格にされていた変数の型が、phpくらい簡略化されているようです<br />
            なので{WrapCode('var s string := "test"')}といったように厳格に型を宣言することも可能ですが<br />
            {WrapCode('s := "test"')}、{WrapCode('v := 11')}といったようにタブルクォーテーションのあるなしでstrとintを区別できます</p>
         </div>

      </section>

      <section id="calc">
         <h2 className="text-2xl font-semibold mb-3">計算と型</h2>
         <p className="leading-7 mb-3">数字での計算（足し算、引き算、掛け算、割り算）と型について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">計算</h3>
            <p className="leading-7">単純にプラスの符号を用いて、足し算をします</p>
            <Syhl
               lang='go'
               file='calc01.go'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='go/calc01.sh'
            />

            <p className="leading-7 mb-3">引き算、掛け算、割り算も以下の符号で計算可能です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='go'
               file='calc02.go'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='go/calc02.sh'
            />

            <p className="mb-3">次に変数に数字を代入して計算をしてみます、数字の場合はダブルクォーテーションで囲む必要はありません</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='go'
               file='calc03.go'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='go/calc03.sh'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">型宣言</h3>
            <p className="leading-7">本来、変数に値を代入する場合は、型の宣言が必要です<br />
            goの場合、そこが非常に曖昧になっているため宣言せずとも計算が可能ですが<br />宣言した上での計算をしましょう</p>
            <p className="leading-7 mb-3">例えば7という文字があった場合、文字としての7とも捉えられるし、数字としての7とも捉えられます<br />
            この7は数字としての7だよ、と宣言するのが型宣言です<br />
            この宣言をしないと計算ができなかったり、文字列の結合ができなかったりします</p>
            <Syhl
               lang='go'
               file='type_int.go'
            />
            <p className="leading-7 mb-3">代入する値を入力する前に(int)をつけるだけで、「数字の7」と宣言することができます<br />では、以下の場合どうなるでしょうか</p>
            <Syhl
               lang='go'
               file='type_str.go'
            />
            <p className="mb-3">文字列としての7と8を宣言して、それを足しています</p>
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='type_str_result.sh'
            />
            <p className="mb-3">数字を文字列と宣言した場合、エラーが発生します<br />型を宣言した場合はそれに見合った操作をしなければエラーになるようです</p>
         </div>

      </section>

      <section id="func,struct">
         <h2 className="text-2xl font-semibold mb-3">関数、struct</h2>
         <p className="leading-7 mb-3">関数の宣言、public private protectedについて</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">関数</h3>
            <p className="leading-7">プログラム中に何度も出現する数値を変数に代入することで、再利用が可能ですが<br />計算式や定まった結合などを行う場合は関数を用います<br />以下は2つの数字を足してから1を引く、という計算を何度も使う場合です</p>
            <Syhl
               lang='go'
               file='function.go'
            />
            <p className="mb-3">x,yという変数を設定し、それぞれを足した上で1を引き、それをreturnで返り値にしています<br />この関数をechoで表示することによって計算後の結果を表示させます<br />よって2+3-1が計算され以下が結果となります</p>
            <Syhl
                lang='sh'
                file='go/func.sh'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">struct</h3>
            <p className="font-semibold">・goにClassはない</p>
            <p className="leading-7 mb-3">また関数を使う場合、その関数をさらに囲うためにこれまではClassというものがというものが定義できましたが<br />
            goではclassという概念がないです、そのためclassで関数をまとめたりアクセス制限などができません<br />
            代わりにgoでは{WrapCode('struct')}という概念があり、これがclassの役割を果たします<br /><br />
            まず、この{WrapCode('struct')}を活用して商品の合計金額を出力してみます</p>
            <Syhl
               lang='go'
               file='struct.go'
            />
            <p className="leading-7 mb-3">次に内部パッケージを自作して、{WrapCode('import')}する方法です<br />
            これにはgoの{WrapCode('モジュールモード')}を利用する必要があり、ディレクトリ構成を考えた上で、コマンドを実行する必要があります<br />
            以下実行手順です、まずディレクトリ構成は以下とします</p>

            <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200 mb-3">
               <p className="font-semibold mb-3 text-cyan-950">前提となるディレクトリ構成</p>
               <Syhl
                  lang='sh'
                  file='go_dir.sh'
               />
            </div>

            <p className="leading-7 mb-3">{WrapCode('モジュールモード')}の実行にはルートとなるディレクトリを作成して、その配下に取得するパッケージを登録します<br />
            取得元はmain.go、取得先はprice.goとしています<br />
            price.goで実行する内容を見てみましょう</p>

            <Syhl
               lang='go'
               file='struct/pkg/price.go'
            />

            <p className="leading-7 mb-3">Productメソッドを公開状態にし、main.goで取得できるようにしています<br />
            このパッケージをmainで取得できるようにするには、main側でimportして読み込めるようにしなければなりません<br />
            そのためには{WrapCode('モジュールモード')}を利用します<br />
            以下コマンドです</p>

            <Syhl
               lang='sh'
               file='go_dir_init.sh'
            />

            <p className="leading-7 mb-3">{WrapCode('go mod init struct')}を実行すると、実行階層にgo.modが生成されます<br />
            この位置がstructのルート位置となり、ルート/ディレクトリ(struct/pkg)でimportが可能となります<br />
            main側で実行するプログラムです</p>

            <Syhl
               lang='go'
               file='struct/main.go'
            />

            これを実行します

            <Syhl
               lang='sh'
               file='go_dir_run.sh'
            />

            <p className="leading-7 mb-3">classと同様に、外部で使う場合とpackage内部で使う場合で、公開非公開を使い分けましょう<br />
            セキュリティには欠かせないstructです</p>

         </div>

      </section>

      <section id="array">
         <h2 className="text-2xl font-semibold mb-3">配列、for、foreach</h2>
         <p className="leading-7 mb-3">配列の作り方と各種回し方について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">配列</h3>
            <p className="leading-7 mb-3">この配列について、phpの学習上でつまづきました<br />
            そもそもなぜ配列が必要なのか？について的確に解説をしているサイトも参考書もなかったからです<br />
            自分が学習上で学び、配列の有効性について独自解釈しましたのでそれを以下に記載します</p>
            <p className="font-semibold">forで配列を回す</p>
            <Syhl
               lang='go'
               file='for.go'
            />
            <p className="leading-7 mb-3">上記構文をざっくりした解説はコメントアウトにて説明されていますが、<br />
            $xの配列の0番目、1番目...と続き、3番目までをechoする構文です<br />
            もちろんfor文で配列を表示させることは可能ですし、具体的にx番目からx番目まで表示、などの場合は有効なのですが<br />
            例えば配列が何番目まで存在しているかが不明なケースは存在していない配列を指定するとエラーが発生するため、issetもしくはemptyなどを必要とします<br />
            数に関わらず、配列が全て表示され切るまで表示させる場合はforeachが有効でしょう</p>
            <p className="font-semibold">foreachで配列を回す</p>
            <Syhl
               lang='go'
               file='forEach.go'
            />
            <p className="leading-7 mb-3">数の指定などをしなくても、すべての配列が表示されます<br />
            forとforeachは似ているようで異なっているため、用途に基づいて利用しましょう</p>

            <hr className="my-5" />

            <p className="font-semibold">データの検索</p>
            <p className="leading-7 mb-3">配列から配列を作成することで、簡易的なデータ検索が可能です<br />
            配列を回して、その中で該当となるデータのみ格納する配列を新規に作成すると、検索済みデータの配列を作成できます</p>
            <p className="leading-7">実際のコードは以下です</p>
            <Syhl
               lang='go'
               file='forEach_search.go'
            />
            <p className="leading-7">新規に検索データの配列を作成する場合はforよりも、<br />
            繰り返しの処理に向いている、foreachの方が分かりやすく且つ作りやすい構造です<br /><br />
            繰り返しの処理で言うと、例えばすべてのデータに🐶をつける場合も</p>
            <Syhl
               lang='go'
               file='dog.go'
            />
            <p className="leading-7">で可能です<br />
            phpを深く学ぶまで配列の利点はわかりにくいものですが、<br />
            実務で利用するにあたり、検索や繰り返しの処理で重要な役割を果たしていることに気づきました</p>

         </div>

      </section>

      <section id="crud">
         <h2 className="text-2xl font-semibold mb-3">CRUD</h2>
         <p className="leading-7 mb-3">dbにおける作成（Create）、読み出し（Read）、更新（Update）、削除（Delete）を一挙解説</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">CRUDを始める前に</p>
            <p className="leading-7 mb-3">前提としてmysqlにdatabase名(go)を作成、user(guest)を作成し、guestに対してgoへのすべての権限を付与しています<br />
            データベースにはtoyというテーブルを作成し、id,nameをカラムとして登録しました</p>
            <Syhl
               lang='sh'
               file='db_go.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">Create</p>
            <p className="leading-7">早速crudのc、create(作成)から開始します<br />
            ユーザ名:パスワード@IPアドレス/データベース名の順で記述がgoの基本です<br />
            create(dbの追加)するケースもありますが、ほとんどの場合{WrapCode('insert')}(データの追加)が多いため<br />
            createではなく{WrapCode('insert')}について記載します<br />
            データベース{WrapCode('go')}のテーブル{WrapCode('toy')}に{WrapCode('id:1、name:bear')}をinsertするgoが以下です</p>
            <Syhl
               lang='go'
               file='insert.go'
            />
            <p className="leading-7 mb-3">実行すると{WrapCode('github.com/go-sql-driver/mysql')}がない旨のエラーが表示されます<br />
            エラーの指示に従ってコマンドを実行します</p>
            <Syhl
               lang='sh'
               file='db_go_step.sh'
            />
            <p className="leading-7 mb-3">実際に登録されたかどうかを確認するために<br />
            shell上でコマンドを利用し中身を見てみましょう</p>
            <Syhl
               lang='sh'
               file='create_result_go.sh'
            />
            <p className="leading-7">dbにデータが登録されていることが確認できました<br />
            insertは商品登録、会員登録など、新規のデータを追加する際に利用します</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Read</p>
            <p className="mb-3">コマンドでdbに接続し表示させるだけでなく、golangでdbを読み取り、配列として表示させる文を考えてみます<br />
            {WrapCode('struct')}の項目で学習した、構造体を活かして、データを格納するための構造体をmain外で宣言し、そこに格納するようにしてみます<br />
            構造としては、db上のデータと同じidとnameのみの構造とします</p>
            <p className="leading-7 mb-3">それではgoから{WrapCode('select')}を使って出力してみます</p>
            <Syhl
               lang='go'
               file='read.go'
            />
            <p className="leading-7 ">{WrapCode('for range')}で出力できました<br />
            ここで気づいたことですが、{WrapCode('for range')}でiを宣言し、文中でiを使わないとエラーが発生してしまう部分<br />
            iの部分を_にすれば利用しなくてもエラーが発生しないようです</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Update</p>
            <p className="leading-7 mb-3">dbに登録したデータを変更したい場合もあるかと思います、その場合は{WrapCode('update')}を使ってデータを更新します<br />
            先ほど{WrapCode('insert')}したデータをbear→robotに{WrapCode('update')}してみましょう<br />
            これまでと同様、insertで利用したものを再利用してみましょう</p>
            <Syhl
               lang='go'
               file='update.go'
            />
            <p className="leading-7">実際に更新されたことを確認しましょう</p>
            <Syhl
               lang='sh'
               file='update_result_go.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">Delete</p>
            <p className="leading-7">実際にはdbからデータを削除することはほぼなくデータベースを設計する際にvisibleなどの項目を設け、<br />
            そこに公開非公開をフラッグとすることが多いです<br />
            特にdbからデータを削除してしまうと二度とデータを閲覧できなくなってしまいます<br />
            そのため、deleteするケースは少ないですが、{WrapCode('delete')}する場合は{WrapCode('delete')}を使ってデータを更新します</p>
            <Syhl
               lang='go'
               file='delete.go'
            />
            <p className="leading-7">実際に削除されたことを確認しましょう</p>
            <Syhl
               lang='sh'
               file='delete_result_go.sh'
            />
         </div>

      </section>

      <section id="post,get">
         <h2 className="text-2xl font-semibold mb-3">POST、GET</h2>
         <p className="leading-7 mb-3">別のページにデータを送る{WrapCode('POST')}、クエリパラメータを取得する{WrapCode('GET')}</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">htmlページに密接に関わる</p>
            <p className="leading-7">{WrapCode('POST')}は「登録する」ボタンなどをクリックした際に別ページやコントローラなどにデータを受け渡し、処理する際に利用します<br />
            また、getは主にクエリパラメータを取得しています<br />
            ページロード時に消えてしまう{WrapCode('POST')}に対して、{WrapCode('GET')}はurl上のパラメータを取得するため、反恒久的にデータを保持することが可能です<br />
            htmlも関わってくるため、実行できるはずのプログラムを以下に示します<br />
            name,fileを別ページに{WrapCode('/post_confirm')}ページにpostするgolangです</p>
            <Syhl
               lang='html'
               file='go_form.html'
            />
            <Syhl
               lang='go'
               file='post.go'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">GET</p>
            <p className="leading-7 mb-3">クエリパラメータを取得するgolangです<br />
            {WrapCode('/get_query?id=')}を取得する前提で作ってみます<br />
            {WrapCode('/get_query?id=test')}の場合、printlnで{WrapCode('test')}が出力されるはずです</p>
            <Syhl
               lang='go'
               file='get.go'
            />
         </div>

      </section>

      <section id="gin">

      <Image
              className="mb-3 mx-auto"
              src={'/go/gin.png'}
              alt="success"
              width={60}
              height={38}
              priority
            />

         <h2 className="text-2xl font-semibold mb-3">gin</h2>
         <p className="leading-7 mb-3">goの代表的なワイヤーフレーム{WrapCode('gin')}を習得します<br />
         他ワイヤーフレームと同じく、ページ表示、データの登録、表示、更新、検索まで作成します</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">環境構築</p>
            <p className="leading-7 mb-3">まずはサーバー側に接続して、<br />
            goモジュールの設定とginのインストールをします</p>
            <Syhl
               lang='go'
               file='gin/ec2/install.sh'
            />
            <p className="leading-7 mb-3">インストールが完了したら、{WrapCode('git環境')}を構築してlocalにcloneしましょう<br />
            次の項目からlocal(macOS上)で実行します</p>

            <div className="w-full mb-3">
                <div className="p-4">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                        <div className="items-center justify-center dark:bg-gray-800">
                            <div className="relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden bg-slate-200">
                                <p className="font-semibold mb-3 text-cyan-950">実際に作成したgin環境</p>
                                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                                <tbody className="dark:text-gray-600">
                                <tr>
                                   <th className="pr-4 break-all">url</th><td><Link href="https://gin.ksk318.me/" target="_blank">https://gin.ksk318.me/</Link></td>
                                </tr>
                                <tr>
                                   <th className="pr-4">basic user</th><td>guest</td>
                                </tr>
                                <tr>
                                   <th className="pr-4">basic pass</th><td>{process.env.BASIC_PASS_GIN}</td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="items-center justify-center dark:bg-gray-800">
                            <div className="relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden bg-slate-200">
                                <Image
                                  className="mb-5 mx-auto"
                                  src={'/GitHub_Lockup_Dark.svg'}
                                  alt="success"
                                  width={120}
                                  height={38}
                                  priority
                                />
                                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                                <tbody className="dark:text-gray-600">
                                <tr>
                                    <th className="pr-4 break-all">url</th><td><Link href="https://github.com/tkhsksk/gin" target="_blank">https://github.com/tkhsksk/gin</Link></td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-5" />

            <p className="font-semibold mb-3">ページ表示</p>
            <p className="leading-7 mb-3">{WrapCode('main.go')}ファイルにルーティングとページファイルのパスを記述をすると<br />
            ページ表示できます<br />
            本体は{WrapCode('controller')}に記述すべきですが、とりあえず表示させるために、<br />
            {WrapCode('main.go')}にすべて記述してみます</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul className="dark:text-gray-600">
                    <li>main.go</li>
                    <li>view/index.html</li>
                </ul>
            </div>

            <Syhl
               lang='go'
               file='gin/template/main.go'
            />
            <Github url="gin/blob/main/main.go" />
            <p className="leading-7">対象のページファイルは通常のhtmlファイル構成と同じ記述で大丈夫です</p>
            <Syhl
               lang='go'
               file='gin/template/index.html'
            />
            <Github url="gin/blob/main/view/index.html" />
            <p className="leading-7 mb-3">ここまで編集を終えたら{WrapCode('main.go')}の階層で{WrapCode('go run main.go')}を実行します</p>

            <div className="relative shadow-md sm:rounded-lg mb-4 grid overflow-hidden w-fit">
                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                環境名(環境)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                確認用URL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                local(Mac OS)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="http://localhost:8090/" target="_blank">http://localhost:8090/</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://gin.ksk318.me/" target="_blank">https://gin.ksk318.me/</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3 border"
              src={'/go/template.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">ページ表示が確認できました</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ登録</p>
            <p className="leading-7 mb-3">例によって、dbの作成が必要になるので<br />
            macOSでdbを作成、ユーザーに権限付与します</p>
            <Syhl
               lang='go'
               file='gin/macOS/db.sh'
            />
            <p className="leading-7">データ登録のシステムを構築するにあたってMVCをわかりやすくしたいので<br />
            各ディレクトリに役割を分担させて、構成します<br />
            先ほどmain.goに作成したトップページの表示は、home_controller.goに分けました</p>
            <Syhl
               lang='go'
               file='gin/macOS/root_insert.sh'
            />

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul className="dark:text-gray-600">
                    <li>main.go</li>
                    <li>controller/router.go</li>
                    <li>controller/user_controller.go</li>
                    <li>model/database.go</li>
                    <li>model/user_model.go</li>
                    <li>view/user.html</li>
                </ul>
            </div>
            <p className="leading-7">{WrapCode('main.go')}では{WrapCode('controller')}にある{WrapCode('router.go')}を取得してルーティングします<br />
            また実行時のポートを{WrapCode('8090')}とする記述を施します</p>
            <Syhl
               lang='go'
               file='gin/insert/main.go'
            />
            <Github url="gin/blob/main/main.go" />

            <p className="leading-7">取得先の{WrapCode('router.go')}です<br />
            各controllerからページ表示を取得し、urlを指定します</p>
            <Syhl
               lang='go'
               file='gin/insert/router.go'
            />
            <Github url="gin/blob/main/controller/router.go" />

            <p className="leading-7">controllerの記述です<br />
            表示させるページファイル、postしたデータの受け取りとデータ登録<br />
            データ登録後のリダイレクト先を示します</p>
            <Syhl
               lang='go'
               file='gin/insert/user_controller.go'
            />
            <Github url="gin/blob/main/controller/user_controller.go" />

            <p className="leading-7">先ほどの{WrapCode('controller')}で使用するデータ登録用の関数を指定します<br />
            データ登録にはCreateを使用しています</p>
            <Syhl
               lang='go'
               file='gin/insert/user_model.go'
            />
            <Github url="gin/blob/main/model/user_model.go" />

            <p className="leading-7">dbを接続するための情報記述です<br />
            とりあえず接続することを目的としているため、別途{WrapCode('.env')}ファイルへの記述はせず、そのまま指定しています</p>
            <Syhl
               lang='go'
               file='gin/insert/database.go'
            />
            <Github url="gin/blob/main/model/database.go" />

            <p className="leading-7">htmlは通常のフォーム構成です</p>
            <Syhl
               lang='go'
               file='gin/insert/user.html'
            />
            <Github url="gin/blob/main/view/user.html" />
            
            <p className="leading-7 mb-3">ここまで編集を終えたら{WrapCode('main.go')}の階層で{WrapCode('go run main.go')}を実行します</p>
            <div className="relative shadow-md sm:rounded-lg mb-4 grid overflow-hidden w-fit">
                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                環境名(環境)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                確認用URL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                local(Mac OS)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="http://localhost:8090/user/" target="_blank">http://localhost:8090/user/</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://gin.ksk318.me/user/" target="_blank">https://gin.ksk318.me/user/</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3 border"
              src={'/go/insert1.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />

            <Image
              className="mb-3 border"
              src={'/go/insert2.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">登録後、ターミナルからdbを参照します</p>
            <Syhl
               lang='go'
               file='gin/macOS/show_db_insert.sh'
            />
            <p className="leading-7 mb-3">データ登録が確認できました🥳</p>
            <p className="text-gray-500 break-all">参考文献:https://zenn.dev/ajapa/articles/65b9934db18396<br />
            参考文献:https://zenn.dev/tonbi_attack/articles/cf412d07baa10a</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ表示</p>
            <p className="leading-7 mb-3">先の項目で登録したデータを表示します</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul className="dark:text-gray-600">
                    <li>controller/user_controller.go</li>
                    <li>view/user.html</li>
                </ul>
            </div>
            <p className="leading-7">すでにmodelに、データ全件を取得する{WrapCode('GetAll')}が存在しているので、<br />
            こちらを{WrapCode('controller')}で利用します<br />
            表示させるページは、先ほどの/userページに追加してみましょう</p>
            <Syhl
               lang='go'
               file='gin/read/user_controller.go'
            />
            <p className="leading-7">html上で配列を回すためにはrangeを利用します</p>
            <Syhl
               lang='go'
               file='gin/read/user.html'
            />
            <p className="leading-7 mb-3">ここまで編集を終えたら{WrapCode('main.go')}の階層で{WrapCode('go run main.go')}を実行します</p>

            <div className="relative shadow-md sm:rounded-lg mb-4 grid overflow-hidden w-fit">
                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                環境名(環境)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                確認用URL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                local(Mac OS)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="http://localhost:8090/user/" target="_blank">http://localhost:8090/user/</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://gin.ksk318.me/user/" target="_blank">https://gin.ksk318.me/user/</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3 border"
              src={'/go/read.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">データが表示されました、先ほど登録したデータ1つのみです</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ更新</p>
            <p className="leading-7 mb-3">登録したデータを更新してみます</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul className="dark:text-gray-600">
                    <li>controller/router.go</li>
                    <li>controller/user_controller.go</li>
                    <li>view/edit.html</li>
                </ul>
            </div>
            <p className="leading-7">更新用に、各データを更新できるようなページを作成します<br />
            url末尾のidから取得するページを追加します</p>
            <Syhl
               lang='go'
               file='gin/update/router.go'
            />
            <Github url="gin/blob/main/controller/router.go" />

            <p className="leading-7">{WrapCode('controller')}にページ表示とデータ取得およびデータ更新を記述します<br />
            modelは、{WrapCode('GetOne')}と{WrapCode('Update')}を利用しましょう</p>
            <Syhl
               lang='go'
               file='gin/update/user_controller.go'
            />
            <Github url="gin/blob/main/controller/user_controller.go" />

            <p className="leading-7">編集ページではhiddenで{WrapCode('id')}を更新用として用意します</p>
            <Syhl
               lang='go'
               file='gin/update/edit.html'
            />
            <Github url="gin/blob/main/view/edit.html" />

            <p className="leading-7 mb-3">ここまで編集を終えたら{WrapCode('main.go')}の階層で{WrapCode('go run main.go')}を実行します</p>

            <div className="relative shadow-md sm:rounded-lg mb-4 grid overflow-hidden w-fit">
                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                環境名(環境)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                確認用URL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                local(Mac OS)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="http://localhost:8090/edit/1" target="_blank">http://localhost:8090/edit/1</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://gin.ksk318.me/edit/1" target="_blank">https://gin.ksk318.me/edit/1</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="leading-7 mb-3">{WrapCode('hoge')}を{WrapCode('piyo')}で更新してみましょう</p>
            <Image
              className="mb-3 border"
              src={'/go/update1.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />

            <Image
              className="mb-3 border"
              src={'/go/update2.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">/userページにリダイレクトして、{WrapCode('piyo')}に更新されていることが確認できました🥳</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ検索</p>
            <p className="leading-7 mb-3">最後にデータの検索です</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200">
               <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
               <ul className="dark:text-gray-600">
                  <li>model/user_model.go</li>
                  <li>controller/router.go</li>
                  <li>controller/user_controller.go</li>
                  <li>view/edit.html</li>
               </ul>
            </div>
            <p className="leading-7">modelに新たな関数Searchを追加します<br />
            こちらで{WrapCode('name')}に{WrapCode('LIKE')}しているデータを取得する記述を施します</p>
            <Syhl
               lang='go'
               file='gin/search/user_model.go'
            />
            <Github url="gin/blob/main/model/user_model.go" />

            <p className="leading-7">searchページで{WrapCode('get')}と{WrapCode('post')}ができるようにします</p>
            <Syhl
               lang='go'
               file='gin/search/router.go'
            />
            <Github url="gin/blob/main/controller/router.go" />

            <p className="leading-7">クエリパラメータを取得して、<br />
            取得したパラメータで関数{WrapCode('Search')}を使って検索しています</p>
            <Syhl
               lang='go'
               file='gin/search/user_controller.go'
            />
            <Github url="gin/blob/main/controller/user_controller.go" />

            <p className="leading-7">データの表示と同じように、検索したデータを{WrapCode('range')}で回します</p>
            <Syhl
               lang='go'
               file='gin/search/search.html'
            />
            <Github url="gin/blob/main/view/search.html" />
            
            <p className="leading-7 mb-3">ここまで編集を終えたら{WrapCode('main.go')}の階層で{WrapCode('go run main.go')}を実行します</p>

            <div className="relative shadow-md sm:rounded-lg mb-4 grid overflow-hidden w-fit">
                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                環境名(環境)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                確認用URL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                local(Mac OS)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="http://localhost:8090/search/" target="_blank">http://localhost:8090/search/</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://gin.ksk318.me/search/" target="_blank">https://gin.ksk318.me/search/</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="leading-7 mb-3">piで検索してみましょう</p>
            <Image
              className="mb-3 border"
              src={'/go/search.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">検索できました🥳</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">ginまとめ</p>
            <p className="leading-7 mb-3">MVCをゼロから作成する手間はありますが、逆に自己流にわかりやすくディレクトリ名をつけられるので、<br />
            カスタマイズしやすいフレームワークでした<br /><br />
            MVCをゼロから、というとSpring Bootのような難しさがあると思われがちですが、Spring Bootのようなモジュールのバージョン問題などもなく、<br />
            そもそもgo自体がシンプルな記述なので、難易度もそこまでで、尚且つ管理しやすかったです</p>
         </div>

      </section>

      </main>
    </div>
  );
}
