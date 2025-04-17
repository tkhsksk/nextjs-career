import type { Metadata } from "next";

import Syhl from '@components/code';

export const metadata: Metadata = {
   title: 'JavaScript｜'+process.env.SITE_TITLE,
   description: "について",
};

function WrapCode(txt: string) {
   return <code className="break-all bg-black/[.1] dark:text-black dark:bg-white/[.8] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">JavaScript</span><span className="text-md">について</span></h1>
      <p>本項目ではJavaScriptの書き方について、基本のみを学習し、<br />
      主に本サイトで利用している{WrapCode('next.js')}についての説明をしていきます</p>
      
      <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-slate-200">
         <p className="font-semibold mb-3 text-cyan-950">前提となる開発条件</p>
         <table className="text-left">
         <tbody className="dark:text-gray-600">
            <tr>
               <th className="pr-4">server</th><td>Amazon Linux 2023</td>
            </tr>
            <tr>
               <th className="pr-4">node.js</th><td>v22.8.0</td>
            </tr>
            <tr>
               <th className="pr-4">npm</th><td>v10.8.2</td>
            </tr>
            <tr>
               <th className="pr-4">next.js</th><td>v14.2.9</td>
            </tr>
            <tr>
               <th className="pr-4">mysql</th><td>v11.5.2-MariaDB</td>
            </tr>
            </tbody>
         </table>
      </div>

      <section id="basis">
         <h2 className="text-2xl font-semibold mb-3">基本操作</h2>
         <p className="leading-7 mb-3">本サイトを作成するにあたり、next.jsを導入しています<br />
         next.jsが動作する環境を構築しつつ、基本動作についても学んでいきます</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">各種インストール</h3>
            <p className="leading-7 mb-3">node.jsとnpmが必要なので、まずec2にインストールされているかを確認します</p>
            <Syhl
               lang='sh'
               file='nextjs/install.sh'
            />
            <p className="leading-7 mb-3">どちらも導入されていました、ローカルで開発する前提なのでローカルのmacOSは<br />
            後ほどec2環境と一致させます<br />
            その後、サーバー上でnext.jsをinstallします</p>
            <Syhl
               lang='sh'
               file='nextjs/step1.sh'
            />
            <p className="leading-7 mb-3">git環境とapacheの環境構築に関しては省略しますが、あらかじめ設定済みです<br />
            この時点でドメインにアクセスするとnext.jsが確認できますが、<br />
            サーバーからexitすると{WrapCode('npm run start')}が無効となり、表示ができなくなります</p>
            <p className="leading-7 mb-3">サーバーからexitで抜けた後も起動させ続けるコマンドを実行します</p>
            <Syhl
               lang='sh'
               file='nextjs/step2.sh'
            />
            <p className="leading-7 mb-3">上記コマンドでとりあえず実行できます<br />
            現サーバーはなるべく安く済ませられるように最弱のインスタンスにしているため、メモリの少なさから実行できないため<br />
            buildを正常に終わらせるための、キャッシュ削除やswap作成など、オプションコマンドを多数設けてます</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">構造</h3>
            <p className="leading-7 mb-3">app内が主に編集するファイルが集まっています<br />
            その中がどのようなディレクトリ構成になっているかをtreeコマンドで確認しましょう</p>
            <p className="font-semibold">実行内容</p>
            <Syhl
               lang='sh'
               file='nextjs/tree.sh'
            />
            <p className="leading-7 mb-3">{WrapCode('(website)')}はasideがないレイアウト<br />
            {WrapCode('(plain)')}はasideがあるレイアウトのページファイルを格納します<br />
            試しに{WrapCode('(plain)')}の中身を見てみましょう</p>
            <Syhl
               lang='sh'
               file='nextjs/tree_plain.sh'
            />
            <p className="leading-7 mb-3">next.jsではlayout.tsxファイルのレイアウトが以下ディレクトリに適用されるようになっています<br />
            JavaScript,aboutなどのディレクトリは、そのままドメイン以下のpathになります</p>
            <p className="leading-7 mb-3">次にcomponentsの中身を見てみます</p>
            <Syhl
               lang='sh'
               file='nextjs/tree_components.sh'
            />
            <p className="leading-7">ここではheaderやfooterなど、すべてのページで共通で使うようなパーツを置きます<br />
            呼び出す場合はまずlayout.tsxの上部でimportしPlainLayoutのreturn内にて呼び出します<br />
            これらを踏まえた上で、next.jsに対しカスタマイズを行います</p>
         </div>

      </section>

      <section id="customize">
         <h2 className="text-2xl font-semibold mb-3">カスタマイズ</h2>
         <p className="leading-7 mb-3">各種コードを各ページに残せるようなページを作成するため、カスタマイズを行います</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">json</h3>
            <p className="leading-7 mb-3">next.js直下にdata.jsonを作成し、ページ内容をjson形式で共通で表示させます<br />
            {WrapCode('import Datas from "../../../data.json"')}</p>
            <Syhl
               lang='sh'
               file='nextjs/data.sh'
            />
            <p className="leading-7 mb-3">これによってすべてのページで共通のメニュー内容を表示させることができます</p>

            <hr className="my-5" />

            <h3 className="text-lg font-semibold mb-3">コードファイルの読み込み</h3>
            <p className="leading-7 mb-3">各所にコードブロックを標示させる場合に、<br />
            next.jsのページファイル自体に書き込んでしまうと、ページファイル自体のテキスト量が膨大になってしまいます<br />
            また、コード自体は一度実行結果を確認したいため、コードファイル自体はコードファイルとして、保存しておきたいです<br />
            そのためにまず、next.jsが存在するディレクトリの構成を以下のようにしています</p>
            <Syhl
               lang='sh'
               file='nextjs/tree_root.sh'
            />
            <p className="leading-7 mb-3">next.js以外のディレクトリには各プログラミング言語の実行ファイルを格納し<br />
            実行ファイルをテキストで読み込み、シンタックスハイライターで表示させる関数をページファイル上で実行しています</p>
            <Syhl
               lang='sh'
               file='nextjs/code.sh'
            />
         </div>

      </section>

      </main>
    </div>
  );
}
