import Layout from '../components/Layout'
import { useQueryRockets } from '../hooks/useQueryRockets'
import RocketItem from '../components/RocketItem'
import Link from 'next/link'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export default function Home() {
  const { status, data } = useQueryRockets()
  if (status === 'loading') return <Layout title="home">{'Loading...'}</Layout>
  if (status === 'error') return <Layout title="home">{'Erro'}</Layout>

  return (
    <Layout title="home">
      <p className="my-5 text-blue-500 text-xl font-bold">
        Fetching by useQuery
      </p>
      <ul>
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </ul>
      {/* キャッシュの値を見るためだけのページ */}
      <Link href="/read-cache" passHref>
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleRightIcon className="h-5 w-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}
