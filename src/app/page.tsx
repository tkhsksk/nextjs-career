import type { Metadata } from "next";
import Link  from 'next/link'
import Image from "next/image";
import Datas from "../../data.json"
import React from 'react';

export const metadata: Metadata = {
  title: 'home｜'+process.env.SITE_TITLE,
  description: "について",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-svh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-slate-800">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:hidden"
          src="/logo.svg"
          alt="logo"
          width={300}
          height={38}
          priority
        />

        <Image
          className="hidden dark:inline"
          src="/logo-dark.svg"
          alt="logo"
          width={300}
          height={38}
          priority
        />

        <table className="text-sm whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
          <tbody>
            {Datas.menus.map((item, j) => (
              <React.Fragment key={`group-menus-${j}`}>
                <tr className="odd:bg-white">
                  <td className="px-4 py-1 font-[family-name:var(--font-geist-mono)] dark:bg-slate-800">
                    <Link 
                      href={{ pathname: item.title }}
                      data-name={item.detail} // この属性はLinkには直接使えません
                      passHref
                    >
                      <span className="text-blue-600 hover:underline cursor-pointer">
                        {item.title}
                      </span>
                    </Link>
                  </td>
                  <td className="px-4 py-1 dark:bg-slate-800">{item.detail}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>

      </main>
    </div>
  );
}
