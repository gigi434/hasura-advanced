import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactNode, VFC } from 'react'

interface LayoutProps {
  /**
   * ヘッダーとフッターの間に表示するメインコンテンツ
   */
  children: ReactNode
  /**
   * ランディングした際に表示される文字列
   */
  title: string
}

const Layout = ({ children, title = 'Welcome to Next.js' }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className="flex flex-1 flex-col justify-center items-center w-screeen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Layout
