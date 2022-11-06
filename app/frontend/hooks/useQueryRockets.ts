import { request } from 'graphql-request'
import { useQuery } from 'react-query'
import { Rocket } from '../types/types'
import { GET_ROCKETS } from '../queries/queries'

interface RocketsRes {
  rockets: Rocket[]
}

/**
 * GraphQLサーバーのフェッチに使用する関数オブジェクト
 * @returns Rocket[] SpaceXロケットに関する情報を格納した配列オブジェクト
 */
export const fetchRockets = async () => {
  const { rockets: data } = await request<RocketsRes>(
    'https://api.spacex.land/graphql/',
    GET_ROCKETS
  )
  return data
}

/**
 * rocketsのデータフェッチに使用するカスタムフック
 * @returns Rocket[] SpaceXロケットに関する情報を格納した配列オブジェクト
 */
export const useQueryRockets = () => {
  return useQuery<Rocket[], Error>({
    // keyを指定する。これにより、キャッシュに格納されたフェッチしたデータから値を参照できる
    queryKey: 'rockets',
    // フェッチを行う関数オブジェクトを指定する
    queryFn: fetchRockets,
    // サーバーからフェッチしキャッシュに格納したデータをどのくらいの時間最新であるかを指定する
    staleTime: 3000,
    // ブラウザからフォーカスが外れるたびにフェッチを行うか指定する
    refetchOnWindowFocus: false,
    // 指定した秒間間隔でサーバーからデータをフェッチするか指定する
    // refetchInterval: 3000,
  })
}
