import Link from 'next/dist/client/link'
import Layout from '../components/Layout'
import { useQueryClient } from 'react-query'
import { Rocket } from '../types/types'
import RocketItem from '../components/RocketItem'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

/**
 * キャッシュのオブジェクトを読み取り表示する関数コンポーネント
 */
const ReadCache = () => {
  // queryClientを通して条件付けのフェッチやキャッシュの更新を行う
  const queryClient = useQueryClient()
  // キーを引数にしてキャッシュにアクセスする
  const data = queryClient.getQueryData<Rocket[]>('rockets')

  return (
    <Layout title="read cache">
      {/* タイトル表示 */}
      <p className="my-5 text-blue-500 text-xl font-bold">
        Read out cache data
      </p>
      <ul>
        {/* ロケットオブジェクト表示 */}
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </ul>
      {/* ランディングページへのリンク */}
      <Link href="/" passHref>
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleLeftIcon className="h-5 w-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}

export default ReadCache
