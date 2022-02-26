import { useEffect, useState } from 'react'

import Card, { Post } from '../../components/Card'
import PageHeader from '../../components/PageHeader'

import api from '../../services/api'

import { Container, ContainerScroll } from './styles'

export default function Feed() {
  const [posts, setPosts] = useState([])

  // const [title, setTitle] = useState('')
  // const [body,  setBody] = useState('')

  useEffect(() => {
    api.get('posts').then(res => {
      const data = res.data
      setPosts(data)
    })
  }, [])

  return (
    <Container>
      <PageHeader title="Lista de produtos" displaybutton="flex" />

      <ContainerScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
      >
        {posts.map((post: Post) => {
          return <Card key={post.id} post={post} />
        })}
      </ContainerScroll>
    </Container>
  )
}
