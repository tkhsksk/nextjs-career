import type { Metadata } from "next";
import React from 'react';

import Image from "next/image"
import Link from 'next/link'
import Datas from "../../../../data.json"

export const metadata: Metadata = {
    title: 'about｜' + process.env.SITE_TITLE,
    description: "について",
};

function LinkMark(link: string) {
    return <Link href={link} target="_blank"><i className="ph ph-arrow-square-out ms-1"></i></Link>;
}

export default function Home() {
    return (
        <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">
      <Image
              className="mb-3 mx-auto"
              src={'/about/logo.svg'}
              alt="gopher"
              width={50}
              height={50}
              priority
            />
      <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">About me</span><span className="text-md">私について</span></h1>
      <section id="biography">
         <h2 className="text-2xl font-semibold mb-2 text-center">biography</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3 dark:text-slate-400">かんたんな自己紹介です</p>

         <h3 className="text-lg font-semibold mb-2"><i className="ph ph-user me-2"></i>Introduction</h3>
         <p className="leading-7 mb-3">はじめまして。髙橋と申します。<br />
         大学卒業後、演劇活動、フリーランスを経て株式会社portiaに入社し、大学で学んだ知識を活かしていました。<br />
         株式会社portiaでは、webサイトのコーディングからプログラミングまでを担当し、<br />
         主にサーバー構築からdb定義、社内独自サービスのbtob専用支払い「PortiaPAY」のapi接続から運用までを行なっていました。<br />
         身に付けたスキルを生かし、持続可能な未来に貢献できるキャリアを歩める転職を検討しています。</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <h3 className="text-lg font-semibold mb-3">Profile</h3>

            <div className="relative sm:rounded-lg mb-4 grid overflow-hidden w-fit">
            <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
               <tbody className="align-top">
               <tr>
                  <td className="text-right">名前</td><td >｜</td><td>髙橋佳佑（たかはしけいすけ）</td>
               </tr>
               <tr>
                  <td className="text-right">生年月日</td><td >｜</td><td>1990.3.18（満35歳）</td>
               </tr>
               <tr>
                  <td className="text-right">住所</td><td >｜</td><td>〒151-0053<br />
                  東京都渋谷区代々木1-25-10-303</td>
               </tr>
               <tr>
                  <td colSpan={2}></td>
                  <td>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1578.9675478175286!2d139.700217613816!3d35.681906164870846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5p2x5Lqs6YO95riL6LC35Yy65Luj44CF5pyoMS0yNS0xMC0zMDM!5e0!3m2!1sja!2sjp!4v1729230640960!5m2!1sja!2sjp"
                  width={300}
                  height={300}
                  className="my-3"></iframe></td>
               </tr>
               <tr>
                  <td className="text-right">電話番号</td><td >｜</td><td>080-3177-5789</td>
               </tr>
               <tr>
                  <td className="text-right">e-mail</td><td >｜</td><td>tkhsksk0318@gmail.com</td>
               </tr>
               </tbody>
            </table>
            </div>
         </div>

      </section>

      <section id="history" className="w-full">
         <h2 className="text-2xl font-semibold mb-2 text-center">history</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3 dark:text-slate-400">大学〜現在までの経歴について</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="leading-7 text-center font-semibold"><i className="ph ph-student me-2"></i>学歴</p>
            <h3 className="text-lg font-semibold">2009年4月</h3>
            <p className="leading-7">東京工科大学 コンピュータサイエンス学部入学</p>
            <h3 className="text-lg font-semibold">2013年3月</h3>
            <p className="leading-7">東京工科大学 コンピュータサイエンス学部卒業</p>

            <hr className="my-5" />

            <p className="leading-7 text-center font-semibold"><i className="ph ph-suitcase-simple me-2"></i>職歴</p>
            <h3 className="text-lg font-semibold">2015年4月</h3>
            <p className="leading-7">株式会社good spell co.設立</p>
            <h3 className="text-lg font-semibold">2016年3月</h3>
            <p className="leading-7">株式会社portia入社</p>
            <h3 className="text-lg font-semibold">2024年10月</h3>
            <p className="leading-7">株式会社portia 一身上の都合により退職</p>
            <p className="leading-7">現在に至る</p>
         </div>

      </section>

      <section id="work_history" className="w-full">
         <h2 className="text-2xl font-semibold mb-2 text-center">work history</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3 dark:text-slate-400">これまでの職務経歴、制作実績と成果について<br />
         主要なものをピックアップしました</p>

         <p className="leading-7 mb-3"><span className="font-semibold">◾️職務要約</span><br />
         前職にはwebフロントデザイン担当として入社し、2018年からバックエンドを担当。<br />
         以降はサーバー、db設計、ドメイン、社内サービスのBtoB専用支払い「PortiaPAY」のAPIの接続を担当していました。<br />
         クライアント様との打ち合わせからデザイン、プログラミング、設計、保守まで全て担当した経験もございます。<br />
         また、2023年からはecサイトのPM業務も担当していました。</p>

         <p className="leading-7 mb-5"><span className="font-semibold">◾️職務経歴</span><br />
         2016年04月～2024年10月　株式会社portia（ポーシャ）現在に至る<br />
         事業内容：BtoB専用支払いサービス「PortiaPAY(ポーシャペイ)」の開発、提供<br />
         資本金：40百万円　従業員数：7名　非上場</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5 mb-5 gap-8 flex flex-col">
            <div>
            <h3 className="font-semibold mb-2 mt-3 text-center text-2xl">家電企業様のサイト立ち上げから更新まで</h3>
               <Image
                 className="mb-3 border mx-auto aspect-square object-contain p-4"
                 src={'/about/tv.png'}
                 alt="success"
                 width={180}
                 height={180}
                 priority
               />
               <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                  <p className="text-slate-900 dark:text-white">期間：2018年4月～2024年10月(6年6か月)</p>
                  <p className="text-slate-900 dark:text-white">構築環境：eccube3(php5.6、Symfony、Twig、BootStrap、mysql)、JavaScript</p>
               </div>
               <p><span className="font-semibold">【概要】</span><br />
               企業様自社開発の業務用大型テレビを販売するためのecシステム構築<br /><br />
               <span className="font-semibold">【担当業務】</span><br />
               バックエンド関連連絡窓口、デザイン、コーディング、フロント・バックエンド、データベース管理、更新作業<br /><br />
               <span className="font-semibold">【ポイント】</span><br />
               購入者が主に企業様のBtoB専門ecサイトだったため、支払い方法にポーシャペイを組み込んでいます。<br />
               他にも確認事項を登録するオプション機能、各商品の説明ページを編集する機能などを、カスタマイズで追加しています。<br />
               商品単価が高いこともあって大きな売上を達成することができました。<br />
               初めてのecサイト制作で、ecサイトにおける基本定義を学習させていただきました</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">食肉加工・販売企業様のコーポレートサイト作成</h3>
                  
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/pig1.png'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2019年11月～2024年10月(約5年)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：WordPress(php7.4、BootStrap、mysql)</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     コーポレートサイトデザインおよび制作<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     デザイン、コーディング、フロント・バックエンド、データベース管理<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     クライアント様にとって初めてのコーポレートサイト立ち上げだったため、クライアント様のもとに出向いて打ち合わせを行いました。<br />
                     ご要望として、自社にてサイトのお知らせを更新する機能があったため、初心者の方でも安心して操作できるwordpressにて作成しています。<br />
                     当初は商品を用いたレシピ集を追加予定だったため、レシピページを追加する機能をカスタマイズで作成しています。</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">食肉加工・販売企業様のec作成と更新およびカスタマイズ</h3>
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/pig2.png'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2020年12月～2024年10月(約4年)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：eccube4(php7.2、Symfony、Twig、BootStrap、mysql)</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     自社商品販売専用のecサービス構築<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     デザイン、コーディング、フロント・バックエンド、データベース管理、更新作業<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     クライアント様のコーポレートサイト立ち上げと同時に、ecサイトの立ち上げも同時に行いました。<br />
                     無料のec専用システムeccube4にて作成しています。<br />
                     卸売サイトのためポーシャペイの導入、量り売り機能、お届け日指定機能を追加しています。<br /><br />
                     運用中、カードの不正使用によりオーソリの大量発生が検知されたため、同ipでクレジット支払にて3回以上購入失敗があった場合はアクセス停止とする機能を追加しました</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">ipo企業様のフォレンジックサイト作成</h3>
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/gov.png'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2022年3月～2024年10月(2年7か月)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：php7.4、BootStrap5、mysql</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     不正企業情報登録システム・ネガティブ情報検索サービス<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     連絡窓口、要件定義、デザイン、コーディング、フロント・バックエンド、データベース設計・管理、ロゴ制作、画像制作、全てを担当<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     ipoの企業様より自社アピールのため、不正企業を管理側で登録、且つユーザー側がデータを検索できるサイトを作成したいとのご希望がありました。<br />
                     当初はワードプレスにて作成する予定でしたが、登録内容の種類と機能面から考えて、phpのみで作成することにしています。<br />
                     企業情報の登録に加え、更新情報の登録、管理者登録、用語登録が企画書にあったため、dbのテーブルは計5つ作成。<br />
                     管理画面ログイン機能、年度別検索機能など色々な機能を作成するにあたって、phpのさまざまな関数を利用しました。</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">AI開発会社のサービス開発受託とサイト作成</h3>
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/ai.png'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2021年9月～2024年10月(3年1か月)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：php7.4、BootStrap5</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     カメラの映像を解析して、人物の転倒を検知するサービスの受託<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     デザイン、コーディング、フロント、ロゴ制作、画像制作<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     カメラの映像を解析して、人物の転倒を検知するサービスをCTOが構築し、<br />
                     そのサービス管理画面と、サービスサイトのデザインしました。<br />
                     サイト内にsvgのアニメーションを作成し、サービスをわかりやすく紹介しています。<br /><br />
                     デザイン性とsvgアニメーションの制作の多くの時間を充てています。</p></div>


            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">雑貨卸売業者様のサイト作成</h3>
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/box.png'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2023年4月～2024年10月(1年6か月)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：CS-Cart(php8.1、smarty、BootStrap5)</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     卸業者様向けモール型ecサービス構築<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     デザイン、コーディング、フロント・バックエンド、データベース管理<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     大元となる販売サイトに、出品者となる企業様がサプライヤーとして店舗出店および出品できるサイトです。<br />
                     開発期間との兼ね合いから、既存の有料サービスであるCS-Cartを購入して作成しました。<br />
                     CS-Cartにデザインを加え、さらにポーシャペイを支払い方法として利用できるようにカスタマイズしています。</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">薬局様のコーポレートサイトリニューアル</h3>
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/pills.png'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2024年8月～2024年10月(2か月)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：WordPress(php8.3、BootStrap5)、MySQL</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     コーポレートサイトデザインおよび制作<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     コーディング、フロント・バックエンド、データベース管理<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     クライアントには既存のコーポレートサイトをお持ちでしたが、サーバーのphpバージョンアップに伴いサイト表示ができなくなってしまったため、サイトの再生と同時にリニューアルを担当しました<br />
                     WordPressでの制作をご希望だったので、最新のWordPressで作成し、今後WordPressをアップデートしても利用できるよう、最新のphpにて作成しました。<br />
                     また、記事だけでなく、バナーの更新もクライアント様側での更新を希望されていたため、独自の関数をfunctionに追加し、管理画面より更新できるようにカスタマイズしています</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">産業廃棄物処理業に関するWebアプリ作成</h3>
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/tempura.png'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2020年8月～2020年12月(5ヶ月)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：php8.1、laravel、PostgreSQL、BootStrap5、Tailwind CSS、JavaScript、TypeScript、AmazonLinux、PostgreSQL</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     産業廃棄物の物流〜リサイクルまでのトレーサビリティシステム構築と作成<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     SE兼PG兼テックリードとして、バックエンド連絡窓口、要件定義、技術選定、デザイン、フロントコーディング、コードレビュー、データベース設計・管理<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     テックリードとして技術選定から要件定義、コーディングまでを担当しました。<br />エンジニアやデザイナーを束ね、各業務を適切に指示し、産業廃棄物の廃棄〜回収〜リサイクルまでを管理するシステムを構築しました。<br />複雑なDBの構築と因果関係の整合性を調節するスキルを身につけました。</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">衣料品卸売企業様の請求をポーシャペイ請求に変換するサイト</h3>
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/portiapay.svg'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2021年10月～2024年10月(3年)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：php8.1、laravel、PostgreSQL、BootStrap5、React、AmazonLinux、PostgreSQL</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     請求書csvファイルをポーシャペイ変換するサービス<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     連絡窓口、要件定義、デザイン、コーディング、フロント・バックエンド、データベース設計・管理<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     クライアントである衣料品卸売企業様から、請求業務を全てポーシャペイに委託したいというお話をいただいたので、<br />
                     クライアント様が独自に発行している請求書csvを取り込み、ポーシャペイの請求に変換するサイトを作成しました<br />
                     専用の管理画面からログインし、クライアント側でcsvファイルをアップロードするシステムになっています</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">衣料品卸売企業様のコーポレートサイト、環境リプレイス</h3>
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/alb.png'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2024年1月～2024年10月(9か月)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：php8.3、EC2(rsync,cron,postfix)、Route53、Amazon Load Balancer</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     コーポレートサイト、php5環境サポート終了に伴うphp8環境へのリプレイス<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     連絡窓口、バックエンド周り、サーバー移行と選定(ec2,route53)、メールの送信サーバー設定(postfix)<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     既存のコーポレートサイトがphp5環境だったため、php8環境にしたいというご要望がありました。<br />
                     通常であればサーバー移行のみで済むのですが、現在更新に利用しているブログシステムを引き続き利用したい、なおかつサーバーを2つ以上動かして負荷分散をさせたいとのこと。<br />
                     まず、ブログシステムは1つのサーバーのみしか更新できないため、rsyncにて2つのサーバーの情報を同期させるようにしました。<br />
                     また、ブログシステムはftpの速度が重要だったため、東京リージョンに設定。<br />
                     他、微調整なども行い、本件でALBに関する知識を身につけました。</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">週刊組み立て雑誌出版社様のPM業務</h3>
                     <Image
                       className="mb-3 border mx-auto aspect-square object-contain p-4"
                       src={'/about/dis.png'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2022年11月～2024年9月(1年9か月)</p>
                        <p className="text-slate-900 dark:text-white">構築環境：Java、Spring Boot、AWS</p>
                     </div>
                     <p><span className="font-semibold">【概要】</span><br />
                     雑誌販売サービス老朽化に伴いecサービスにてサイト改修<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     連絡窓口、PM業務、資料作成<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     現行のecサイトが十年以上前に作成されたサイトのため、<br />
                     ec内部の各サービスのサポート期間も、既に大幅にオーバーしている状態となり、サイトを一新したいとのご依頼。<br />
                     すでに利用する予定のシステムは、他社様のecシステムに決定していたため、ecシステム企業様とクライアント様の仲介を担当しました。<br />
                     スケジュールをガントチャートで管理し、ローンチ期日から逆算して日数を計算、提示された新機能の要不要などの監査業務。<br />
                     また、現ec商品の流通経路を把握し、作業工程を理解した上でテスト項目の作成など、ローンチまでの全ての業務仲介を担当しています。</p></div>

            <hr className="my-5" />

                  <div><h3 className="text-2xl font-semibold mb-2 mt-3 text-center">社員管理サイト「ララワークス（仮名）」</h3>
                     <Image
                       className="mb-3 mx-auto aspect-square object-contain"
                       src={'/about/login.svg'}
                       alt="success"
                       width={180}
                       height={180}
                       priority
                     />
                     <div className="mb-3 bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                        <p className="text-slate-900 dark:text-white">期間：2024年1月～2024年10月(9か月)</p>
                        <p className="font-semibold">https://laravel.ksk318.me/(現在停止中){LinkMark('https://laravel.ksk318.me/')}</p>
                        <p className="text-slate-900 dark:text-white">構築環境：php8.3.7、laravel10.41.0、v11.5.2-MariaDB、React、tailwind CSS</p>
                     </div>
                     <p className="mb-3"><span className="font-semibold">【概要】</span><br />
                     社員管理サービス開発、運用による社内改善<br /><br />
                     <span className="font-semibold">【担当業務】</span><br />
                     デザイン、要件定義、コーディング、フロント・バックエンド、データベース設計、管理、基本全て<br /><br />
                     <span className="font-semibold">【ポイント】</span><br />
                     シフト提出や社員管理をするためのデータベースがなかったため、社内業務改善のために作成しました。<br />
                     開発期間はおよそ半年で、デザインからdb設計、要件定義、コーディングに至るまで全てを担当しています。<br />
                     詳細につきましては以下リンク先に制作課程のレポートとテストサイトを公開しています。</p>
                     <Link className="flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 text-center" href="/php#laravel" target="_blank">ララワークス制作について<i className="ms-2 ph ph-caret-right"></i></Link></div>
         </div>

         <p className="leading-7 mb-3"><span className="font-semibold">◾️活かせる経験・知識・技術</span></p>
         <ul className="mb-5 list-disc ms-5">
            <li>クライアントへのヒアリングから要件定義、開発から保守までの経験</li>
            <li>主にPHPによるアプリやサービスの開発、コーディング技法</li>
            <li>他社案件のPM業務経験</li>
            <li>BtoB決済に関する知識</li>
         </ul>

         <p className="leading-7 mb-5"><span className="font-semibold">◾️自己PR</span></p>
         <p className="leading-7 mb-3">私は前職でヒアリング、デザイン、サーバー選定、保守、開発から運用に至るまで、システム全般の業務を任せていただき、最終的には他社案件のPM業務にも携わらせていただくこともできました。<br /><br />
         全ての実務から学んだ最も重要な事項は、フロントとバックエンド、両面からの対策と試行です。<br /><br />
         以前、フロントデザインに全く拘らずにサービスをローンチしようとされていたクライアント様には、UIの重要性をお伝えし、実装の際にご好評をいただいたケースがあります。<br />
         また、自身の開発したecサービス内にて実際に発生した、悪質なユーザーによる不正クレジットカード支払いの経験より、対策ロジックを組み、デフォルトの機能として組み込むことで、未然に防ぐことができました。<br /><br />
         フロントとバックエンドの両者を経験して知識を吸収することで、どちらの方が重要か、ではなく、どちらも重要であることを顧客にアピールでき、全体的な品質の向上にも貢献しています。</p>

      </section>

      <section id="skills" className="w-full">
         <h2 className="text-2xl font-semibold mb-2 text-center">skills</h2>
         <p className="leading-7 mb-3 text-center text-gray-700/75 mb-3 dark:text-slate-400">現時点で所持している私のテクニカルスキルです<br />
         年数が明示されていないものは、リンク先にて学習ログを残しています</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">
            <p className="leading-7 text-center font-semibold mb-3"><i className="ph ph-app-window me-2"></i>フロントエンド</p>

            <div className="relative border-t border-l mb-4 grid overflow-hidden w-fit">
               <table className="text-sm whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                  <tbody>
                    {Datas.front.map((item, j) => (
                      <React.Fragment key={`group-front-${j}`}>
                        {item.progs.map((prog, i) => (
                          <tr className="odd:bg-white border-b dark:border-gray-700" key={`front-${j}-${i}`}>
                            {i === 0 && (
                              <td className="font-bold px-4 py-2 align-top bg-slate-100 border-e font-[family-name:var(--font-geist-mono)]" rowSpan={item.progs.length}>
                                {item.category}
                              </td>
                            )}
                            <td className="px-4 py-2 border-e font-[family-name:var(--font-geist-mono)]">{prog.name}</td>
                            <td className="px-4 py-2 border-e">{prog.years}</td>
                            <td className="px-4 py-2 border-e">{prog.note}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
            </div>

            <hr className="my-5" />

            <p className="leading-7 text-center font-semibold mb-3"><i className="ph ph-terminal-window me-2"></i>バックエンド</p>

            <div className="relative border-t border-l mb-4 grid overflow-hidden w-fit">
               <table className="text-sm whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                  <tbody>
                    {Datas.backend.map((item, j) => (
                      <React.Fragment key={`group-backend$-${j}`}>
                        {item.progs.map((prog, i) => (
                          <tr className="odd:bg-white border-b dark:border-gray-700" key={`backend-${j}-${i}`}>
                            {i === 0 && (
                              <td className="font-bold px-4 py-2 align-top bg-slate-100 border-e font-[family-name:var(--font-geist-mono)]" rowSpan={item.progs.length}>
                                {item.category}
                              </td>
                            )}
                            <td className="px-4 py-2 border-e font-[family-name:var(--font-geist-mono)]">{prog.name}</td>
                            <td className="px-4 py-2 border-e">{prog.years}{ prog.log && (<Link className="break-all bg-sky-100 dark:text-black dark:bg-white/[.8] px-1 py-0.5 font-semibold rounded text-sky-500 text-xs" href={prog.log} target="_blank">ログ</Link>) }</td>
                            <td className="px-4 py-2 border-e">{prog.note}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
            </div>

            <hr className="my-5" />

            <p className="leading-7 text-center font-semibold mb-3"><i className="ph ph-database me-2"></i>データベース</p>

            <div className="relative border-t border-l mb-4 grid overflow-hidden w-fit">
               <table className="text-sm whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                  <tbody>
                    {Datas.database.map((item, j) => (
                      <React.Fragment key={`group-database-${j}`}>
                        {item.progs.map((prog, i) => (
                          <tr className="odd:bg-white border-b dark:border-gray-700" key={`database-${j}-${i}`}>
                            {i === 0 && (
                              <td className="font-bold px-4 py-2 align-top bg-slate-100 border-e font-[family-name:var(--font-geist-mono)]" rowSpan={item.progs.length}>
                                {item.category}
                              </td>
                            )}
                            <td className="px-4 py-2 border-e font-[family-name:var(--font-geist-mono)]">{prog.name}</td>
                            <td className="px-4 py-2 border-e">{prog.years}</td>
                            <td className="px-4 py-2 border-e">{prog.note}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
            </div>

            <hr className="my-5" />

            <p className="leading-7 text-center font-semibold mb-3"><i className="ph ph-hard-drives me-2"></i>サーバーエンド</p>

            <div className="relative border-t border-l mb-4 grid overflow-hidden w-fit">
               <table className="text-sm whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
                  <tbody>
                    {Datas.server.map((item, j) => (
                      <React.Fragment key={`group-server-${j}`}>
                        {item.progs.map((prog, i) => (
                          <tr className="odd:bg-white border-b dark:border-gray-700" key={`server-${j}-${i}`}>
                            {i === 0 && (
                              <td className="font-bold px-4 py-2 align-top bg-slate-100 border-e font-[family-name:var(--font-geist-mono)]" rowSpan={item.progs.length}>
                                {item.category}
                              </td>
                            )}
                            <td className="px-4 py-2 border-e font-[family-name:var(--font-geist-mono)]">{prog.name}</td>
                            <td className="px-4 py-2 border-e">{prog.years}</td>
                            <td className="px-4 py-2 border-e">{prog.note}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
            </div>

         </div>

      </section>


      </main>
    </div>
    );
}