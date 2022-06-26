import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

type Title = {
  title: string;
  children: ReactNode;
};
export const Layout: FC<Title> = ({ title, children }) => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <header className=" flex h-16 w-full items-center justify-around border-b">
        <Link href="/triangle" passHref>
          <div
            className={`my-4 cursor-pointer py-4 px-6 text-2xl hover:bg-gray-100 ${
              router.pathname === "/triangle" && "border-b-2 border-red-500 "
            }`}
          >
            三角形
          </div>
        </Link>
        <Link href="/chart" passHref>
          <div
            className={` cursor-pointer px-6 py-4 text-2xl hover:bg-gray-100 ${
              router.pathname === "/chart" && "border-b-2 border-red-500"
            }`}
          >
            表
          </div>
        </Link>
      </header>
      <main className=" flex h-full w-full px-8 pt-8">{children}</main>
    </div>
  );
};
