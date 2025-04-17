import type { Metadata } from "next";

import Link  from 'next/link'
import Image from "next/image"
import Github from '@components/github';
import Syhl from '@components/code';

export const metadata: Metadata = {
   title: 'php｜'+process.env.SITE_TITLE,
   description: "について",
};

function WrapCode(txt: string) {
   return <code className="break-all bg-black/[.1] dark:text-black dark:bg-white/[.8] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">php</span><span className="text-md">について</span></h1>
      <p>本項目ではphpの書き方について、基本から応用までを学習し、<br />最終はフレームワーク{WrapCode('laravel')}にて基本動作を作成するまでの経緯です</p>
      
      <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200">
         <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="text-left">
         <tbody className="dark:text-gray-600">
            <tr>
               <th className="pr-4">php</th><td>v8.3.7</td>
            </tr>
            <tr>
               <th className="pr-4">laravel</th><td>v10.41.0</td>
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
            <p className="leading-7">phpで文字列を表示する場合は、以下の表記で実行できます</p>
            <Syhl
               lang='php'
               file='helloWorld.php'
            />
            <p className="leading-7 mb-3">Hello World.以外の文字列を表記する場合は、上記コードのHello World.部分をそれ以外の文字列に置き換えるだけです<br />次にphpの文字列を改行したい場合があります、htmlでは単純に{WrapCode('br')}タグのみで改行できましたがphpで実行した場合以下の出力になります
            </p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='php'
               file='helloWorld_br.php'
            />
            <p className="mb-3">htmlタグをphpの文中挟むとそのまま表示されてしまいます。<br />php中の改行には\nを用います。</p>
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='php/helloWorld.sh'
            />

               <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">変数</h3>
            <p className="leading-7">文字列にテキストや数値を格納しておくことも可能です<br />中学生の数学で学習したx=1,y=2と同じ要領です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='php'
               file='var.php'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='php/var.sh'
            />
            <p className="mb-3">{WrapCode('x="test";')}でxにtestを格納し、それをechoで呼び出します<br />文字を結合する場合にはx,yにそれぞれの文字列を格納して.(ドット)で結合することができます</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='php'
               file='join.php'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='php/join.sh'
            />
         </div>

      </section>

      <section id="calc">
         <h2 className="text-2xl font-semibold mb-3">計算と型</h2>
         <p className="leading-7 mb-3">数字での計算（足し算、引き算、掛け算、割り算）と型について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">計算</h3>
            <p className="leading-7">単純にプラスの符号を用いて、足し算をします</p>
            <Syhl
               lang='php'
               file='calc01.php'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='php/calc1.sh'
            />
            <p className="leading-7 mb-3">引き算、掛け算、割り算も以下の符号で計算可能です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='php'
               file='calc02.php'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='php/calc2.sh'
            />
            <p className="mb-3">次に変数に数字を代入して計算をしてみます、数字の場合はダブルクォーテーションで囲む必要はありません</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='php'
               file='calc03.php'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='php/calc3.sh'
            />
            <p>phpではこれでも全く問題はないのですが、本来は型を宣言する必要があります<br />次の章で解説します</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">型宣言</h3>
            <p className="leading-7">本来、変数に値を代入する場合は、型の宣言が必要です<br />phpの場合、そこが非常に曖昧になっているため宣言せずとも計算が可能ですが<br />宣言した上での計算をしましょう</p>
            <p className="leading-7 mb-3">例えば7という文字があった場合、文字としての7とも捉えられるし、数字としての7とも捉えられます<br />この7は数字としての7
            だよ、と宣言するのが型宣言です</p>
            <Syhl
               lang='php'
               file='type_int.php'
            />
            <p className="leading-7 mb-3">代入する値を入力する前に(int)をつけるだけで、「数字の7」と宣言することができます<br />では、以下の場合どうなるでしょうか</p>
            <Syhl
               lang='php'
               file='type_str.php'
            />
            <p className="mb-3">文字列としての7と8を宣言して、それを足しています</p>
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='php/type.sh'
            />
            <p className="mb-3">文字列と宣言しても、足し算が可能です<br />型を宣言せずに足し算や結合ができる言語は極めて特殊です</p>
         </div>

      </section>

      <section id="function">
         <h2 className="text-2xl font-semibold mb-3">関数、Class</h2>
         <p className="leading-7 mb-3">関数の宣言、public private protectedについて</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">関数</h3>
            <p className="leading-7">プログラム中に何度も出現する数値を変数に代入することで、再利用が可能ですが<br />計算式や定まった結合などを行う場合は関数を用います<br />以下は2つの数字を足してから1を引く、という計算を何度も使う場合です</p>
            <Syhl
               lang='php'
               file='function.php'
            />
            <p className="mb-3">x,yという変数を設定し、それぞれを足した上で1を引き、それをreturnで返り値にしています<br />この関数をechoで表示することによって計算後の結果を表示させます<br />よって2+3-1が計算され以下が結果となります</p>
            <Syhl
               lang='sh'
               file='php/func.sh'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">Class</h3>
            <p className="leading-7 mb-3">また関数を使う場合、その関数をさらに囲うためにClassというものがというものが定義できます<br />利点としては、1つのサイト内でfunctionの数は何十にも及ぶ可能性があるため、それらをclassでまとめる際に有効です<br />このClassの設定、またClass内の関数を利用する場合の例を以下に示します</p>
            <Syhl
               lang='php'
               file='class.php'
            />
            <p className="leading-7 mb-3">基本的な説明は、コード内にコメントアウトで表記していますが、functionのアクセス修飾子については以下に詳細を表記します</p>

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

            <p className="leading-7 mb-3">アクセス修飾子にルールは特にないですが、そのclass内のみで利用する場合はなるべくprivate、<br />各所で利用するfunctionの場合はpublicにするなど、セキュリティ対策として有効です</p>

         </div>

      </section>

      <section id="array">
         <h2 className="text-2xl font-semibold mb-3">配列、for、foreach</h2>
         <p className="leading-7 mb-3">配列の作り方と各種回し方について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">配列</h3>
            <p className="leading-7 mb-3">この配列について、phpの学習上でつまづきました<br />そもそもなぜ配列が必要なのか？について的確に解説をしているサイトも参考書もなかったからです<br />自分が学習上で学び、配列の有効性について独自解釈しましたのでそれを以下に記載します</p>
            <h3 className="text-lg font-semibold mb-3">配列は一覧表示、データの検索、繰り返しに便利</h3>
            <p className="leading-7 mb-3">まず、1000ほどもあるデータを変数に代入するとします<br />その場合、変数も1000準備しなければなりません<br />特にデータは1000どころか10000、ときには100000になる場合もあります<br />これを解消できるのが配列です</p>
            <div className="w-full mb-3">
               <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                     <div className="items-center justify-center dark:bg-gray-800">
                     <p><span className="font-semibold">変数</span>で表現する場合</p>
                        <Syhl
                           lang='php'
                           file='array01.php'
                        />
                     </div>
                     <div className="items-center justify-center dark:bg-gray-800">
                     <p><span className="font-semibold">配列</span>で表現する場合</p>
                        <Syhl
                           lang='php'
                           file='array02.php'
                        />
                     </div>
                  </div>
               </div>
            </div>
            <p className="leading-7 mb-3">上記どちらの場合でも、データを格納しそれを表示させることができますが、<br />
            配列の方が圧倒的に合理的です<br />
            また、配列は一覧表示にも有効です<br />
            forもしくはforeachで回せますが、回数や順番で制限したい場合はfor、全てを表示させたい場合はforeachで表示させるのが一般的です<br />
            とはいえ、実際にどのような違いがあるのか分かりにくいので、稼働させて確認するのが一番分かりやすいでしょう</p>
            <p className="font-semibold">forで配列を回す</p>
            <Syhl
               lang='php'
               file='for.php'
            />
            <p className="leading-7 mb-3">上記構文をざっくりした解説はコメントアウトにて説明されていますが、<br />
            $xの配列の0番目、1番目...と続き、3番目までをechoする構文です<br />
            もちろんfor文で配列を表示させることは可能ですし、具体的にx番目からx番目まで表示、などの場合は有効なのですが<br />
            例えば配列が何番目まで存在しているかが不明なケースは存在していない配列を指定するとエラーが発生するため、issetもしくはemptyなどを必要とします<br />
            数に関わらず、配列が全て表示され切るまで表示させる場合はforeachが有効でしょう</p>
            <p className="font-semibold">foreachで配列を回す</p>
            <Syhl
               lang='php'
               file='foreach.php'
            />
            <p className="leading-7 mb-3">数の指定などをしなくても、すべての配列が表示されます<br />
            forとforeachは似ているようで異なっているため、用途に基づいて利用しましょう</p>

            <hr className="my-5" />

            <p className="font-semibold">データの検索</p>
            <p className="leading-7 mb-3">配列から配列を作成することで、簡易的なデータ検索が可能です<br />
            配列を回して、その中で該当となるデータのみ格納する配列を新規に作成すると、検索済みデータの配列を作成できます</p>
            <p>実際のコードは以下です</p>
            <Syhl
               lang='php'
               file='foreach_search.php'
            />
            <p>新規に検索データの配列を作成する場合はforよりも、<br />
            繰り返しの処理に向いている、foreachの方が分かりやすく且つ作りやすい構造です<br /><br />
            繰り返しの処理で言うと、例えばすべてのデータに🐶をつける場合も</p>
            <Syhl
               lang='php'
               file='foreach_dogs.php'
            />
            <p>で可能です<br />
            phpを深く学ぶまで配列の利点はわかりにくいものですが、<br />
            実務で利用するにあたり、検索や繰り返しの処理で重要な役割を果たしていることに気づきました</p>

         </div>

      </section>

      <section id="crud">
         <h2 className="text-2xl font-semibold mb-3">CRUD</h2>
         <p className="leading-7 mb-3">dbにおける作成（Create）、読み出し（Read）、更新（Update）、削除（Delete）を一挙解説</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="font-semibold mb-3">CRUDを始める前に</p>
            <p className="leading-7 mb-3">前提としてmysqlにdatabase名(php)を作成、user(guest)を作成し、guestに対してphpへのすべての権限を付与しています<br />
            データベースphpにはtoyというテーブルを作成し、id,nameをカラムとして登録しました</p>
            <Syhl
               lang='sh'
               file='db.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">Create</p>
            <p className="leading-7">早速crudのc、create(作成)から開始します<br />
            php上でcreate(dbの追加)するケースもありますが、ほとんどの場合{WrapCode('insert')}(データの追加)が多いです<br />
            よってcreateよりも先に{WrapCode('insert')}について記載します<br />
            {WrapCode('insert')}には各種方法がありますが、mysqliにて{WrapCode('insert')}する例を示します<br />
            データベース{WrapCode('php')}、テーブル{WrapCode('toy')}に{WrapCode('id:1、name:bear')}をinsertするphpが以下です</p>
            <Syhl
               lang='php'
               file='create.php'
            />
            <p>実際に登録されたかどうかを確認するために<br />
            データを読み込む、readするphpを作成する前に、shell上でコマンドを利用し中身を見てみましょう</p>
            <Syhl
               lang='sh'
               file='create_result.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">Read</p>
            <p>dbを直に覗くとデータが追加されていることが確認できました<br />
            insertを応用すれば、ecサイトの会員登録、商品登録、カテゴリー登録など、または情報サイトへの情報登録、ブログサイトへの日記登録などに活用できます<br />
            ですが実際に各種サイトデータを利用する場合は、登録後にread(読み込み)し出力させなければなりません</p>
            <p>それではphpから{WrapCode('select')}を使って出力してみます</p>
            <Syhl
               lang='php'
               file='read.php'
            />
            <p>var_dumpで出力することができました</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">Update</p>
            <p>dbに登録したデータを変更したい場合もあるかと思います、その場合は{WrapCode('update')}を使ってデータを更新します<br />
            先ほど{WrapCode('insert')}したデータをbear→robotに{WrapCode('update')}してみましょう</p>
            <Syhl
               lang='php'
               file='update.php'
            />
            <p>実際に更新されたことを確認しましょう</p>

            <Syhl
               lang='sh'
               file='update_result.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">Delete</p>
            <p>実際にはdbからデータを削除することはほぼなくデータベースを設計する際にvisibleなどの項目を設け、<br />
            そこに公開非公開をフラッグとすることが多いです<br />
            特にdbからデータを削除してしまうと二度とデータを閲覧できなくなってしまいます<br />
            そのため、deleteするケースは少ないですが、deleteする場合は{WrapCode('delete')}を使ってデータを更新します</p>
            <Syhl
               lang='php'
               file='delete.php'
            />
            <p>実際に削除されたことを確認しましょう</p>
            <Syhl
               lang='sh'
               file='delete_result.sh'
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
            {WrapCode('POST,GET')}も実行できるphpを作成する予定でしたが<br />
            htmlも関わってくるため、実行できるはずのプログラムを以下に示します</p>
            <Syhl
               lang='php'
               file='post_get.php'
            />
         </div>

      </section>

      <section id="laravel">

      <Image
              className="mb-3 mx-auto"
              src={'/php/laravel.svg'}
              alt="success"
              width={60}
              height={38}
              priority
            />

         <h2 className="text-2xl font-semibold mb-3">laravel</h2>
         <p className="leading-7 mb-3">phpの代表的なフレームワークの{WrapCode('laravel')}にて社員管理サイトを作成しました<br />
         以下urlにて、作成したサイトを実際に操作できるように、別サーバーにて環境を再構築しました</p>

         <div className="w-full mb-3">
            <div className="p-4">
               <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                  <div className="items-center justify-center dark:bg-gray-800">
                     <div className="relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden bg-slate-200">
                         <p className="font-semibold mb-3 text-cyan-950">実際に作成したlaravel環境</p>
                         <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                         <tbody className="dark:text-gray-600">
                         <tr>
                            <th className="pr-4 break-all">url</th><td><Link href="https://laravel.ksk318.me/" target="_blank">https://laravel.ksk318.me/</Link></td>
                         </tr>
                         <tr>
                            <th className="pr-4 break-all">basic user</th><td>guest</td>
                         </tr>
                         <tr>
                            <th className="pr-4 break-all">basic pass</th><td>{process.env.BASIC_PASS_LARAVEL}</td>
                         </tr>
                         <tr>
                            <th className="pr-4 break-all">login user</th><td>tkhsksk0318+master@gmail.com</td>
                         </tr>
                         <tr>
                            <th className="pr-4 break-all">login pass</th><td>{process.env.LARAVEL_PASS}</td>
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
                            <th className="pr-4 break-all">url</th><td><Link href="https://github.com/tkhsksk/laravel" target="_blank">https://github.com/tkhsksk/laravel</Link></td>
                         </tr>
                         </tbody>
                         </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">はじめに</h3>
            <p className="leading-7 mb-3">本コンテンツを作成しようと思ったきっかけは、<br />
            前職では勤怠管理システムや、有料の社員管理システムを保持しておらず、退社時刻を紙に記載し、それをスプレッドシートに打ち込むというアナログな作業について<br />
            代表を除く、全社員が懸念を示していたことがきっかけです<br /><br />
            私はこの現状を見かねて、自身の尽くせる技術を全て尽くし、<br />
            退社前にせめてもの謝礼としてこのコンテンツ（以下、{WrapCode('ララワークス')}）を残そうと決心しました</p>
         </div>

         <hr className="my-5" />

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">ララワークスのデータベース設計</h3>
            <p className="break-all leading-7 mb-3">まず制作に取り掛かる前にデータベースの定義です<br />
            主体となるユーザーのテーブルからのリレーション、さらにそのテーブルから関連するリレーションを踏まえ、<br />
            機能と照らし合わせたところ、SQL図は以下のようになりました（以下図は制作当初のもの）<br />
            https://drawsql.app/teams/portia/diagrams/attendance</p>
            <Image
              className="mb-3"
              src={'/php/sql.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />
            <p className="leading-7 mb-3">全ての企業データを網羅できるように以下の機能を前提としています</p>
            <div className="break-all relative shadow-md p-6 sm:rounded-lg mb-4 grid overflow-hidden w-fit bg-slate-200">
               <p className="font-semibold mb-3 text-cyan-950">ララワークスの予定機能</p>
               <ul className="dark:text-gray-600">
                  <li>ユーザー管理</li>
                  <li>社員管理</li>
                  <li>会社管理</li>
                  <li>役職管理</li>
                  <li>事業部管理</li>
                  <li>サイト管理</li>
                  <li>データベース管理</li>
                  <li>サーバー管理</li>
                  <li>タスク管理</li>
                  <li>マニュアル管理</li>
                  <li>FAQ管理（マニュアルよりも簡単なもの）</li>
                  <li>シフト管理</li>
                  <li>機材管理</li>
                  <li>ファイル管理（アップロード機能付き）</li>
                  <li>経費購入商品管理</li>
               </ul>
            </div>

            <p className="leading-7 mb-3">上記機能に関わるカテゴリー用のテーブルも全て含めると、テーブルの数は最終的に{WrapCode('23')}となりました</p>

         </div>

         <hr className="my-5" />

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">ララワークスの設計でこだわったポイント10</h3>
            <p className="leading-7 mb-3">本来は0から完成まで、全ての手順を記録したいところですが、膨大なページ数になってしまうため<br />
            特にこだわった点や、ユーザビリティに配慮した点など、特筆すべき点のみを{WrapCode('10項目')}ピックアップします</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">1.ユーザー登録と社員登録</p>
            <p className="leading-7 mb-5">予定機能をざっと見て、ユーザー管理と社員管理の違いが一見して分からないと思います<br />
            この2つの機能の違いは、フロントの表面上ではわかりませんが、基本的にはユーザー管理はログインしたユーザー本人が編集できるテーブル、社員管理は権限を持つユーザーが他のユーザーを編集できるテーブルです<br /><br />
            あえてこの管理を2つに分けている理由は、登録の効率化です<br />
            例えば各従業員の住所は、管理者から登録する機能をつければ良いですが、従業員が100名在籍していた場合は、管理者側から100人分の住所を登録しなければいけません<br />
            ログインしたユーザーが自身の住所を入力できるようにすれば、管理者側で大量のデータを登録する必要がなく、業務効率化に繋がります<br /><br />
            また、管理者側で登録したユーザーに関する情報の中でも、本ユーザー側に見せたくない情報もあるかと思います<br />
            例えば、保険に関する情報のうち、雇用保険被保険者番号や税区分など、管理者のみ保持していれば良い情報です<br />
            この情報は社員管理のテーブルに登録されて、ユーザー側には表示されないようになっています<br /><br />
            このようにユーザーから編集すべき情報、管理者のみ知り得る情報、ユーザーのみ保持したい個人メモなど、同じユーザー情報でも別テーブルにしたい情報は数々あるため<br />
            ユーザー管理と社員管理でテーブルを分けています</p>

            <div className="w-full mb-3">
               <div className="border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                     <div className="items-center justify-center dark:bg-gray-800">
                        <p className="mb-3"><span className="font-semibold">管理者管理</span>では管理者のみに関連している情報</p>
                        <Image
                          className="mb-3 border"
                          src={'/php/01.png'}
                          alt="success"
                          width={500}
                          height={38}
                          priority
                        />
                     </div>
                     <div className="items-center justify-center dark:bg-gray-800">
                        <p className="mb-3"><span className="font-semibold">ユーザー管理</span>ではユーザーのみが保持していれば良い情報</p>
                        <Image
                          className="mb-3 border"
                          src={'/php/02.png'}
                          alt="success"
                          width={500}
                          height={38}
                          priority
                        />
                     </div>
                  </div>
               </div>
            </div>

            <p className="leading-7">ユーザーの登録は、ユーザー側、管理者側どちらからも登録が可能で<br />
            尚且つどちらから登録しても、ユーザー管理と社員管理どちらのテーブルにも同時に登録されるようなロジックを組んでいます</p>

            <Syhl
               lang='php'
               file='laravel/AdminController.php'
            />

            <Github url="laravel/blob/main/app/Http/Controllers/AdminController.php" />

            <hr className="my-5" />

            <p className="font-semibold mb-3">2.ファイル登録機能</p>
            <p className="leading-7 mb-5">管理者側よりユーザに関連するファイルとして履歴書や経歴書ファイルをアップロードできる機能を搭載しています<br />
            アップロードしたファイルはなるべくブラウザ上で確認できるようにしていますが、ブラウザの特性上画像ファイルとpdfのみです<br /><br />
            もちろん、アップロードした個人のファイルは管理者権限以外には見えてはいけないので、ディレクトリにauthをかけてあります<br />
            例えば、id:1のユーザー関連のファイルをアップロードした場合には、/protected/admin/1/以下に保存され、protected/adminディレクトリは特定の上位権限を持っているユーザーのみ閲覧できるようになっています<br /><br />
            同時複数アップロード機能、500kb制限、プレビュー機能など、利用者にわかりやすい仕様にしています</p>
            <Image
              className="mb-3 border"
              src={'/php/03.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">3.カレンダーシフト機能</p>
            <p className="leading-7 mb-3">シフト提出は当初、日付を入力して、そこから時刻など他の項目を登録するフォームにしていました</p>
            <Image
              className="mb-3 border"
              src={'/php/04.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />
            <p className="leading-7 mb-5">テスターの方からご意見をいただき、登録しづらいとの意見を頂いたため、カレンダーから選択して登録できるタイプに変更しました</p>

            <div className="w-full mb-3">
               <div className="border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                     <div className="items-center justify-center dark:bg-gray-800">
                        <p className="mb-3">カレンダーから日付をクリックするとモーダル表示</p>
                        <Image
                          className="mb-3 border"
                          src={'/php/05.png'}
                          alt="success"
                          width={500}
                          height={38}
                          priority
                        />
                     </div>
                     <div className="items-center justify-center dark:bg-gray-800">
                        <p className="mb-3">「提出する」とフォーム上で日付が選択された状態になる</p>
                        <Image
                          className="mb-3 border"
                          src={'/php/06.png'}
                          alt="success"
                          width={500}
                          height={38}
                          priority
                        />
                     </div>
                  </div>
               </div>
            </div>

            <p className="leading-7 mb-3">カレンダー上でシフトを確認することも可能です<br />
            ですが、提出して時点でのシフトのステータスは「新規」となっており、他人の新規シフトは閲覧できません<br />
            新規シフトを管理者が承認した時点で、他人のシフトを閲覧可能となります<br />
            管理者のみ「新規」、「承認」どちらのステータス時点でも、全てのシフトを閲覧することができます</p>

            <p className="mb-3">自身のシフトは新規でも閲覧可能</p>
            <Image
              className="mb-3 border"
              src={'/php/07.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />

            <p className="leading-7 mb-3">さらに、国民の祝日はapiから取得し、社内休業日はコンフィグより設定できるようになっています<br />
            https://laravel.ksk318.me/config<br />
            例に示した記述をすれば、配列を読み取って休日としてカレンダーに表記されます</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">4.権限について</p>
            <p className="leading-7 mb-3">ユーザーに付与する権限について、権限を登録するテーブルを設置する場合や、ユーザーごとに権限を登録できる機能が一般的ですが<br />
            権限を登録できるようにしてしまうと、把握が困難となり、複雑化してしまうので、権限は3つとし、マスター、管理者、一般と簡潔にしました<br /><br />
            それぞれ簡潔に説明すると、マスターは全ての機能が使えるユーザー、管理者は承認などが行えるユーザー、一般はそれ以外の通常の機能のみ利用できるユーザーです<br />
            これらの権限はデータベースに設定されておらず、modelに直で記述されています</p>

            <Syhl
               lang='php'
               file='laravel/Admin.php'
            />

            <Github url="laravel/blob/main/app/Models/Admin.php" />

            <hr className="my-5" />

            <p className="font-semibold mb-3">5.TinyMCEの導入</p>
            <p className="leading-7 mb-3">マニュアル機能、FAQ機能はpcに不慣れな方にも利用いただけるように、wordpressでも利用されている代表的なテキストエディターTinyMCEを導入しました<br />
            特にマニュアルの場合はアップロード機能が必要なため、編集上のために画像を貼り付けた時点でサーバー上に画像がアップロードされるようにしています<br />
            元来、TinyMCEにはコピーペーストで画像を貼り付ける機能がありますが、コピーペーストすると画像の名称変換機能がうまく動作しないため、無効にしました<br /><br />
            マニュアルにはコーディングに関する知識も記載する場合があるため、コードブロックを設置できるように、TinyMCE自体をカスタマイズしています</p>

            <Syhl
               lang='js'
               file='base.js'
            />

            <Github url="laravel/blob/main/public/js/base.js" />

            <p className="leading-7 mb-3">特定のキーをpressすると上記コードでwrapされるようにしています</p>

            <p className="mb-3">実行した場合の表示</p>
            <Image
              className="mb-3 border"
              src={'/php/08.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">6.FAQの簡略化</p>
            <p className="leading-7 mb-3">マニュアルはページ上で表示されるためidを取得して詳細表示されますが、<br />
            faqはモーダルのため、詳細表示できませんでした<br />
            そのため、faqではパラメータを取得して、該当のfaqを取得する機能を追加しました<br />
            https://laravel.ksk318.me/faq?pw-faq=1</p>
            <Image
              className="mb-3 border"
              src={'/php/09.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />
            <p className="leading-7 mb-3">これにより、faqから別のfaqにリンク移動できるようになっています<br />
            faqをモーダルにした理由は、全ページの共通ヘッダーにfaqの検索ボックスを設置しているため、<br />
            あえてモーダル表示するようにしています</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">7.Bootstrap Dual Listboxで従業員選択をわかりやすく</p>
            <p className="leading-7 mb-3">機材をユーザーに関連づける際には、全機材から選択する必要があり、<br />
            また、シフトを提出する際には全ユーザーから該当のユーザーを選択する必要があるため、例えば従業員が1000を超える場合は、長いリストの中から選択しなければなりません<br />
            これをセレクトボックスで実現してしまうと大変なので、{WrapCode('Bootstrap Dual Listbox')}を導入しました<br />
            https://www.virtuosoft.eu/code/bootstrap-duallistbox/<br />
            このプラグインは、セレクトボックスからの選択をわかりやすくする機能を持っていて、リストからの検索もできるようになります</p>
            <Image
              className="mb-3 border"
              src={'/php/10.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">8.ダークモード</p>
            <p className="leading-7 mb-3">ヘッダー右上にある月のマークをクリックするとダークモードに切り替わります<br />
            ダークモードの記憶はブラウザのクッキーに保存されて、1440分(24時間)保持されるようにしました</p>
            <Syhl
               lang='php'
               file='laravel/TopController.php'
            />

            <Github url="laravel/blob/main/app/Http/Controllers/TopController.php" />

            <hr className="my-5" />

            <p className="font-semibold mb-3">9.シフトの集計</p>
            <p className="leading-7 mb-3">シフトを月間の範囲で集計できる機能があります<br />
            https://laravel.ksk318.me/shift/total<br /><br />
            細かいシフト計算はモデルで計算し、コントローラー側の計算を元に配列にして集計してます<br />
            また、集計の条件をチェックボックスで複数選択できるようにし、特定のユーザー（従業員）のみ集計できます<br />
            以下はシフト計算したものを再度配列化して集計している部分の抜粋です</p>
            <Syhl
               lang='php'
               file='laravel/ShiftController.php'
            />
            <Github url="laravel/blob/main/app/Http/Controllers/ShiftController.php" />
            <p className="leading-7 mb-3">実際に表示されるページのフロントデザインです</p>
            <Image
              className="mb-3 border"
              src={'/php/11.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />
            <hr className="my-5" />

            <p className="font-semibold mb-3">10.会員の有効無効</p>
            <p className="leading-7 mb-3">こういった従業員を管理するツールで発生が考えられる事項は、従業員が退職する場合です<br />
            その場合、ユーザーがログインできないようにしなくてはいけません<br />
            無効にした場合、ログイン不可とする機能が必要です</p>
            <p className="leading-7 mb-3">ログイン部のコントローラーに以下を記述します<br />
            {WrapCode('if(Admin::find(Auth::user()->id)->status === "D")')}<br />
            登録ユーザーのステータスがD、すなわち無効の場合にはログインを不可とします</p>
            <p className="leading-7 mb-3">無効にしたユーザーは、従業員のセレクトボックスからも排除され、無効ユーザーは選択できないように設定されています</p>

         </div>

         <hr className="my-5" />

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">従業員管理ツール 「ララワークス」 のまとめ</h3>
            <p className="leading-7 mb-5">ララワークスの設計、デザインをした経験から、<br />
            laravelでユーザー管理システムを構築するにあたって、重要な点や気をつけるべき点をまとめます</p>
            <p className="font-semibold mb-3">権限周りが最重要項目</p>
            <p className="leading-7 mb-5">本システムを構築するにあたって、最も設計と作成に時間がかかった部分がこの{WrapCode('権限')}の部分でした<br />
            制作当初は権限自体もデータベース化し、テーブルを用意しようかと思いましたが<br />
            テーブルに登録する権限のからリレーションを伸ばし、それぞれのサービスに関連づけるとなると、ユーザー周りの権限だけでもおよそ三倍くらいの複雑さとなることが事前に判明していました<br />
            また、サービスの機能を増やすたびに、権限の思索がまとわりつく為、権限周りは{WrapCode('３つ')}で固定としました<br /><br />
            {WrapCode('ポイントの4')}にも記した通り、権限は配列で宣言しました<br />
            配列にしておけば、もし今後データベースに権限のテーブルを追加する場合にも対応できるため、今回は最善の選択だったかと思います<br /><br />
            またこの権限の数3、という数は、実際に制作を進めないと不明な場合が多いです<br />
            例えば今回の場合、シフトを登録するユーザー、それを承認するユーザー、承認はできても他社の個人情報は閲覧できないユーザー、全てを司れるユーザーなど<br />
            全てのパターンを考慮しつつ、最低限の権限数として{WrapCode('3つ')}を設定しました</p>
            <Image
              className="mb-3 border"
              src={'/php/12.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />
            <p className="leading-7 mb-5">この辺りも設計と運用を想定しないと、設定しにくい部分のため、制作を進めながら設定しが必要かもしれません<br /><br />
            見えてはいけない部分、登録できてはいけない部分、修正できてはいけない部分、これらは権限やステータスが大きく関わりがあるため<br />
            今後大きなシステム開発を進めるにあたっては最も重要な部分です</p>


            <hr className="my-5" />

            <p className="font-semibold mb-3">ユーザビリティは過剰なほどに考慮すべき</p>
            <p className="leading-7 mb-5">ユーザビリティに配慮したUXを心がけて制作を進めましたが、他者にテストを行ってもらったところ、<br />
            早速デザイン面で分かりにくいという部分が出てきました<br />
            シフト申請をする画面を以下のurlにしていましたが<br />
            https://laravel.ksk318.me/shift/edit<br />
            この画面上でどのようにシフトを登録すれば良いのか？また時間も設定する面倒であるなど、いろいろな意見がありました<br />
            これらの意見を受け止め、より分かりやすくするために、ある程度固定されているシフトの期間を候補として3件登録しました</p>

            <Image
              className="mb-3 border"
              src={'/php/13.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />

            <p className="leading-7 mb-5">ユーザーに分かりやすく、フォントサイズを大きくしたり、注釈を追記するだけで制作側は満足していましたが<br />
            やはり実際に他者に利用してもらわないと自身が気づけない部分が多いです</p>

            <p className="leading-7 mb-5">さらにシフトについて、一般ユーザーのみシフトを登録できるようにしていました<br />
            これに関しても、{WrapCode('承認者側からもシフトを登録できるようにしたい')}という意見が出てきたため、<br />
            一般ユーザーの場合は自身のシフト登録ページ、<br />
            承認ユーザー以上は他者のシフト登録ページが表示されるように条件で表示分けをしています<br /><br />
            実際の利用者に触ってもらえないと、万人に分かりやすいサービスの達成しないケースは往々にありそうです</p>

            <hr className="my-5" />

            <p className="font-semibold mb-3">テストはしすぎということはない、なるべく第三者に</p>
            <p className="leading-7 mb-5">テスト無くしてリリースはありえません、もちろん自身が何度もテストした上でもです<br />
            本サービスは社内案件のため、リリース後も運用しながら適宜微調整が可能でしたが<br />
            ecサイトやカスタマーが利用するサイトの場合は、いったんサイトを停止して、微調整後にテスト、その後本番適用してリリースの流れになりますが<br />
            本番リリース後に不具合が見つかってしまった場合は、再度サイト停止が必要になってしまいます<br /><br />
            テストにかかる時間は多めにバッファを見積もって、尚且つテスト項目は前もってリストアップする、等々事前準備は欠かせません<br /><br />
            当然の実施事項のように思われがちですが、何度もテストと本番適用を繰り返すうちに疎かにやすいため、<br />
            気を抜いた際にヒューマンエラーを起こしてしまいます<br /><br />
            些細なことでも気を抜かず、尚且つ適切な行動を取れることが、サービス運用者として最も重要なことなのかもしれません</p>

         </div>

      </section>

      </main>
    </div>
  );
}
