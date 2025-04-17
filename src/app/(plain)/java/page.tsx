import type { Metadata } from "next";

import Link  from 'next/link'
import Image from "next/image"
import Github from '@components/github';
import Syhl from '@components/code';

export const metadata: Metadata = {
   title: 'java｜'+process.env.SITE_TITLE,
   description: "について",
};

function WrapCode(txt: string) {
   return <code className="break-all bg-black/[.1] dark:text-black dark:bg-white/[.8] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">java</span><span className="text-md">について</span></h1>
      <p>本項目ではJavaの書き方について、基本から応用までを学習し、<br />最終はフレームワーク{WrapCode('spring boot')}にて基本動作を作成するまでの経緯です</p>
      
      <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200">
         <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="text-left">
         <tbody className="dark:text-gray-600">
            <tr>
               <th className="pr-4">java</th><td>v21.0.4</td>
            </tr>
            <tr>
               <th className="pr-4">Maven</th><td>v3.9.9</td>
            </tr>
            <tr>
               <th className="pr-4">spring boot</th><td>v3.3.3</td>
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
            <p className="leading-7">まず、{WrapCode('java')}はphpやpythonと違いコンパイラ言語であるため、ファイルをそのままは実行できないので<br />
            ファイルをコンパイルする必要がある<br />
            その手順を含めてHello World.を出力する方法を記載します<br />
            {WrapCode('java')}で文字列を表示する場合は、以下の表記で実行できます</p>
            <Syhl
                lang='java'
                file='Helloworld.java'
            />
            <p className="leading-7 mb-3">{WrapCode('java')}の構文は{WrapCode('class')}および{WrapCode('public static void main(String[] args)')}が必要です<br />
            基本的にこの体系がないとコンパイルの時点でエラーが発生するのでエラーメッセージを元に確認しましょう<br />
            この.javaファイルに対して以下のコマンドを実行しコンパイルします</p>
            <Syhl
                lang='sh'
                file='javac.sh'
            />
            <p className="mb-3">コンパイル実行後、{WrapCode('Helloworld.class')}ファイルが生成されます<br />
            .classファイルの中身は機械語のため、英語と数字の羅列があります<br />
            この.classファイルをさらに以下のコマンドで実行しましょう</p>
            <Syhl
                lang='sh'
                file='java.sh'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='java/helloWorld.sh'
            />
            <p className="mb-3">改行については多言語と同じく{WrapCode('\\n')}を用います。</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">変数と型宣言</h3>
            <p className="leading-7">文字列にテキストや数値を格納しておくことも可能です<br />中学生の数学で学習したx=1,y=2と同じ要領です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
                lang='java'
                file='type_int.java'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='java/type.sh'
            />
            <p className="mb-3">{WrapCode('String x = "hoge";')}でxにhogeを格納し、それを{WrapCode('System.out.println()')}で呼び出します<br />
            文字を結合する場合にはx,yにそれぞれの文字列を格納して+(プラス)で結合することができます</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
                lang='java'
                file='join.java'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='java/join.sh'
            />
         </div>

      </section>

      <section id="calc">
         <h2 className="text-2xl font-semibold mb-3">計算と型宣言</h2>
         <p className="leading-7 mb-3">数字での計算（足し算、引き算、掛け算、割り算）と型について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">計算</h3>
            <p className="leading-7">単純にプラスの符号を用いて、足し算をします</p>
            <Syhl
                lang='java'
                file='add.java'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='java/calc01.sh'
            />

            <p className="leading-7 mb-3">引き算、掛け算、割り算も以下の符号で計算可能です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
                lang='java'
                file='calc.java'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='java/calc02.sh'
            />

            <p className="leading-7 mb-3">では、文字を{WrapCode('int')}型にせず{WrapCode('string')}型でプラス符号を使ったらどうなるでしょうか</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
                lang='java'
                file='string.java'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='java/calc03.sh'
            />

            <p>この場合{WrapCode('string')}で文字列として宣言しているため、足し算は行われず結合のみ行われます</p>
         </div>

      </section>

      <section id="function">
         <h2 className="text-2xl font-semibold mb-3">関数、Class</h2>
         <p className="leading-7 mb-3">関数の宣言、public private protectedについて</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">Class</h3>
            <p className="leading-7 mb-3">{WrapCode('java')}ではデフォルトで{WrapCode('main')}関数が設定されているので、{WrapCode('main')}はそのまま宣言します<br />
            同じクラス内で他の関数を宣言し、そこから取得するパターンを試してみましょう<br />
            以下は別関数で足し算して、その関数結果を取得して表示しています</p>
            <Syhl
                lang='java'
                file='class_sub.java'
            />
            <p className="leading-7 mb-3">基本的な説明は、コード内にコメントアウトで表記していますが、{WrapCode('function')}のアクセス修飾子については以下に詳細を表記します</p>

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
                                できない
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

            <p className="leading-7 mb-3">アクセス修飾子にルールは特にないですが、そのclass内のみで利用する場合はなるべくprivate、<br />
            各所で利用する{WrapCode('function')}の場合は{WrapCode('public')}にするなど、セキュリティ対策として有効です<br />
            基本的に{WrapCode('java')}と{WrapCode('python')}は似ていますね</p>

         </div>

      </section>

      <section id="array">
         <h2 className="text-2xl font-semibold mb-3">配列、for、foreach</h2>
         <p className="leading-7 mb-3">配列の作り方と各種回し方について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">配列</h3>
            <p className="leading-7 mb-3">また、配列は一覧表示に有効です<br />
            javaでは{WrapCode("for")}と{WrapCode("forEach")}どちらも使えます<br />
            具体的には以下のように回します</p>
            <p className="font-semibold">forで配列を「回数制限して」回す</p>
            <Syhl
                lang='java'
                file='for.java'
            />
            <p className="font-semibold">forで配列を「最後まで」回す</p>
            <Syhl
                lang='java'
                file='forEnd.java'
            />

            <hr className="my-5" />

            <p className="mb-3">次に{WrapCode('forEach')}で回すケースです<br />
            配列を宣言する場合もさまざまな宣言方法があるので、一挙宣言して回してみましょう</p>
            <Syhl
                lang='java'
                file='forEach.java'
            />
            <p className="leading-7 mb-3">Mapsのみ引数を2つ用意する必要があるので、インデックスも取得しています<br />
            ところが、通常の配列を{WrapCode('forEach')}ではインデックスを取得できないとのことで<br />
            通常の配列でインデックスを使う場合は、for文で回す必要があるようです</p>

            <hr className="my-5" />

            <p className="font-semibold">多次元配列</p>
            <p className="leading-7 mb-3">一つの要素に複数の情報を含めたいときに利用する多次元配列を利用する場合です<br />
            この場合以下のように設定し、取得します</p>
            <p className="font-semibold">多次元配列</p>
            <Syhl
                lang='java'
                file='forEachIn.java'
            />
            <p className="leading-7 mb-3">本来は{WrapCode('{0,"test"}')}として、インデックスは{WrapCode('int')}で取得したいところですが、<br />
            多次元配列に複数の型を宣言できないようなので、{WrapCode('String')}で数字を入力しています</p>

            <hr className="my-5" />

            <p className="font-semibold">データの検索</p>
            <p className="leading-7 mb-3">配列から配列を作成することで、簡易的なデータ検索が可能です<br />
            配列を回して、その中で該当となるデータのみ格納する配列を新規に作成すると、検索済みデータの配列を作成できます</p>
            <p>まずは{WrapCode('if')}で表示するのみの場合</p>
            <Syhl
                lang='java'
                file='IfElse.java'
            />
            <p>また新規にデータ配列を作成する場合は、空の配列を作成して、{WrapCode('for文')}と{WrapCode('if文')}で配列に格納していきます</p>
            <Syhl
                lang='java'
                file='Search.java'
            />
            <p>新規に検索データの配列を作成する場合は{WrapCode('for')}よりも、<br />
            繰り返しの処理に向いている、{WrapCode('forEach')}の方が分かりやすく且つ作りやすい構造です<br />
            ただしインデックスを付けたい場合などの場合は、{WrapCode('Map')}や{WrapCode('for文')}を使うなど工夫しなければなりません<br />
            また配列の作成は前述にもあるとおり複数あるので、ある程度自分の中で特定の{WrapCode('import')}などを確定させる必要があります<br /><br />
            繰り返しの処理で言うと、例えばすべてのデータに🐶をつける場合も</p>
            <Syhl
                lang='java'
                file='Dog.java'
            />
            <p>で可能です<br />
            {WrapCode('java')}ではやはり複数の方法があるため、逆に分かりづらい部分も多そうです</p>

         </div>

      </section>

      <section id="crud">
         <h2 className="text-2xl font-semibold mb-3">CRUD</h2>
         <p className="leading-7 mb-3">dbにおける作成（Create）、読み出し（Read）、更新（Update）、削除（Delete）を一挙解説</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">CRUDを始める前に</p>
            <p className="leading-7 mb-3">前提としてmysqlにdatabase名{WrapCode('java')}を作成、user(guest)を作成し、guestに対して{WrapCode('java')}へのすべての権限を付与しています<br />
            データベース{WrapCode('java')}には{WrapCode('toy')}というテーブルを作成し、id,nameをカラムとして登録しました</p>
            <Syhl
                lang='sh'
                file='db_java.sh'
            />
            <p className="leading-7 mb-3">また、db操作するためには{WrapCode('jdbcコネクタ')}が別途必要となるため、{WrapCode('mysql-connector-j-9.0.0.jar')}をダウンロードし<br />
            {WrapCode('lib')}フォルダに移動させてクラスパスを通す必要があります</p>
            <Syhl
                lang='sh'
                file='use_jdbc.sh'
            />
            <p className="leading-7 mb-3">ここまででようやく{WrapCode('CRUD')}の操作が可能となります</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Create</p>
            <p className="leading-7">早速crudのc、create(作成)から開始します<br />
            java上でcreate(dbの追加)するケースもありますが、ほとんどの場合{WrapCode('insert')}(データの追加)が多いです<br />
            よってcreateよりも先に{WrapCode('insert')}について記載します<br />
            {WrapCode('insert')}には各種方法がありますが、mysqliにて{WrapCode('insert')}する例を示します<br />
            これまでhostは{WrapCode('localhost')}などになっていましたが、javaの場合は{WrapCode('jdbc')}を利用するため{WrapCode('jdbc:mysql://localhost/java')}と指定します、ここだけ多言語とは違う部分です<br />
            データベース{WrapCode('java')}、テーブル{WrapCode('toy')}に{WrapCode('id:1、name:bear')}をinsertするjavaが以下です</p>
            <Syhl
                lang='java'
                file='insert.java'
            />
            <p>実際に登録されたかどうかを確認するために<br />
            データを読み込む、readするjavaを作成する前に、shell上でコマンドを利用し中身を見てみましょう</p>
            <Syhl
                lang='sh'
                file='insert_result_java.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">Read</p>
            <p className="mb-3">dbを直に覗くとデータが追加されていることが確認できました<br />
            insertを応用すれば、ecサイトの会員登録、商品登録、カテゴリー登録など、または情報サイトへの情報登録、ブログサイトへの日記登録などに活用できます<br />
            ですが実際に各種サイトデータを利用する場合は、登録後にread(読み込み)し出力させなければなりません</p>
            <p className="mb-3">それではjavaから{WrapCode('select')}を使って出力してみます<br />
            そのままdbのデータを表示させることも可能ですが、今回はdbのデータを配列に格納し、その配列を回して表示させるパターンも記載します</p>
            <Syhl
                lang='java'
                file='read.java'
            />
            <p>配列に格納しておくと、別コントローラにデータを渡したり、検索結果を表示させるときに有効です</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Update</p>
            <p className="mb-3">dbに登録したデータを変更したい場合もあるかと思います、その場合は{WrapCode('update')}を使ってデータを更新します<br />
            先ほど{WrapCode('insert')}したデータをbear→robotに{WrapCode('update')}してみましょう</p>
            <Syhl
                lang='java'
                file='update.java'
            />
            <p>実際に更新されたことを確認しましょう</p>
            <Syhl
                lang='sh'
                file='update_result_java.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">Delete</p>
            <p className="mb-3">実際にはdbからデータを削除することはほぼなくデータベースを設計する際にvisibleなどの項目を設け、<br />
            そこに公開非公開をフラッグとすることが多いです<br />
            特にdbからデータを削除してしまうと二度とデータを閲覧できなくなってしまいます<br />
            そのため、deleteするケースは少ないですが、deleteする場合は{WrapCode('delete')}を使ってデータを更新します</p>
            <Syhl
                lang='java'
                file='delete.java'
            />
            <p>実際に削除されたことを確認しましょう</p>
            <Syhl
                lang='sh'
                file='delete_result_java.sh'
            />
         </div>

      </section>

      <section id="post,get">
         <h2 className="text-2xl font-semibold mb-3">POST、GET</h2>
         <p className="leading-7 mb-3">別のページにデータを送る{WrapCode('POST')}、クエリパラメータを取得する{WrapCode('GET')}</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">POST</p>
            <p className="leading-7 mb-3">{WrapCode('POST')}は「登録する」ボタンなどをクリックした際に別ページやコントローラなどにデータを受け渡し、処理する際に利用します<br />
            また、getは主にクエリパラメータを取得しています<br />
            ページロード時に消えてしまう{WrapCode('POST')}に対して、{WrapCode('GET')}はurl上のパラメータを取得するため、反恒久的にデータを保持することが可能です<br />
            {WrapCode('POST,GET')}も実行できるjavaを作成する予定でしたが<br />
            htmlやTomcatも関わってくるため、実行できるはずのプログラムを以下に示します</p>
            <Syhl
                lang='html'
                file='java_form.html'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">GET</p>
            <p className="leading-7 mb-3">クエリパラメータを取得する場合です<br />
            urlの／以降が{WrapCode('?name=hoge')}の場合、{WrapCode('hoge')}という実行結果が表示されるかと思います</p>
            <Syhl
                lang='java'
                file='get.java'
            />
         </div>

      </section>

      <section id="Spring_Boot">

      <Image
              className="mb-3 mx-auto"
              src={'/java/spring.svg'}
              alt="success"
              width={60}
              height={38}
              priority
            />

         <h2 className="text-2xl font-semibold mb-3">Spring Boot</h2>
         <p className="leading-7 mb-3">javaの代表的なフレームワーク{WrapCode('Spring Boot')}をインストールします<br />
         インストールの前に{WrapCode('Java')}をインストールしましょう</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">環境構築</p>
            <p className="leading-7 mb-3">ec2のamazon linux 2023上にJavaをインストールします<br />
            Spring Bootのインストールにはインストール用のパッケージが必要で、mavenとgradleが存在しますが<br />
            今回はmavenを導入します<br />
            phpでいうcomposer,node.jsでいうnpmのような存在です</p>
            <Syhl
                lang='java'
                file='spring/ec2/install.sh'
            />
            <p className="leading-7">ここまでで環境は整いました<br />
            <Link href="http://34.197.33.76:8080/" target="_blank">http://34.197.33.76:8080/</Link><br />
            ローカルでも同じように動作するように各種インストールを行いましょう<br />
            gitも用意し、cloneしたローカルで編集できるようにします<br /><br />
            git cloneしたものをローカルで実行してみましょう</p>
            <Syhl
                lang='java'
                file='spring/macOS/install.sh'
            />
            <p className="leading-7 mb-3">local上で{WrapCode('spring boot')}が実行できました</p>

            <div className="w-full mb-3">
                <div className="p-4">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                        <div className="items-center justify-center dark:bg-gray-800">
                            <div className="relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden bg-slate-200">
                                <p className="font-semibold mb-3 text-cyan-950">実際に作成したSpring Boot環境</p>
                                <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                                <tbody className="dark:text-gray-600">
                                <tr>
                                   <th className="pr-4 break-all">url</th><td><Link href="https://spring.ksk318.me/" target="_blank">https://spring.ksk318.me/</Link></td>
                                </tr>
                                <tr>
                                   <th className="pr-4">basic user</th><td>guest</td>
                                </tr>
                                <tr>
                                   <th className="pr-4">basic pass</th><td>{process.env.BASIC_PASS_SPRING}</td>
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
                                    <th className="pr-4 break-all">url</th><td><Link href="https://github.com/tkhsksk/spring" target="_blank">https://github.com/tkhsksk/spring</Link></td>
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
            <p className="leading-7">ページを表示させます<br />
            ページ表示にhtmlファイルを利用したいので、pom.xmlにテンプレートエンジンの記述を追加します<br />
            追加しておくとspring bootの起動時に自動で導入されます<br />
            Thymeleafはspring bootでhtmlファイルを扱う際に重要です<br /><br />
            pom.xmlファイルは以下パスに存在しています</p>

            <Syhl
                lang='java'
                file='spring/macOS/root_1.sh'
            />

            <p className="leading-7">対象ファイルpom.xmlにspring-boot-starter-thymeleafを記述しましょう</p>

            <Syhl
                lang='java'
                file='spring/template/pom.xml'
            />
            <Github url="spring/blob/main/pom.xml" />

            <p className="leading-7">読み込むファイルはmain/resources/templates/ディレクトリ以下が対象です</p>
            <Syhl
                lang='java'
                file='spring/macOS/root_2.sh'
            />

            <p className="leading-7">ディレクトリ以下に以下のindex.htmlファイルを配置します<br />
            message変数を記述し、controllerからの受け渡しも同時に確認してみます</p>
            <Syhl
                lang='java'
                file='spring/template/index.html'
            />
            <Github url="spring/blob/main/src/main/resources/templates/index.html" />

            <p className="leading-7">controllerの記述ルールとしては<br />
            packageは対象ファイルまでの正式なパスであること<br />
            importはclass内で扱うものを記述すること<br />
            classの前に必ず@controllerを記述すること<br />
            class名はファイル名と合致させることなどが主なルールです<br />
            それ以外の説明に関しては以下コメントアウトにて説明がなされています</p>

            <Syhl
                lang='java'
                file='spring/template/HomeController.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/controller/HomeController.java" />

            <p className="leading-7 mb-3">ここまで実行した上で、{WrapCode('mvn spring-boot:run')}にてビルドと同時に起動してみましょう<br />
            以下URLにてローカルで確認できます</p>

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
                                <Link href="http://localhost:8080/" target="_blank">http://localhost:8080/</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://spring.ksk318.me/" target="_blank">https://spring.ksk318.me/</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3 border"
              src={'/java/template.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7 mb-3">ページ表示が確認できました🥳<br />
            変数もテンプレートに反映されています</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ登録</p>
            <p className="leading-7">formよりデータを登録できるシステムを作成してみます<br />
            補足として、この、データを登録するためのシステムを作成するまで、約3日間かかりました<br />
            {WrapCode('spring boot')}のMVCは簡潔でわかりやすいのですが、すべての役割の結びつきを理解した上で構築しなければならないため、<br />
            想定よりも時間を消費してしまいました<br /><br />
            インジェンクションや型の修飾について理解を深めるためには、さらに勉強時間が必要です<br />
            とりあえずデータを登録できるようにするための最低限必要なシステムを作成するために<br />
            登録するためのdbとテーブルを作成します<br />
            ユーザーは例によって{WrapCode('guest')}を使い、新規に{WrapCode('spring')}データベースを作成して、権限を付与しています<br />
            また{WrapCode('user')}テーブルは、id,nameなど簡潔な構成にしています</p>

            <Syhl
                lang='java'
                file='spring/macOS/db.sh'
            />
            <p className="leading-7 mb-3">{WrapCode('Spring Boot')}から{WrapCode('mysql')}に接続するための情報を以下{WrapCode('2')}ファイルに書き込みましょう</p>
            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>/src/main/resources/application.properties</li>
                    <li>/pom.xml</li>
                </ul>
            </div>
            <Syhl
                lang='java'
                file='spring/insert/application.properties'
            />
            <Github url="spring/blob/main/src/main/resources/application.properties" />
            <Syhl
                lang='java'
                file='spring/insert/pom.xml'
            />
            <Github url="spring/blob/main/pom.xml" />

            <p className="leading-7 mb-3">ここまででdb接続の準備が整いました<br />
            {WrapCode('user')}テーブルに接続できるUserモデル〜コントローラーまでを作成します</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>src/main/java/org/spring/boot/model/User.java</li>
                    <li>src/main/java/org/spring/boot/mapper/UserMapper.java</li>
                    <li>src/main/java/org/spring/boot/service/UserService.java</li>
                    <li>src/main/java/org/spring/boot/form/UserForm.java</li>
                    <li>src/main/java/org/spring/boot/MySpringBootApplication.java</li>
                    <li>src/main/java/org/spring/boot/controller/UserController.java</li>
                </ul>
            </div>

            <p className="leading-7">modelにはdbの情報を記述します</p>
            <Syhl
                lang='java'
                file='spring/insert/User.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/model/User.java" />
            <p className="leading-7">Mapperをserviceとして利用します</p>
            <Syhl
                lang='java'
                file='spring/insert/UserMapper.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/mapper/UserMapper.java" />
            <p className="leading-7">Mapperを利用できるようにするには、MySpringBootApplicationへの登録が必要です</p>
            <Syhl
                lang='java'
                file='spring/insert/MySpringBootApplication.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/MySpringBootApplication.java" />
            <p className="leading-7">serviceにはsql文を用いて、Userモデルに対してデータを登録したり編集する機能をつけます</p>
            <Syhl
                lang='java'
                file='spring/insert/UserService.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/service/UserService.java" />
            <p className="leading-7">formを使ってデータ登録する機能を作成するので<br />
            formを定義するファイルも作成します</p>
            <Syhl
                lang='java'
                file='spring/insert/UserForm.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/form/UserForm.java" />
            <p className="leading-7">最後に各機能を利用して、テンプレートに反映させるようなcontrollerを作成します<br />
            /userのフォームからpostすると/user/newにてデータが登録されるような構成にしています</p>
            <Syhl
                lang='java'
                file='spring/insert/UserController.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/controller/UserController.java" />
            <p className="leading-7">テンプレートを作成しましょう</p>
            <Syhl
                lang='java'
                file='spring/insert/index.html'
            />
            <Github url="spring/blob/main/src/main/resources/templates/user/index.html" />
            <p className="leading-7 mb-3">ここまでをビルドして反映させると以下のような画面が表示されます</p>

            <p className="leading-7 mb-3">ここまで実行した上で、{WrapCode('mvn spring-boot:run')}にてビルドと同時に起動してみましょう<br />
            以下URLにて確認できます</p>

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
                                <Link href="http://localhost:8080/user" target="_blank">http://localhost:8080/user</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://spring.ksk318.me/user" target="_blank">https://spring.ksk318.me/user</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3 border"
              src={'/java/insert.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7 mb-3">登録後にmac OS上で対象dbを覗いてみます</p>
            <Syhl
                lang='java'
                file='spring/macOS/insert.sh'
            />
            <p className="leading-7">データが登録されました🥳</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ表示</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>src/main/java/org/spring/boot/model/User.java</li>
                    <li>src/main/java/org/spring/boot/controller/UserController.java</li>
                </ul>
            </div>

            <p className="leading-7">データを一覧表示できるようにします<br />
            controllerに以下１行を追加するだけで表示が可能です</p>
            <Syhl
                lang='java'
                file='spring/read/UserController.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/controller/UserController.java" />
            <p className="leading-7">本来そのはずだったのですが、<br />
            lombokのDataを利用すればビルド時に自動でGetterとSetterが設定されるところ<br />
            なぜか設定されなかったため、Getterのみ追記しました</p>
            <Syhl
                lang='java'
                file='spring/read/User.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/model/User.java" />
            <p className="leading-7">Getterを追記したことで、user.nameとするだけで<br />
            UserからgetNameする機能が付与されました</p>
            <Syhl
                lang='java'
                file='spring/read/index.html'
            />
            <Github url="spring/blob/main/src/main/resources/templates/user/index.html" />
            <p className="leading-7 mb-3">実際にブラウザで確認してみます<br />
            {WrapCode('mvn spring-boot:run')}</p>

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
                                <Link href="http://localhost:8080/user" target="_blank">http://localhost:8080/user</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://spring.ksk318.me/user" target="_blank">https://spring.ksk318.me/user</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3"
              src={'/java/read.png'}
              alt="success"
              width={400}
              height={38}
              priority
            />
            <p className="leading-7">無事表示が確認できました🥳</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ更新</p>
            <p className="leading-7 mb-3">更新できるようなページを作成します</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>src/main/java/org/spring/boot/form/UserForm.java</li>
                    <li>src/main/java/org/spring/boot/controller/UserController.java</li>
                </ul>
            </div>

            <p className="leading-7">更新ページはさまざまなアプローチ方法がありますが、<br />
            formのinputでname=idをtype:hiddenにして更新するパターンが一般的であるため<br />
            この方法で試してみます<br /><br />
            まず、userの詳細ページと更新処理ページをcontrollerで登録します<br />
            idに準じてユーザー情報が表示されるように構築しています</p>
            <Syhl
                lang='java'
                file='spring/update/UserController.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/controller/UserController.java" />
            <p className="leading-7">idもフォームに含めるため、UserFormファイルにidを追加します</p>
            <Syhl
                lang='java'
                file='spring/update/UserForm.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/form/UserForm.java" />
            <p className="leading-7">編集ページをテンプレートに追加します</p>
            <Syhl
                lang='java'
                file='spring/update/edit.html'
            />
            <Github url="spring/blob/main/src/main/resources/templates/user/edit.html" />
            <p className="leading-7 mb-3">実際にブラウザで更新されるか確認しましょう<br />
            {WrapCode('mvn spring-boot:run')}</p>

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
                                <Link href="http://localhost:8080/user/edit/1" target="_blank">http://localhost:8080/user/edit/1</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://spring.ksk318.me/user/edit/1" target="_blank">https://spring.ksk318.me/user/edit/1</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3 border"
              src={'/java/update1.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <Image
              className="mb-3 border"
              src={'/java/update2.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <Image
              className="mb-3 border"
              src={'/java/update3.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7">/userにリダイレクトされ、<br />
            id:1の情報が更新されていることが確認できました</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">データ検索</p>
            <p className="leading-7 mb-3">データの検索を行います</p>

            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200 dark:text-gray-600">
                <p className="font-semibold mb-3 text-cyan-950">編集対象ファイル</p>
                <ul>
                    <li>src/main/java/org/spring/boot/mapper/UserMapper.java</li>
                    <li>src/main/java/org/spring/boot/service/UserService.java</li>
                    <li>src/main/java/org/spring/boot/form/SerarchForm.java</li>
                    <li>src/main/java/org/spring/boot/controller/UserController.java</li>
                </ul>
            </div>

            <p className="leading-7">{WrapCode('Spring Mybatis')}を利用しているため、本来はxmlファイルを作成して実行するべきですが<br />
            今回はとりあえず検索機能を作成することを目的としているため、複数文字検索やインジェクションは考慮しない作りになっています<br /><br />
            まず、検索用のフォームを作成しましょう</p>
            <Syhl
                lang='java'
                file='spring/search/UserSearchForm.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/form/UserSearchForm.java" />

            <p className="leading-7">次にMapperファイルに検索用のSQL文を追記します</p>
            <Syhl
                lang='java'
                file='spring/search/UserMapper.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/mapper/UserMapper.java" />

            <p className="leading-7">Mapperファイルに追記した検索を、Serviceに登録します</p>
            <Syhl
                lang='java'
                file='spring/search/UserService.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/service/UserService.java" />
            
            <p className="leading-7">ここまでの文を反映させるページを作成します<br />
            ポイントとして、クエリパラメータを取得できるように{WrapCode('RequestParam')}を関数の引数として読み込ませているのですが、<br />
            {WrapCode('required')}をfalseにしておかないと、検索前のパラメータが存在しない場合にページ表示でエラーが発生します</p>
            <Syhl
                lang='java'
                file='spring/search/UserController.java'
            />
            <Github url="spring/blob/main/src/main/java/org/spring/boot/controller/UserController.java" />
            <p className="leading-7">検索と検索結果を同じページに収めたいので、formと配列をテンプレートに記述します</p>
            <Syhl
                lang='java'
                file='spring/search/search.html'
            />
            <Github url="spring/blob/main/src/main/resources/templates/user/search.html" />
            <p className="leading-7 mb-3">検索機能を確認しましょう</p>

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
                                <Link href="http://localhost:8080/user/search" target="_blank">http://localhost:8080/user/search</Link>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                Amazon EC2(Amazon Linux 2023)
                            </th>
                            <td className="px-6 py-4">
                                <Link href="https://spring.ksk318.me/user/search" target="_blank">https://spring.ksk318.me/user/search</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Image
              className="mb-3 border"
              src={'/java/search1.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <Image
              className="mb-3 border"
              src={'/java/search2.png'}
              alt="success"
              width={280}
              height={38}
              priority
            />
            <p className="leading-7 mb-3">検索機能が確認できました🥳</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Spring Bootまとめ</p>
            <p className="leading-7 mb-3">Spring Bootはlaravel,djangoと違い、コンパイル言語のため<br />
            ビルドという手間がかかります、しかしビルド時間はさほどかからず、またビルドすることで高速化が期待できるため、そこまで苦痛ではありません<br />
            ただし、他のフレームワークと違う部分は、MVCを完全に理解していないと作成できない点<br />
            そして何よりもプラグインとの依存関係です<br />
            今回Spring Bootのバージョン3から作り始めたため、そこまでの脅威ではありませんでしたが<br />
            少なくともlambokがうまく起動しなかったことがあるため、Spring Bootのバージョンを2から3にアップするだけでも<br />
            この依存関係でプログラマーは難色を示すと思います</p>
         </div>

      </section>

      </main>
    </div>
  );
}
