import type { Metadata } from "next";

import Link  from 'next/link'
import Image from "next/image"
import Github from '@components/github';
import Syhl from '@components/code';
import Syntax from '@components/syntax';
import Caution from '@components/caution';
import DevProdTable from '@components/dev_prod_table';

export const metadata: Metadata = {
   title: 'RESTful API｜'+process.env.SITE_TITLE,
   description: "について",
};

function WrapCode(txt: string) {
   return <code className="break-all bg-black/[.1] dark:text-black dark:bg-white/[.8] px-1 py-0.5 rounded font-semibold">{txt}</code>;
}

export default function Home() {

   return (
    <div className="sm:col-span-3 col-span-4 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] z-10 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-start w-full">

         <div className="flex items-center justify-center w-full mb-3" >
            <div className="flex items-center">
            <Image
                 className="mx-auto"
                 src={'/go/echo.png'}
                 alt="success"
                 width={60}
                 height={38}
                 priority
               />
            <p className="text-3xl pe-3 ps-2">x</p>
            <Image
                 className="mx-auto"
                 src={'/go/api.png'}
                 alt="api"
                 width={50}
                 height={50}
                 priority
               />
            </div>
         </div>

         <h1 className="flex items-end"><span className="font-semibold text-3xl mr-2">Echo x API</span><span className="text-md">仕様書</span></h1>
         <p className="leading-7">{WrapCode('README.md')}にも記述がありますが、以下よりapiの解説をします<br />
            各自ローカルのターミナルなどでコマンド実行することで動作確認ができます</p>
         <Caution text="api.ksk318.meでのapi稼働は<span class='font-semibold'>9:00〜18:00</span>です" />

      <section id="register" className="w-full">
         <p className="font-semibold mb-3 sticky top-0 text-center bg-gray-50/90 p-2 z-40 w-full">登録API</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">

            <p className="font-semibold mb-3">ユーザー登録</p>
            <DevProdTable
               id='u_register'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/auth/user/register'],
                  ['UbuntuServer 24.04.2 LTS','/auth/user/register']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('ユーザー登録')}が可能です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/user_register.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">管理者登録</p>
            <DevProdTable
               id='admin_register'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/auth/admin/register'],
                  ['UbuntuServer 24.04.2 LTS','/auth/admin/register']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('管理者登録')}が可能です<br />
            メールアドレス宛に管理者を有効にするためのパスコードが送信されるので、<br />
            必ず{WrapCode('受信できるアドレス')}で実行してください</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/admin_register.sh'
            />
            <p className="leading-7 mb-3">成功すると以下のメールが届きます</p>
            <Image
              className="mb-3 shadow-lg"
              src={'/go/mail.png'}
              alt="success"
              width={500}
              height={38}
              priority
            />
            <p className="leading-7 mb-3">簡易的にするため、管理者がapiを実行するような指示がメールに記載されています<br />
            apiを実行すると管理者が有効となり、ログイン可能になります</p>

         </div>
      </section>

      <section id="login" className="w-full">
         <p className="font-semibold mb-3 sticky top-0 text-center bg-gray-50/90 p-2 z-40 w-full">ログインAPI</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">

            

            <p className="font-semibold mb-3">ユーザーログイン</p>
            <DevProdTable
               id='user_login'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/auth/user/login'],
                  ['UbuntuServer 24.04.2 LTS','/auth/user/login']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('ユーザーログイン')}が可能です<br />
            ログインと同時に{WrapCode('json')}でログインセッションが戻り値で取得できます</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/user_login.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">管理者ログイン</p>
            <DevProdTable
               id='admin_login'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/auth/admin/login'],
                  ['UbuntuServer 24.04.2 LTS','/auth/admin/login']
               ]}
            />
            <p className="leading-7 mb-3">以下を実行すると{WrapCode('管理者ログイン')}が可能です<br />
            ログインと同時に{WrapCode('json')}でログインセッションが戻り値で取得できます</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/admin_login.sh'
            />

         </div>
      </section>

      <section id="profile" className="w-full">
         <p className="font-semibold mb-3 sticky top-0 text-center bg-gray-50/90 p-2 z-40 w-full">プロフィールAPI</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">

            <p className="font-semibold mb-3">ユーザープロフィール</p>
            <DevProdTable
               id='u_prof'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/user/profiles'],
                  ['UbuntuServer 24.04.2 LTS','/authed/user/profiles']
               ]}
            />
            <p className="leading-7 mb-3">以下を実行すると{WrapCode('ユーザー自身のプロフィール取得')}が可能です<br />
            {WrapCode('ユーザーログイン時のセッション')}が必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/user_profile.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">管理者プロフィール</p>
            <DevProdTable
               id='u_prof'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/admin/profiles'],
                  ['UbuntuServer 24.04.2 LTS','/authed/admin/profiles']
               ]}
            />
            <p className="leading-7 mb-3">以下を実行すると{WrapCode('管理者自身のプロフィール取得')}が可能です<br />
            {WrapCode('ユーザーログイン時のセッション')}が必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/admin_profile.sh'
            />

         </div>
      </section>

      <section id="posts" className="w-full">
         <p className="font-semibold mb-3 sticky top-0 text-center bg-gray-50/90 p-2 z-40 w-full">ポストAPI</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">

            <p className="font-semibold mb-3">登録</p>
            <DevProdTable
               id='post_post'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/user/posts'],
                  ['UbuntuServer 24.04.2 LTS','/auth/user/posts']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('ポストの投稿')}が可能です<br />
            {WrapCode('ユーザーログイン時のセッション')}が必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/post.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">更新</p>
            <DevProdTable
               id='post_put'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/user/posts/:id'],
                  ['UbuntuServer 24.04.2 LTS','/auth/user/posts/:id']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('ポストの更新')}が可能です<br />
            {WrapCode('ユーザーログイン時のセッション')}が必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/post_put.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">一覧取得</p>
            <DevProdTable
               id='post_get'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/user/posts'],
                  ['UbuntuServer 24.04.2 LTS','/auth/user/posts']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('自身が作成したポスト')}の一覧取得が可能です<br />
            ユーザーログイン時のセッションが必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/post_get.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">個別取得</p>
            <DevProdTable
               id='post_get_id'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/user/posts/:id'],
                  ['UbuntuServer 24.04.2 LTS','/auth/user/posts/:id']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('自身が作成したポストの個別取得')}が可能です<br />
            {WrapCode('ユーザーログイン時のセッション')}が必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/post_get_byid.sh'
            />

         </div>
      </section>

      <section id="users" className="w-full">
         <p className="font-semibold mb-3 sticky top-0 text-center bg-gray-50/90 p-2 z-40 w-full">ユーザー取得API</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">

            <p className="font-semibold mb-3">一覧取得</p>
            <DevProdTable
               id='user_get'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/admin/users'],
                  ['UbuntuServer 24.04.2 LTS','/users']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('ユーザー一覧の取得')}が可能です<br />
            取得には{WrapCode('管理者ログイン時のセッションID')}が必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/user_list.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">個別取得</p>
            <DevProdTable
               id='user_get_id'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/admin/users/:id'],
                  ['UbuntuServer 24.04.2 LTS','/users/:id']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('ユーザー情報をidから取得')}が可能です<br />
            取得には{WrapCode('管理者ログイン時のセッションID')}が必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/user.sh'
            />

         </div>
      </section>

      <section id="sessions" className="w-full">
         <p className="font-semibold mb-3 sticky top-0 text-center bg-gray-50/90 p-2 z-40 w-full">セッション取得API</p>

         <div className="p-5 border-l-2 pe-0 sm:pe-5">

            <p className="font-semibold mb-3">一覧取得</p>
            <DevProdTable
               id='session'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/admin/users/sessions'],
                  ['UbuntuServer 24.04.2 LTS','/users/sessions']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('ユーザーセッションの一覧取得')}が可能です<br />
            取得には{WrapCode('管理者ログイン時のセッションID')}が必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/session.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">個別取得</p>
            <DevProdTable
               id='session_id'
               names={[
                  '環境名(環境)',
                  '確認用URL'
               ]}
               envs={[
                  ['local(Mac OS)','/authed/admin/users/sessions/:id'],
                  ['UbuntuServer 24.04.2 LTS','/users/sessions/:id']
               ]}
            />

            <p className="leading-7 mb-3">以下を実行すると{WrapCode('セッションIDをユーザーidから取得')}可能です<br />
            取得には{WrapCode('管理者ログイン時のセッションID')}が必要です</p>
            <Syntax
                lang='sh'
                path='go/echo/sh/session_byid.sh'
            />

            <hr className="my-5" />

            <p className="font-semibold mb-3">echoまとめ</p>
            <p className="leading-7 mb-3">ginと同じくMVCをゼロから作成する手間はありますが、ginよりもさらにわかりやすく、<br />
            カスタマイズしやすいフレームワークというイメージでした<br /><br />
            apiを作成するのに高速且つ軽量なフレームワークということ、さらにecho用のモジュールも豊富に取り揃えてあるためカスタマイズのし甲斐があるフレームワークでした<br />
            さらにこのapiを用いてiOSのアプリをswiftで作成したため、こちらも併せてご覧ください</p>
         </div>

      </section>

      </main>
    </div>
  );
}
