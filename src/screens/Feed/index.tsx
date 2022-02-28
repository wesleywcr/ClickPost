import { useNavigation } from '@react-navigation/native'
import { useCallback, useEffect, useState } from 'react'
import { RefreshControl } from 'react-native'

import Card, { Post } from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { propsStack } from '../../routes/Models'

import api from '../../services/api'

import { Container, ContainerScroll } from './styles'

export default function Feed() {
  const navigation = useNavigation<propsStack>()

  const [posts, setPosts] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [load, setLoad] = useState(true)

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  useEffect(() => {
    api.get('posts').then(res => {
      const data = res.data
      setPosts(data)
    })
    navigation.addListener('focus', () => setLoad(!load))
  }, [load, navigation])

  return (
    <Container>
      <PageHeader title="Lista de Posts" displaybutton="flex" />

      <ContainerScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {posts.map((post: Post) => {
          return <Card key={post.id} post={post} />
        })}
      </ContainerScroll>
    </Container>
  )
}
