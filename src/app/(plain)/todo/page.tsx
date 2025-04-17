import type { Metadata } from "next";

import Image from "next/image"
// import Link  from 'next/link'

export const metadata: Metadata = {
  title: 'about｜'+process.env.SITE_TITLE,
  description: "について",
};

function WrapCode(txt: string) {
   return <code className="break-all bg-black/[.1] dark:text-black dark:bg-white/[.8] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Todo() {
   
   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">Todo</span><span className="text-md">入社したらやってみたいこと</span></h1>
      <section id="about">
         <h2 className="text-2xl font-semibold mb-2 text-center">クローゼット管理サービス<br />「WADRO(ワドロ)」(仮称)の開発</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3 dark:text-slate-400">サービスの開発をしてみたいです</p>

         <div className="w-full mb-3">
            <div className="border-gray-200 border-dashed rounded-lg">
               <div className="grid sm:grid-cols-[repeat(auto-fit,_16.666666%)] grid-cols-[repeat(auto-fit,_33.333333%)] m-auto justify-center">
                   <Image
                       className="mb-3"
                       src={'/todo/home.png'}
                       alt="home"
                       width={500}
                       height={38}
                       priority
                     />
               </div>
            </div>
         </div>

         <h3 className="text-lg font-semibold mb-2"><i className="ph ph-pants me-2"></i>「WADRO(ワドロ)」(仮称)とは？</h3>
         <p className="leading-7 mb-3">入社後に取り組みたいプロジェクトは、自身が考案した、<br />
         ユーザーのクローゼット管理サービス「WADRO(ワドロ)」({WrapCode('仮称、以下WADRO')})のプロジェクト実施です。<br /><br />
         WADROは、自身のクローゼットにある服をスマホで撮影し、データを登録することで<br />
         所謂タンスの肥やしになっている服が簡単に一括管理できるようになったり、<br />
         登録した服を組み合わせることで、コーデをあらかじめカレンダーに登録できるようになるサービスです。<br />
         WEARやZOZOTOWNとも連携していて、ZOZOTOWNで購入した商品であれば、買取相場の確認も可能になります。<br />
         WADROによって、購入〜管理〜買取までを網羅し、一連の流れを{WrapCode('zozoサービス内で完結できるようにする')}ことが最終目標です。</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-5 flex items-center"><i className="ph text-2xl ph-hoodie mr-2"></i>機能について</h3>

            <div className="relative sm:rounded-lg mb-4 grid overflow-hidden w-fit">
               <p className="font-semibold mb-3">クローゼット管理</p>

               <div className="cm-auto grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="sm:col-span-5 sm:order-1 order-2">
                    <p className="leading-7 mb-3">ユーザー自身のクローゼットやチェストで保管している、服やアクセサリーなどのアイテムを登録できる機能です。<br />
                     画像などの商品データを手動で登録することでデータの登録が可能です。<br />
                     ZOZO TOWN内で販売している商品であれば連携することで、データ取得ができます。</p>
                  </div>
                  <div className="sm:col-span-3 sm:order-2 order-1">
                     <div className="items-center justify-center sm:order-2 order-1">
                        <Image
                          className="mb-3 mx-auto aspect-square object-contain"
                          src={'/todo/home.png'}
                          alt="success"
                          width={200}
                          height={38}
                          priority
                        />
                     </div>
                  </div>
               </div>

               <hr className="my-5" />

               <p className="font-semibold mb-3">欲しいモノ管理</p>

               <div className="cm-auto grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="sm:col-span-5 sm:order-1 order-2">
                    <p className="leading-7 mb-3">欲しい服やアクセサリーなどのアイテムが登録できる機能です。<br />
                     ZOZO TOWNやZOZO USEDでお気に入り登録した商品も、自動的にこちらのリストに登録されます。</p>
                  </div>
                  <div className="sm:col-span-3 sm:order-2 order-1">
                     <div className="items-center justify-center sm:order-2 order-1">
                        <Image
                          className="mb-3 mx-auto aspect-square object-contain"
                          src={'/todo/want.png'}
                          alt="success"
                          width={200}
                          height={38}
                          priority
                        />
                     </div>
                  </div>
               </div>

               <hr className="my-5" />

               <p className="font-semibold mb-3">スケジュールコーデ管理</p>

               <div className="cm-auto grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="sm:col-span-5 sm:order-1 order-2">
                    <p className="leading-7 mb-3">クローゼット管理に登録したアイテムで、その日毎のコーデをあらかじめカレンダーに登録しておける機能です。<br />
               登録したコーデは別日へのコピー可能で、コーデの一般公開も可能です。</p>
                  </div>
                  <div className="sm:col-span-3 sm:order-2 order-1">
                     <div className="items-center justify-center sm:order-2 order-1">
                        <Image
                          className="mb-3 mx-auto aspect-square object-contain"
                          src={'/todo/calendar.png'}
                          alt="success"
                          width={200}
                          height={38}
                          priority
                        />
                     </div>
                  </div>
               </div>

               <hr className="my-5" />

               <p className="font-semibold mb-3">ランドリー管理</p>

               <div className="cm-auto grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="sm:col-span-5 sm:order-1 order-2">
                    <p className="leading-7 mb-3">洗濯中、クリーニング中の衣類を管理できる機能です。<br />
               クローゼット管理とも連動し、洗濯中の衣類に関しては「洗濯中」などのバッジ付与。<br />
               洗濯中の衣類は、コーデとしてはグループ化できないなどの制限がかかります。</p>
                  </div>
                  <div className="sm:col-span-3 sm:order-2 order-1">
                     <div className="items-center justify-center sm:order-2 order-1">
                        <Image
                          className="mb-3 mx-auto aspect-square object-contain"
                          src={'/todo/laundry.png'}
                          alt="success"
                          width={200}
                          height={38}
                          priority
                        />
                     </div>
                  </div>
               </div>

            </div>
         </div>

      </section>

      <section id="diff">
         <h2 className="text-2xl font-semibold mb-2 text-center">zozo内の他サービスとの比較</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3 dark:text-slate-400">他サービスとの違いについて</p>

         <p className="leading-7 mb-3">ここまでのサービスの内容を確認して、<br />
         いまいちWEAR、ZOZOTOWNにある類似のサービスとの違いが分かりにくいかと思います。<br />
         例えば、{WrapCode('クローゼット管理')}の機能であれば{WrapCode('WEAR')}内の「お持ちのアイテム」が存在しますし、<br />
         {WrapCode('欲しいモノ管理')}であれば{WrapCode('WEAR、ZOZOTOWN')}のどちらにも「お気に入り」機能が存在しています。<br />
         こちらについて以下より、機能毎の詳細情報や、既存サービスとWADROの相違点について記載します。</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-5 flex items-center"><i className="ph text-2xl ph-coat-hanger mr-2"></i>既存機能との比較、違い</h3>

            <div className="relative sm:rounded-lg mb-4 grid overflow-hidden w-fit">

               <p className="font-semibold mb-3">持ち服管理</p>

               <div className="cm-auto grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="sm:col-span-5 sm:order-1 order-2">
                    <p className="leading-7 mb-3">WEARには類似機能として「お持ちのアイテム」が存在しています。<br />
                     この機能内の「参考価格」について、基本的には連携できた場合のみ登録され、ユーザー側からは登録できません。<br />
                     そこで新たに「{WrapCode('購入価格')}」というカラムを作成し、ユーザーが購入した時点の金額をユーザー側から登録可能に。<br />
                     また、「{WrapCode('買取金額')}」カラムを作成し連携先のフリマサイトより、現在の最高買取金額を取得して表示できるようにします。<br /><br />
                     さらに、表示方法としてWEARアプリ内では「お持ちのアイテム」はカテゴリ毎にフォルダ分け表示となっていますが、<br />
                     WADROでは、これをタブ表示できるようにします。<br />
                     カテゴリ毎にフォルダを作成すると、スクロール域が縦に増え続け見えにくくなりがちです。<br />
                     カテゴリは横方向、カテゴリ毎のアイテムは縦方向にすることで、ユーザビリティに配慮した動きになります。</p>
                  </div>
                  <div className="sm:col-span-3 sm:order-2 order-1">
                     <div className="items-center justify-center sm:order-2 order-1">
                        <Image
                          className="mb-3 mx-auto aspect-square object-contain"
                          src={'/todo/home2.png'}
                          alt="success"
                          width={200}
                          height={38}
                          priority
                        />
                     </div>
                  </div>
               </div>

               <hr className="my-5" />

               <p className="font-semibold mb-3">欲しいモノ管理</p>

               <div className="cm-auto grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="sm:col-span-5 sm:order-1 order-2">
                    <p className="leading-7 mb-3">WEAR、ZOZOTOWNのどちらにも「お気に入り」機能が存在していますが、外部ec、未対応ecには対応していません。<br />
                     商品毎に、外部URL、価格、および写真を登録可能とし、ありとあらゆるウェブサイト上のアイテムに対応させます。<br />
                     「{WrapCode('お気に入りは、内部購入につながる機能のため、内部商品のみ登録可とすることで外部への流出を最小限にしたい')}」という観点から、この機能はメリットがないように思うかもしれませんが、<br />
                     やはりネット上に存在する{WrapCode('全ての「欲しい」アイテム')}を管理するためには、サイト内で購入できる服のみでは対応しきれない部分が出てきてしまいます。<br />
                     これをカバーするためには、外部URLの登録を可能とし、一元管理できるサービスを作成すべきだと思っています。<br /><br />
                     本機能のメリットとしては、<br />
                     欲しい服を登録する際には「お持ちのアイテム」にある機能と同じように、ZOZOサービス内から同一アイテムを紐付けることによって、最終的にはZOZO対応ECへの誘導。<br />
                     また、外部URLの登録が多数存在するアイテムやブランドの傾向を把握することができるなど、<br />
                     メリットも数多く存在します。</p>
                  </div>
                  <div className="sm:col-span-3 sm:order-2 order-1">
                     <div className="items-center justify-center sm:order-2 order-1">
                        <Image
                          className="mb-3 mx-auto aspect-square object-contain"
                          src={'/todo/want2.png'}
                          alt="success"
                          width={200}
                          height={38}
                          priority
                        />
                     </div>
                  </div>
               </div>

               <hr className="my-5" />

               <p className="leading-7 mb-3">それら以外の機能に関しては、新規の機能なので、「機能について」で説明した成果が挙げられます。</p>

            </div>
         </div>

      </section>

      <section id="point">
         <h2 className="text-2xl font-semibold mb-2 text-center">WADROの実装ポイント</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3 dark:text-slate-400">実装時の懸念点や確認すべき点をピックアップします</p>

         <h3 className="text-lg font-semibold mb-2"><i className="ph ph-device-mobile-camera me-2"></i>実装にあたって</h3>
         <p className="leading-7 mb-3">実際に{WrapCode('WADRO')}の機能を追加する場合、<br />
         取得できるデータや、該当データの有無など、<br />
         現時点で私自身が確認できないポイントによっては、実現できない機能が出てくる可能性もあります。<br />
         実現する際に確認すべきポイントについて、以下に特筆すべき点をまとめます。</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <div className="relative sm:rounded-lg mb-4 grid overflow-hidden w-fit">
               <p className="font-semibold mb-3">テーブルやカラム追加に伴う処理の確認</p>
               <ul className="list-disc ms-5 mb-0">
                  <li>データベース上に参考価格のカラムや、新規テーブルとして、服のコーデテーブル、<br />
                  すなわち服の組み合わせのグループテーブルが追加できるか</li>
                  <li>APIを経由している場合は、APIへの影響、さらには他テーブルとのプライマリーキー制約に影響はないか</li>
                  <li>必然的にデータベース内の処理は増えるので、どの程度の負荷がかかるか、負荷に耐えられるか</li>
               </ul>
            </div>
         </div>

         <hr className="my-5" />

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <div className="relative sm:rounded-lg mb-4 grid overflow-hidden w-fit">
               <p className="font-semibold mb-3">連携可能な外部ECから取得できるデータの種類</p>
               <ul className="list-disc ms-5 mb-0">
                  <li>アイテムの最高買取金額は、取得できるデータかどうか</li>
                  <li>ZOZO関連ECのデータベースに登録されていない商品の、買取金額のデータが存在するか</li>
               </ul>
            </div>
         </div>

         <hr className="my-5" />

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <div className="relative sm:rounded-lg mb-4 grid overflow-hidden w-fit">
               <p className="font-semibold mb-3">そもそも実際に必要としている機能であるかどうか</p>
               <ul className="list-disc ms-5 mb-0">
                  <li>WADROにある各機能が必要であるかどうか</li>
                  <li>機能の追加コストに見合うリターンがあるか</li>
               </ul>
            </div>
         </div>

         <hr className="my-5" />

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <div className="relative sm:rounded-lg mb-4 grid overflow-hidden w-fit">
               <p className="font-semibold mb-3">全く新しいサービスにするか、もしくは既存サービスへの機能追加にするか</p>
               <ul className="list-disc ms-5 mb-0">
                  <li>既存サービスであるWEARやZOZOTOWNに新たな機能として追加することも可能な程度のサービスであるため、<br />
                  そもそも新規にサービスとしてローンチさせるか、それとも既存サービスへの追加機能とするか</li>
                  <li>追加機能にするとして、どちらのサービスにどのように追加するか</li>
               </ul>
            </div>
         </div>

      </section>

      <section id="epilogue">
         <h2 className="text-2xl font-semibold mb-2 text-center">まとめ</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3 dark:text-slate-400">実装にあたってのまとめ</p>

         <h3 className="text-lg font-semibold mb-2"><i className="ph ph-lightbulb-filament me-2"></i>自分が必要か、よりも過半数以上が必要か</h3>
         <p className="leading-7">せっかく作ったサービスもユーザーに利用してもらえなければ意味がありません。<br />
         必ず社内アンケートなどをとって、必要か不必要かを確認しなければなりません。<br /><br />
         今回、ユーザー側に嬉しい機能としてプロジェクトを掲げましたが、<br />
         自分自身のあったらいいな、がユーザーのあったらいいなに必ずしも該当するとは限りません。<br />
         主観で必要な機能を判断せず、どんな細かい機能でも必ず他人の意見を取り入れて、尚且つ受け入れて、<br />
         その上で検討する必要があります。</p>

         <hr className="my-5" />

         <h3 className="text-lg font-semibold mb-2"><i className="ph ph-lightbulb-filament me-2"></i>他部署や外部との連携</h3>
         <p className="leading-7">社内のみならず外部との作業連携も発生する可能性があるため、事前準備やテストが必須です。<br /><br />
         一見単純なサービス追加のように見えますが、データベースの改修も必要なため、<br />
         全体的な作業順序を予め設定し、作業テストを幾度となく重ねる必要があります<br />
         また社内において、同様のリプレイスや改修を行なった経験をお持ちの方にノウハウを伺い、反映させることも欠かせません。</p>

         <hr className="my-5" />

         <h3 className="text-lg font-semibold mb-2"><i className="ph ph-lightbulb-filament me-2"></i>取得データは必ず活かす</h3>
         <p className="leading-7 mb-3">今回の機能によって、欲しいアイテムに外部リンクを登録できるようになりますので、<br />
         結果として、ZOZOのサービス内では購入できないアイテムデータを取得できます。<br />
         この取得したデータは、次回以降の開発やユーザーの利便性向上についての糧にしなければなりません。<br /><br />
         ZOZO内で購入できないがユーザーが必要としているアイテムは、今後取り扱うべき商品データとして保管。<br />
         購入から出品までの期間を計算し、登録できるように改修すれば、さまざまな傾向と対策に繋げることもできます。<br /><br />
         WADROをリリースすることで、サービスの向上、UI・UXの向上、最終的には社内全体の向上に繋がるようにしたいです。</p>

      </section>

      </main>
    </div>
  );
}
