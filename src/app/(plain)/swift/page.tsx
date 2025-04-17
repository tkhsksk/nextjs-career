import type { Metadata } from "next";

// import Link  from 'next/link'
// import Image from "next/image"
// import Github from '@components/github';
import Syhl from '@components/code';

export const metadata: Metadata = {
   title: 'swift｜'+process.env.SITE_TITLE,
   description: "について",
};

function WrapCode(txt: string) {
   return <code className="break-all bg-black/[.1] dark:text-black dark:bg-white/[.8] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">swift</span><span className="text-md">について</span></h1>
      <p className="leading-7">本項目では{WrapCode('swift')}の書き方について、基本から応用までを学習します。</p>
      
      <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200">
         <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="text-left">
         <tbody className="dark:text-gray-600">
            <tr>
               <th className="pr-4">swift</th><td>Apple Swift version 5.10</td>
            </tr>
            </tbody>
         </table>
      </div>

      <section id="helloWorld">

         <h2 className="text-2xl font-semibold mb-3">Hello World、変数</h2>
         <p className="leading-7 mb-3">文字列としてHello Worldの出力、変数への代入について記述します</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">Hello World.</h3>
            <p className="leading-7">swiftで文字列を表示する場合は、以下のファイルを{WrapCode('swift ファイル名')}実行できます</p>
            <Syhl
               lang='swift'
               file='helloWorld.swift'
            />
            <p className="leading-7 mb-3">上記はビルドせずに実行した場合なので、実際はビルドしないと実行結果が表示されるまで遅いです<br />
            ビルドして実行は以下の方法です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='sh'
               file='swift/build.sh'
            />
            <p className="leading-7 mb-3">Hello World!以外の文字列を表記する場合は、上記コードのHello World!部分をそれ以外の文字列に置き換えるだけです<br />
            次に{WrapCode('swift')}の文字列を改行したい場合があります
            </p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='swift'
               file='helloWorld_br.swift'
            />
            <p className="leading-7 mb-3">{WrapCode('swift')}中の改行には\nを用います。</p>
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='swift/br.sh'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">変数</h3>
            <p className="leading-7 mb-3">文字列にテキストや数値を格納しておくことも可能です<br />中学生の数学で学習したx=1,y=2と同じ要領です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='swift'
               file='var.swift'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='swift/var.sh'
            />

            <p className="leading-7 mb-3">{WrapCode('var x = "test"')}でxにtestを格納し、それを{WrapCode('print()')}で呼び出します<br />文字を結合する場合にはx,yにそれぞれの文字列を格納して+(プラス)で結合することができます</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='swift'
               file='join.swift'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='swift/join.sh'
            />

            <p className="leading-7 ">ここまでで分かりましたが、pythonやjavaで厳格にされていた変数の型が、phpくらい簡略化されているようです<br />
            なので{WrapCode('var s:String = "test"')}といったように厳格に型を宣言することも可能ですが<br />
            {WrapCode('var s = "test"')}、{WrapCode('var v = 11')}といったように文字列か整数かでStringとIntを自動的に区別してくれます</p>
         </div>

      </section>

      <section id="calc">
         <h2 className="text-2xl font-semibold mb-3">計算と型</h2>
         <p className="leading-7 mb-3">数字での計算（足し算、引き算、掛け算、割り算）と型について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">計算</h3>
            <p className="leading-7">単純にプラスの符号を用いて、足し算をします</p>
            <Syhl
               lang='swift'
               file='calc01.swift'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='swift/calc01.sh'
            />

            <p className="leading-7 mb-3">引き算、掛け算、割り算も以下の符号で計算可能です</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='swift'
               file='calc02.swift'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='swift/calc02.sh'
            />

            <p className="mb-3">次に変数に数字を代入して計算をしてみます、数字の場合はダブルクォーテーションで囲む必要はありません</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='swift'
               file='calc03.swift'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
                lang='sh'
                file='swift/calc03.sh'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">型宣言</h3>
            <p className="leading-7">本来、変数に値を代入する場合は、型の宣言が必要です<br />
            {WrapCode('swift')}の場合、そこが非常に曖昧になっているため宣言せずとも計算が可能ですが<br />宣言した上での計算をしましょう</p>
            <p className="leading-7 mb-3">例えば7という文字があった場合、文字としての7とも捉えられるし、数字としての7とも捉えられます<br />
            この7は数字としての7だよ、と宣言するのが型宣言です<br />
            この宣言をしないと計算ができなかったり、文字列の結合ができなかったりします</p>
            <Syhl
               lang='swift'
               file='type_int.swift'
            />
            <p className="leading-7 mb-3">代入する値を入力した後に{WrapCode(':Int')}をつけるだけで、「数字の7」と宣言することができます<br />では、以下の場合どうなるでしょうか</p>
            <Syhl
               lang='swift'
               file='type_str.swift'
            />
            <p className="mb-3">文字列としての7と8を宣言して、それを足しています</p>
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='swift/type_str_result.sh'
            />
            <p className="mb-3">数字を文字列と宣言した場合、エラーが発生します<br />型を宣言した場合はそれに見合った操作をしなければエラーになるようです</p>
         </div>

      </section>

      <section id="func,class">
         <h2 className="text-2xl font-semibold mb-3">関数、Class、struct</h2>
         <p className="leading-7 mb-3">関数の宣言、public private protectedについて</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">関数</h3>
            <p className="leading-7">プログラム中に何度も出現する数値を変数に代入することで、再利用が可能ですが<br />計算式や定まった結合などを行う場合は関数を用います<br />以下は2つの数字を足してから1を引く、という計算を何度も使う場合です</p>
            <Syhl
               lang='swift'
               file='func.swift'
            />
            <p className="mb-3">x,yという変数を設定し、それぞれを足した上で1を引き、それをreturnで返り値にしています<br />この関数をechoで表示することによって計算後の結果を表示させます<br />よって2+3-1が計算され以下が結果となります</p>
            <Syhl
                lang='sh'
                file='swift/func.sh'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">Class</h3>
            <p className="leading-7 mb-3">また関数を使う場合、その関数をさらに囲うために{WrapCode('Class')}というものが定義できます</p>
            <Syhl
               lang='swift'
               file='class.swift'
            />

            <p className="leading-7 mb-3">関数funcをprivateで宣言するとClassの外では宣言できません<br />
            以下の結果の末尾のようにエラーが表示されます</p>

            <Syhl
               lang='sh'
               file='swift/class.sh'
            />

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">Struct</h3>
            <p className="font-semibold">・構造体</p>
            <p className="leading-7 mb-3">swiftでは{WrapCode('struct')}という概念があり、1つの情報のまとまりとして構造を作成し宣言することができます<br />
            例えば、商品という構造体が存在し、商品には価格、商品名、JANコードなどの情報が詰まっています</p>
            <Syhl
               lang='swift'
               file='struct.swift'
            />

            <p className="leading-7 mb-3">実行すると、それぞれの数値が計算されて文章が表示されるはずです</p>
            <p className="font-semibold">実行結果</p>

            <Syhl
               lang='sh'
               file='swift/struct.sh'
            />

            <p className="leading-7 mb-3">文章と配列が返ってきます</p>

         </div>

      </section>

      <section id="array">
         <h2 className="text-2xl font-semibold mb-3">配列、for、foreach</h2>
         <p className="leading-7 mb-3">配列の作り方と各種回し方について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">配列</h3>
            <p className="leading-7 mb-3">この配列について、{WrapCode('swift')}の学習上でつまづきました<br />
            そもそもなぜ配列が必要なのか？について的確に解説をしているサイトも参考書もなかったからです<br />
            自分が学習上で学び、配列の有効性について独自解釈しましたのでそれを以下に記載します</p>
            <p className="font-semibold">forで配列を回す</p>
            <Syhl
               lang='swift'
               file='for.swift'
            />
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='swift/for.sh'
            />
            <p className="leading-7 mb-3">上記構文をざっくりした解説はコメントアウトにて説明されていますが、<br />
            すべて同じように回す内容のため、結果も同じとなります<br />
            foreachは回数を制限せず、配列を回し切るための記述です</p>
            <p className="font-semibold">foreachで配列を回す</p>
            <Syhl
               lang='swift'
               file='foreach.swift'
            />
            <Syhl
               lang='sh'
               file='swift/foreach.sh'
            />
            <p className="leading-7 mb-3">数の指定などをしなくても、すべての配列が表示されます<br />
            forとforeachは似ているようで異なっているため、用途に基づいて利用しましょう</p>

            <hr className="my-5" />

            <p className="font-semibold">データの検索</p>
            <p className="leading-7 mb-3">配列から配列を作成することで、簡易的なデータ検索が可能です<br />
            配列を回して、その中で該当となるデータのみ格納する配列を新規に作成すると、検索済みデータの配列を作成できます</p>
            <p className="leading-7">実際のコードは以下です</p>

            <Syhl
               lang='swift'
               file='search.swift'
            />

            <p className="leading-7 mb-3">で可能です<br />
            {WrapCode('swift')}を深く学ぶまで配列の利点はわかりにくいものですが、<br />
            実務で利用するにあたり、検索や繰り返しの処理で重要な役割を果たしていることに気づきました</p>
            <p className="font-semibold">実行結果</p>
            <Syhl
               lang='sh'
               file='swift/search.sh'
            />

         </div>

      </section>

      </main>
    </div>
  );
}
