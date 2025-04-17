import type { Metadata } from "next";

import Link  from 'next/link'
import Image from "next/image";
import Github from '@components/github';
import Syhl from '@components/code';

export const metadata: Metadata = {
   title: 'python｜'+process.env.SITE_TITLE,
   description: "について",
};

function WrapCode(txt: string) {
   return <code className="break-all bg-black/[.1] dark:text-black dark:bg-white/[.8] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">python</span><span className="text-md">について</span></h1>
      <p>本項目ではpythonの書き方について、基本から応用までを学習し、<br />最終はフレームワーク{WrapCode('django')}にて基本動作を作成するまでの経緯です</p>
      
      <div className="relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200">
        <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
         <tbody className="dark:text-gray-600">
            <tr>
               <th className="pr-4">python</th><td>v3.12.5</td>
            </tr>
            <tr>
               <th className="pr-4">django</th><td>v4.2.16</td>
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
            <p className="leading-7">pythonで文字列を表示する場合は、以下の表記で実行できます</p>
            <Syhl
                lang='python'
                file='helloWorld.py'
            />
            <p className="leading-7 mb-3">Hello World.以外の文字列を表記する場合は、上記コードのHello World.部分をそれ以外の文字列に置き換えるだけです<br />
            次にpythonの文字列を改行したい場合があります<br />
            htmlでは単純に{WrapCode('br')}タグのみで改行できますがpythonでは、phpと同じく{WrapCode('\\n')}で改行します
            </p>
            <p className="font-semibold">実行内容</p>
            <Syhl
                lang='python'
                file='helloWorld_br.py'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">変数と結合</h3>
            <p className="leading-7 mb-3">文字列にテキストや数値を格納しておくことも可能です<br />
            中学生の数学で学習したx=1,y=2と同じ要領です<br />
            変数nameに名前、変数oldに年齢を格納し、文章を作成してみます</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
                lang='python'
                file='var.py'
            />
            <p className="mb-3">それぞれに数字と文字を格納して、結合するとエラーが発生しました<br />
            {WrapCode('TypeError: can only concatenate str (not "int") to str')}を確認すると<br />
            str(文字列)にはstr(文字列)しか結合できません、とのことです<br />
            phpでは曖昧になっていた文字列と数字の定義が、pythonではかなり厳格になっていることがわかります<br />
            これを解消するためには2通りの方法があります</p>
            <ol className="mb-3">
               <li>①数字をstr型に変更する</li>
               <li>②print内で(カンマ)結合し引数{WrapCode("sep=''")}を用いてスペースを排除する</li>
               <li>③初期の宣言をstr型にする</li>
            </ol>
            <p className="font-semibold">実行内容</p>
            <Syhl
                lang='python'
                file='join.py'
            />
            <p>どちらでも可能ですが、変数の再利用や分かりやすさを加味すると前者の方法を採用した方が良いと思います<br />
            よって以降は前者の方法でプログラムを記述していきます</p>
         </div>

      </section>

      <section id="calc">
         <h2 className="text-2xl font-semibold mb-3">計算と型</h2>
         <p className="leading-7 mb-3">数字での計算（足し算、引き算、掛け算、割り算）と型について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">計算</h3>
            <p className="leading-7">単純にプラスの符号を用いて、足し算をします</p>
            <Syhl
                lang='python'
                file='calc01.py'
            />
            <p className="mb-3">これも型の宣言が重要で、<br />
            1番上はint型同士の足し算、2番目はstr型の結合、3番目はintとstrを結合しようとするためエラーが発生します<br />
            計算時はnum01、num02のようにint宣言した方が良いでしょう</p>
            <p className="leading-7 mb-3">引き算、掛け算、割り算も以下の符号で計算可能です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
                lang='python'
                file='calc02.py'
            />
            <p className="mb-3">phpと同じ符号で計算できますが、pythonでは／(スラッシュ)で割り算をすると、整数の答えが出力されないようです<br />
            ／／というふうにスラッシュを連続で打つと整数の答えが出力されるようです<br />
            次の変数に代入した上での計算で、実行してみましょう</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
                lang='python'
                file='calc03.py'
            />
            <p>ここで気になるのが、割り切れない数で整数割り算した場合、小数点以下がある数を計算した場合です</p>
            <Syhl
                lang='python'
                file='calc04.py'
            />
            <p>元の数が少数であれば、割り算で//を利用しても非整数の答えが出て<br />
            掛け算も少数以下まで計算されています<br />
            ところが一番上の計算だけ本来は15.1となるところが、15.100000000000001となります<br />
            これはコンピュータ上で2進数の表現の限界があるため、ずれが生じます<br /><br />
            正確に計算するためには{WrapCode("decimal")}モジュールを利用する必要があるようです<br />
            数字をダブルクォーテーションで囲んだ上で、{WrapCode("Decimal")}で囲んで計算します</p>
            <Syhl
                lang='python'
                file='calc05.py'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">型宣言</h3>
            <p className="leading-7">ここまでの計算記述でわかりますが、strを宣言する場合は〝(ダブルクォーテーション)で囲み<br />
            intの場合は囲まずにそのまま代入する、という理解ができます<br />
            またpythonは前述の通り型の宣言に厳しいです<br />
            各種結合を一覧で表示します</p>
            <Syhl
                lang='python'
                file='type_int.py'
            />
         </div>

      </section>

      <section id="def">
         <h2 className="text-2xl font-semibold mb-3">関数、Class</h2>
         <p className="leading-7 mb-3">関数の宣言、public private protectedについて</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">関数</h3>
            <p className="leading-7 mb-3">プログラム中に何度も出現する数値を変数に代入することで、再利用が可能ですが<br />
            計算式や定まった結合などを行う場合は関数を用います<br />
            以下は2つの数字を足してから1を引く、という計算を何度も使う場合です</p>
            <Syhl
                lang='python'
                file='def.py'
            />
            <p className="leading-7">x,yという変数を設定し、それぞれを足した上で1を引き、それをreturnで返り値にしています<br />
            この関数をprintで表示することによって計算後の結果を表示させます<br />
            よって5+4-1が計算され実行結果となります</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">Class</h3>
            <p className="leading-7 mb-3">また関数を使う場合、その関数をさらに囲うためにClassというものがというものが定義できます<br />
            利点としては、1つのサイト内で{WrapCode('def')}の数は何十にも及ぶ可能性があるため、それらをclassでまとめる際に有効です<br />このClassの設定、またClass内の関数を利用する場合の例を以下に示します<br />
            {WrapCode('php')}では{WrapCode('public')}や{WrapCode('private')}などで明示的にしていましたが、{WrapCode('python')}の場合少し違います</p>
            <Syhl
                lang='python'
                file='class.py'
            />
            <p className="leading-7 mb-3">class内で各種宣言をするには{WrapCode("__init__")}で関数を作成し、<br />
            その関数内でpublic、protected、privateを宣言します<br />
            特にprotectedの定義は外部で取得できたりで曖昧ですが、原則使わないようにします</p>

            <div className="relative shadow-md sm:rounded-lg mb-4 grid overflow-hidden w-fit">
                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                修飾子名
                            </th>
                            <th scope="col" className="px-6 py-3">
                                class外で取得できるか
                            </th>
                            <th scope="col" className="px-6 py-3">
                                class外で取得する方法
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                public
                            </th>
                            <td className="px-6 py-4">
                                できる
                            </td>
                            <td className="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                protected
                            </th>
                            <td className="px-6 py-4">
                                できない(外部では取得できるが、原則しない)
                            </td>
                            <td className="px-6 py-4">
                                classを継承する
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                private
                            </th>
                            <td className="px-6 py-4">
                                できない
                            </td>
                            <td className="px-6 py-4">
                                なし
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
         </div>
      </section>

      <section id="array">
         <h2 className="text-2xl font-semibold mb-3">配列、for</h2>
         <p className="leading-7 mb-3">配列の作り方と各種回し方について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">配列</h3>
            <p className="leading-7 mb-3">また、配列は一覧表示に有効です<br />
            pythonには{WrapCode("foreach")}がなく、{WrapCode("for")}のみです<br />
            具体的には以下のように回します</p>
            <p className="font-semibold">forで配列を回す</p>
            <Syhl
                lang='python'
                file='for.py'
            />
            <p className="leading-7 mb-3">forがforeachと同じ機能を果たしていることが分かります<br />
            ではphpでは取得できたインデックスや、phpでのfor文のように回数で制限する場合はどうすれば良いでしょうか<br />
            以下のように表現できます</p>
            <p className="font-semibold">forでインデックスを取得</p>
            <p className="leading-7">インデックスを取得するには{WrapCode("range")}を指定する必要がある</p>
            <Syhl
                lang='python'
                file='foreach01.py'
            />
            <p className="font-semibold">forのような表現</p>
            <Syhl
                lang='python'
                file='foreach02.py'
            />
            <p className="leading-7 mb-3">pythonでは{WrapCode("for")}のみで{WrapCode("foreach")}と同じ役割を果たします</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データの検索</p>
            <p className="leading-7 mb-3">phpでは配列から配列を作成することで、データ検索をするのはもちろんのこと<br />
            pythonでは配列を回す際に条件をつけることができます<br />
            例えば、配列のデータに「e」が含まれる場合のみ取得する場合です</p>
            <p className="font-semibold">配列を条件つきで{WrapCode("print")}する</p>
            <Syhl
                lang='python'
                file='foreach_cond.py'
            />
            <p className="font-semibold">配列を条件つきで回して配列作成</p>
            <Syhl
                lang='python'
                file='foreach_search.py'
            />
            <p>pythonの{WrapCode("for")}はインデントをつけるだけで、括る必要もないので、楽ですね<br /><br />
            繰り返しの処理で言うと、例えばすべてのデータに🐶をつける場合も</p>
            <Syhl
                lang='python'
                file='foreach_dogs.py'
            />
            <p>で可能です<br />
            pythonでも{WrapCode("for")}は、phpと同等の機能を持っていて、なおかつforのみで全て賄えるのでシンプルですね</p>

         </div>

      </section>

      <section id="crud">
         <h2 className="text-2xl font-semibold mb-3">CRUD</h2>
         <p className="leading-7 mb-3">dbにおける作成（Create）、読み出し（Read）、更新（Update）、削除（Delete）を一挙解説</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">CRUDを始める前に①</p>
            <p className="leading-7 mb-3">前提としてmysqlにdatabase名(python)を作成、user(guest)を作成し、guestに対してpythonへのすべての権限を付与しています<br />
            データベースpythonにはtoyというテーブルを作成し、id,nameをカラムとして登録しました</p>
            <Syhl
                lang='sh'
                file='python/db.sh'
            />
            <p className="font-semibold mb-3">CRUDを始める前に②</p>
            <p className="mb-3">pythonでdbを操作するためのモジュール、{WrapCode('import MySQLdb')}を使うにあたって、<br />
            pythonの仮装環境を作成しなければいけません</p>
            <Syhl
                lang='sh'
                file='python/dev.sh'
            />
            <p className="mb-3">ルートディレクトリに仮装環境{WrapCode('python_env')}を作成し、<br />
            {WrapCode('import MySQLdb')}モジュールを扱うために、{WrapCode('mysqlclient')}を{WrapCode('pip')}でインストールしました</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Create</p>
            <p className="leading-7">早速crudのc、create(作成)から開始します<br />
            create(dbの追加)するケースもありますが、ほとんどの場合{WrapCode('insert')}(データの追加)が多いです<br />
            よってcreateよりも先に{WrapCode('insert')}について記載します</p>
            <p className="mb-3">その上で、以下の{WrapCode('insert')}するプログラムを{WrapCode('python ~/git/ksk318.me/python/create.py')}で実行します<br />
            以下create.pyの内容です</p>
            <Syhl
                lang='python'
                file='create.py'
            />
            <p className="mb-3">実際に登録されたかどうかを確認するために<br />
            データを読み込む、readするpyを作成する前に、shell上でコマンドを利用し中身を見てみましょう</p>
            <Syhl
                lang='sh'
                file='python/create_result.sh'
            />
            データベースpythonの{WrapCode('toy')}テーブルにデータが登録されていることが確認できました

            <hr className="my-5" />

            <p className="font-semibold mb-3">Read</p>
            <p className="leading-7 mb-3">shell上ではデータが登録されていることが分かりましたが、<br />
            python上でdbに接続して、配列として読み込みたいケースもあります<br />
            再度仮想環境に接続して、以下を実行してみましょう</p>
            <Syhl
                lang='python'
                file='read.py'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">Update</p>
            <p className="leading-7 mb-3">先ほどcreateしたデータを更新してみましょう</p>
            <div className="p-6 py-3 border border-gray-200 rounded-lg shadow bg-slate-200 w-full grid my-3">
                <p className="font-semibold dark:text-gray-600">実行内容</p>
                <p className="dark:text-gray-600">id:1、name:<span className="font-semibold">bear</span>をid:1、name:<span className="font-semibold">robot</span>に更新(update)する</p>
            </div>
            <p className="leading-7 mb-3">セキュリティ上、更新データの内容をbindしています<br />
            bindする場合はsqlを実行するexecuteの第二引数に指定をします</p>
            <Syhl
                lang='python'
                file='update.py'
            />
            <p className="mb-3">実際にupdate(更新)されたかどうかを確認するために<br />
            read.pyを実行して、テーブルの中身を確認してみます</p>
            <Syhl
                lang='sh'
                file='python/update_result.sh'
            />
            <p>更新されていることが確認できましたね</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Delete</p>
            <p className="leading-7 mb-3">最後にデータを削除してみましょう<br />
            ただし、phpで記したとおり、業務上deleteはあまり使いません</p>
            <Syhl
                lang='python'
                file='delete.py'
            />
            <p className="mb-3">実際にupdate(更新)されたかどうかを確認するために<br />
            read.pyを実行して、テーブルの中身を確認してみます</p>
            <Syhl
                lang='sh'
                file='delete_result_python.sh'
            />
            <p>データを削除したので、テーブルtoyから取得したデータが空になっていることが確認できます</p>

         </div>

      </section>

      <section id="post,get">
         <h2 className="text-2xl font-semibold mb-3">フォームからの送信、クエリパラメータの取得</h2>
         <p className="leading-7 mb-3">phpにおけるPOSTとGETと同等の機能について、pythonでの実行方法を記す</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">postするformのhtml</p>
            <p className="leading-7 mb-3">データを{WrapCode('post')}するためのhtmlが必要である<br />
            これに関してはphpと同様</p>
            <Syhl
                lang='html'
                file='python_form.html'
            />
            <p className="mb-3">postした先の{WrapCode('../python/post.py')}には、以下の内容が記述されている</p>
            <Syhl
                lang='python'
                file='post.py'
            />
            <p className="mb-3">{WrapCode('print(text)')}によって{WrapCode('post')}されたデータが取得できると思います</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">クエリパラメータの取得</p>
            <p className="mb-3">urlを指定して、クエリパラメータの取得が可能である<br />
            {WrapCode('https://example.com')}に仮のパラメータを指定し、取得してみます</p>
            <Syhl
                lang='python'
                file='get.py'
            />
            <p className="mb-3">もしクエリに応じた結果を表示させたい場合は、ページ表示実行と同時にget.pyを実行することで、<br />
            実行と取得が可能でしょう</p>
         </div>

      </section>

      <section id="django">

        <Image
              className="mb-3 mx-auto"
              src={'/python/django.svg'}
              alt="success"
              width={60}
              height={38}
              priority
            />

         <h2 className="text-2xl font-semibold mb-3">Django</h2>
         <p className="leading-7 mb-3">pythonの代表的なフレームワークの{WrapCode('django')}にて簡易的なサイトを作成して<br />
         ページ追加、dbへのデータ登録、データ編集、表示、検索までを学習します</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">サーバー側でdjangoをインストール</p>
            <p className="leading-7 mb-3">まずはインストールが必要です<br />
            ec2にログインし、django実行時に必要な{WrapCode('libffi-devel')}を{WrapCode('yum')}でインストール<br />
            ドメインルートに移動し、{WrapCode('pip3 install django')}で本体をインストールします</p>
            <Syhl
                lang='sh'
                file='python/install_django.sh'
            />
            <p className="leading-7 mb-3">ポート8000で表示確認するために<br />
            ec2のセキュリティグループでインバウンドルールの8000番を許可します<br /><br />
            ipと8000ポート指定URLで表示が確認できます<br />
            <Link href="http://34.197.33.76:8000/" target="_blank">http://34.197.33.76:8000/</Link><br />
            これをドメインで確認できるように、apacheの設定、cerbotの設定、basic認証の設定を済ませます</p>

            <div className="w-full mb-3">
                <div className="p-4">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                        <div className="items-center justify-center dark:bg-gray-800">
                            <div className="relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden bg-slate-200">
                                <p className="font-semibold mb-3 text-cyan-950">実際に作成したdjango環境</p>
                                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                                <tbody className="dark:text-gray-600">
                                <tr>
                                   <th className="pr-4 break-all">url</th><td><Link href="https://django.ksk318.me/" target="_blank">https://django.ksk318.me/</Link></td>
                                </tr>
                                <tr>
                                   <th className="pr-4">basic user</th><td>guest</td>
                                </tr>
                                <tr>
                                   <th className="pr-4">basic pass</th><td>{process.env.BASIC_PASS_DJANGO}</td>
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
                                    <th className="pr-4 break-all">url</th><td><Link href="https://github.com/tkhsksk/django" target="_blank">https://github.com/tkhsksk/django</Link></td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-5" />

            <p className="font-semibold mb-3">ローカル上でdbを作成、接続</p>
            <p className="leading-7 mb-3">ローカルで開発を進めるために、gitをcloneしてから各種設定をします<br />
            まず、dbの作成ですデータベース名{WrapCode('django')}でデータベースを作成します</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>/demo/settings/setting_dev.py</li>
                    <li>/myapp/model.py</li>
                    <li>/demo/settings/setting_common.py</li>
                </ul>
            </div>

            <Syhl
                lang='sh'
                file='python/db_django.sh'
            />

            <p className="leading-7 mb-3">djangoの中身は初期状態では以下のようになっています</p>

            <Syhl
                lang='python'
                file='django/macOS/tree.sh'
            />

            <p className="leading-7 mb-3">localとサーバー上の設定を分けるために、以下のように構成し直します</p>

            <Syhl
                lang='python'
                file='django/macOS/tree_for_db.sh'
            />

            <p className="leading-7 mb-3">{WrapCode('settings_common.py')}は共通の設定、{WrapCode('settings.py')}はサーバー上の設定、{WrapCode('settings_dev.py')}はローカルの設定と、<br />
            それぞれの設定にします<br />
            とりあえずdbの設定のみ分けるので、{WrapCode('settings_common.py')}からDATABASESの記述を削除し<br />
            {WrapCode('settings.py')}と{WrapCode('settings_dev.py')}にそれぞれのdb情報を記述します<br /><br />
            すべての設定ファイルを読み込むために、{WrapCode('__init__.py')}をsettingsディレクトリに作成し、<br />
            各設定ファイルを読み込む記述をします<br />
            {WrapCode('settings_dev.py')}の内容は以下です</p>

            <Syhl
                lang='python'
                file='django/migration/setting_dev.py'
            />
            <Github url="django/blob/main/demo/settings/settings.py" />

            <p className="leading-7 mb-3">{WrapCode('setting.py')}にも同じく、ec上に作成したmariaDBの設定を記述しましょう<br />
            プロジェクトの中に、アプリを作成します<br />
            pythonの仮装環境にログインして、アプリを作成します</p>
            <Syhl
                lang='python'
                file='django/macOS/cmd_app.sh'
            />
            <p className="leading-7 mb-3">myappというディレクトリが生成されます<br />
            このアプリ内でテーブルを作成するためのモデルを作成します<br />
            {WrapCode('myapp/modals.py')}に以下のように記述します</p>

            <Syhl
                lang='python'
                file='django/migration/model.py'
            />
            <Github url="django/blob/main/myapp/models.py" />

            <p className="leading-7 mb-3">こちらはmodelファイルです<br />
            userテーブルに、Char型でnameという名前のカラムをmaxsize20で作成します<br />
            このmodelファイルを元にmigrationファイルを生成し、さらにそれを元にmigrateします<br />
            ※テーブルは{WrapCode('アプリ名+テーブル名')}なので、実際にできるテーブル名は{WrapCode('myapp_user')}になります<br /><br />
            migrateする前に、myappのmodelをdjangoに認識させなければならないので、<br />
            {WrapCode('setting_common.py')}に追記します</p>

            <Syhl
                lang='python'
                file='django/migration/setting_common.py'
            />
            <Github url="django/blob/main/demo/settings/settings_common.py" />

            <p className="leading-7 mb-3">これでmigrationする準備が整いました<br />
            以下コマンドでmigrationを実行します</p>
            <Syhl
                lang='python'
                file='django/macOS/cmd_migrate_user.sh'
            />
            <p className="leading-7 mb-3">この時点でdbは以下のような構成になっています</p>
            <Syhl
                lang='python'
                file='django/macOS/show_table.sh'
            />
            <hr className="my-5" />

            <p className="font-semibold mb-3">サーバー上でdbを作成、接続</p>

            <p className="leading-7 mb-3">mysqlclientはlocalには入っていましたが、<br />サーバー側のmysql関連モジュールが入っていなかったので、pymysqlをインストールします<br />pymysqlを利用するためには、djangoに追記する必要があります</p>
            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>/demo/settings/setting_dev.py</li>
                    <li>/myapp/model.py</li>
                </ul>
            </div>

            <p className="leading-7 mb-3">pymysqlをimportして読み込みます</p>
            <Syhl
                lang='python'
                file='django/ec2/manage.py'
            />
            <Github url="django/blob/main/manage.py" />

            databaseの設定にオプションを追加します
            <Syhl
                lang='python'
                file='django/ec2/settings.py'
            />
            <Github url="django/blob/main/demo/settings/settings.py" />

            サーバーにアクセスし、pymysqlのinstallやmigarateを実行しましょう
            <Syhl
                lang='python'
                file='django/ec2/mysql.sh'
            />
            <p className="text-gray-500 break-all">参考文献:https://www.sejuku.net/blog/27387、https://qiita.com/ponsuke0531/items/2251fe0cb679222dfa77</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">ページ追加</p>
            <p className="leading-7 mb-3">ページ追加のためのディレクトリを、プロジェクトのルートディレクトリに作成します<br />分かりやすいように{WrapCode('templates')}というディレクトリ名にしました</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>/templates/home/index.html</li>
                    <li>/demo/settings/setting_common.py</li>
                    <li>/myapp/view.py</li>
                    <li>/myapp/urls.py</li>
                    <li>/demo/urls.py</li>
                </ul>
            </div>

            <Syhl
                lang='python'
                file='django/macOS/tree_template.sh'
            />
            <p className="leading-7">template以下のディレクトリ構成は以下となっており</p>
            <Syhl
                lang='python'
                file='django/macOS/tree_template_deps.sh'
            />
            <p className="leading-7">index.htmlはとりあえず表示できればいいので、以下とします</p>
            <Syhl
                lang='python'
                file='django/template/index.html'
            />
            <Github url="django/blob/main/templates/home/index.html" />

            <hr className="my-5" />

            <p className="leading-7">この時点では{WrapCode('django')}が{WrapCode('template')}ディレクトリを認識してくれないので、<br />
            {WrapCode('settings_common.py')}ファイルに{WrapCode('template')}ディレクトリまでのパスを指定します<br />
            先の項目で作成した{WrapCode('demo/setting_common.py')}の{WrapCode('DIRS')}部分を以下のように編集します</p>

            <Syhl
                lang='python'
                file='django/template/setting_common.py'
            />
            <Github url="django/blob/main/demo/settings/settings_common.py" />

            <p className="leading-7">これで{WrapCode('templates')}ディレクトリを読み込んでくれます<br /><br />
            {WrapCode('myapp')}ディレクトリ内の{WrapCode('view.py')}に{WrapCode('index.html')}を取得してreturnする関数を書きます</p>

            <Syhl
                lang='python'
                file='django/template/view.py'
            />
            <Github url="django/blob/main/myapp/views.py" />

            <p className="leading-7">{WrapCode('myapp/urls.py')}を作成し、以下の記述をします<br />
            pathの{WrapCode('第一引数')}はurlの{WrapCode('2階層以降')}のpathを入力しますが、今回はホームページを表示させるので今回は不要です<br />
            <span className="text-gray-500">※ http://exapmle.com/aaa/ココ</span><br />
            以降{WrapCode('第二引数')}は先ほど設定した{WrapCode('index.html')}を返す関数{WrapCode('home_template')}<br />
            {WrapCode('第三引数')}はviewでredirectをするための通称の名称{WrapCode('home')}を記述します</p>

            <Syhl
                lang='python'
                file='django/template/urls.py'
            />
            <Github url="django/blob/main/myapp/urls.py" />

            <p className="leading-7">これら{WrapCode('myappディレクトリ')}内に設定したurl関連の設定を、<br />
            プロジェクトディレクトリの{WrapCode('demo/urls.py')}で読み込みます</p>

            <Syhl
                lang='python'
                file='django/template/demo/urls.py'
            />
            <Github url="django/blob/main/demo/urls.py" />

            <p className="leading-7 mb-3">この状態で、以下コマンドにて実行します<br />
            {WrapCode('source [python仮想環境ディレクトリ]/bin/activate')}<br />
            {WrapCode('python [ドメインディレクトリ]/manage.py runserver')}</p>

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
                                <Link href="http://localhost:8000" target="_blank">http://localhost:8000</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://django.ksk318.me/" target="_blank">https://django.ksk318.me/</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3"
              src={'/python/template.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">index.htmlが表示されました🥳</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ登録</p>
            <p className="leading-7 mb-3">このindex.htmlページで、<br />
            先ほど作成した{WrapCode('myapp_user')}テーブルに{WrapCode('name')}を登録する機能を作成してみます</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>/myapp/admin.py</li>
                    <li>/myapp/forms.py</li>
                    <li>/myapp/views.py</li>
                    <li>/templates/home/index.html</li>
                </ul>
            </div>

            <p className="leading-7">まずdbに登録したUserを利用できるようにするため、<br />
            /myapp/admin.pyにUserモデルを読み込む記述をします</p>
            <Syhl
                lang='python'
                file='django/db/admin.py'
            />
            <Github url="django/blob/main/myapp/admin.py" />

            <p className="leading-7">このUserモデルを読み込んで、formモデルを構築するために、<br />
            form.pyを新規作成し、Userモデルをformに渡してFormモデルを記述します</p>
            <Syhl
                lang='python'
                file='django/db/forms.py'
            />
            <Github url="django/blob/main/myapp/forms.py" />

            <p className="leading-7">このFormモデルを読み込んで、formをviewに渡します</p>
            <Syhl
                lang='python'
                file='django/db/views.py'
            />
            <Github url="django/blob/main/myapp/views.py" />

            <p className="leading-7">htmlはformをpostするためのtokenとformの変数を記述します</p>
            <Syhl
                lang='python'
                file='django/db/index.html'
            />
            <Github url="django/blob/main/templates/home/index.html" />

            <p className="leading-7 mb-3">この状態で、以下コマンドにて実行します<br />
            {WrapCode('source [python仮想環境]/bin/activate')}<br />
            {WrapCode('python [ドメインディレクトリ]/manage.py runserver')}</p>

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
                                <Link href="http://localhost:8000" target="_blank">http://localhost:8000</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://django.ksk318.me/" target="_blank">https://django.ksk318.me/</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Image
              className="mb-3"
              src={'/python/form.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7 mb-3">formが表示されましたね<br />
            一度登録してみて分かったことなのですが、このままpostすると何故かcsrfトークンエラーが発生して登録できません<br /><br />
            設定ファイルに{WrapCode('CSRF_TRUSTED_ORIGINS')}を設定しないといけないことが判明したので、{WrapCode('/demo/settings/settings.py')}にように追記します</p>
            <Syhl
                lang='python'
                file='django/db/settings.py'
            />
            <Github url="django/blob/main/demo/settings/settings.py" />

            <p className="leading-7 mb-3">この状態でhogeを入力して、登録してみます</p>
            <Image
              className="mb-3"
              src={'/python/form_hoge.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">dbをシェルで確認してみましょう</p>
            <Syhl
                lang='python'
                file='django/macOS/show_colums.sh'
            />
            <p className="leading-7 mb-3">登録されていました🥳</p>

            <p className="text-gray-500 break-all">参考文献:https://vynsen.net/django3-model%E3%81%A8form/</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ編集</p>
            <p className="leading-7 mb-3">登録済みのデータを編集できる機能です<br />
            先ほどのデータ登録とほぼ変わりませんが、個別データ専用のページを作成する点と<br />
            idを指定してデータを更新する部分のみ変更する必要があります</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>/myapp/urls.py</li>
                    <li>/myapp/views.py</li>
                    <li>/templates/user/edit.html</li>
                </ul>
            </div>

            <p className="leading-7">個別データ用のページurlを作成します<br />
            int:pkにはデータのidが収まる想定です</p>
            <Syhl
                lang='python'
                file='django/update/urls.py'
            />
            <Github url="django/blob/main/myapp/urls.py" />

            <p className="leading-7">insertとの大きな違いは、defにidを指定している点<br />
            itemをidから取得してformのvalueに当てはめている点<br />
            さらにリダイレクト先を元いた個別ページにしている点があります</p>
            <Syhl
                lang='python'
                file='django/update/views.py'
            />
            <Github url="tkhsksk/django/blob/main/myapp/views.py" />


            <p className="leading-7 mb-3">この状態で、以下コマンドにて実行します<br />
            {WrapCode('source [python仮想環境]/bin/activate')}<br />
            {WrapCode('python [ドメインディレクトリ]/manage.py runserver')}</p>

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
                                <Link href="http://localhost:8000/edit/1" target="_blank">http://localhost:8000/edit/1</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://django.ksk318.me/edit/1" target="_blank">https://django.ksk318.me/edit/1</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="leading-7 mb-3">formにpiyoを入力して、更新してみます</p>

            <Image
              className="mb-3"
              src={'/python/update1.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <Image
              className="mb-3"
              src={'/python/update2.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">無事、更新されました</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ一覧表示</p>
            <p className="leading-7 mb-3">登録したデータを一覧で表示させる機能です<br />
            新規urlを作成せずにルートページで表示させるようにしてみます</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>/myapp/views.py</li>
                    <li>/templates/home/index.html</li>
                </ul>
            </div>

            <p className="leading-7">リストを取得する記述をして、それをviewモデルに渡しています</p>
            <Syhl
                lang='python'
                file='django/list/views.py'
            />
            <Github url="tkhsksk/django/blob/main/myapp/views.py" />

            <p className="leading-7">リストには編集ページまでのリンクも作成してみます</p>
            <Syhl
                lang='python'
                file='django/list/index.html'
            />
            <Github url="django/blob/main/templates/home/index.html" />

            <p className="leading-7 mb-3">一覧を確認してみましょう</p>

            <p className="leading-7 mb-3">この状態で、以下コマンドにて実行します<br />
            {WrapCode('source [python仮想環境ディレクトリ]/bin/activate')}<br />
            {WrapCode('python [ドメインディレクトリ]/manage.py runserver')}</p>

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
                                <Link href="http://localhost:8000/" target="_blank">http://localhost:8000/</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://django.ksk318.me/" target="_blank">https://django.ksk318.me/</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3"
              src={'/python/list.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">表示が確認できましたね🥳</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">検索機能</p>
            <p className="leading-7 mb-3">検索フォームから文字列をgetし、getした文字列で対象のデータを抽出するページを作成してみます</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>/myapp/urls.py</li>
                    <li>/myapp/views.py</li>
                    <li>/templates/search/index.html</li>
                </ul>
            </div>

            <p className="leading-7 mb-3">/searchのurlを登録します</p>
            <Syhl
                lang='python'
                file='django/search/urls.py'
            />
            <Github url="django/blob/main/myapp/urls.py" />

            <p className="leading-7">クエリパラメータを取得し、filterを介してnameにパラメータの文字列が含まれるデータをオブジェクトにして、テンプレートに返しています</p>
            <Syhl
                lang='python'
                file='django/search/views.py'
            />
            <Github url="django/blob/main/myapp/views.py" />

            <p className="leading-7">これらを表示させるテンプレートビューをhtmlで作成しましょう</p>
            <Syhl
                lang='python'
                file='django/search/index.html'
            />
            <Github url="django/blob/main/templates/search/index.html" />
            
            <p className="leading-7 mb-3">実際に検索してみます</p>

            <p className="leading-7 mb-3">この状態で、以下コマンドにて実行します<br />
            {WrapCode('source [python仮想環境]/bin/activate')}<br />
            {WrapCode('python [ドメインディレクトリ]/manage.py runserver')}</p>

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
                                <Link href="http://localhost:8000/search" target="_blank">http://localhost:8000/search</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://django.ksk318.me/search" target="_blank">https://django.ksk318.me/search</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3"
              src={'/python/search1.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />

            <p className="leading-7 mb-3">{WrapCode('p')}と入力して検索します</p>

            <Image
              className="mb-3"
              src={'/python/search2.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">検索できました🥳</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Djangoまとめ</p>
            <p className="leading-7 mb-3">urlの登録、開発環境と本番環境の切り替えやすさ、controllerの記法など<br />
            laravelに似ているため使いやすい、とっつき易さもありました<br />
            デメリットとしては、記述が自由であるため、チーム開発には不向きかもしれません<br />
            ここもlaravelと似ています<br />
            初心者にも扱いやすいフレームワークという印象でした<br />
            また、controllerは必要最低限で動くので、ここも非常に理解しやすかったです</p>
         </div>

      </section>

      </main>
    </div>
  );
}
