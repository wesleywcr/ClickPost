import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { Post } from '../../components/Card'
import { Footer } from '../../components/Card/styles'
import { Input } from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import { propsStack } from '../../routes/Models'
import api from '../../services/api'

import { Container, ContainerInput, Title } from './styles'

export default function EditPost(post: Post) {
  const { navigate } = useNavigation<propsStack>()

  const route = useRoute()
  const { PostId } = route.params

  function handleNavigateToFeed() {
    navigate('Feed')
  }

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    api.get(`posts/${PostId}`).then(response => {
      const post = response.data
      setTitle(post.title)
      setDescription(post.body)
      setName(post.actor)
    })
  }, [post.title, post.body, post.actor])

  async function EditPost() {
    await api.put(`posts/${PostId}`, {
      title: title,
      body: description,
      actor: name,
      id: PostId,
      userId: PostId
    })
    setTitle('')
    setDescription('')
    setName('')
    handleNavigateToFeed()
  }
  return (
    <Container>
      <PageHeader title="Editar postagem" displaybutton="none" />
      <ContainerInput>
        <Title>Titulo do Post:</Title>
        <Input
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder="Título"
          placeholderTextColor="#963cfe"
        />
        <Title>Conteúdo do Post:</Title>
        <Input
          value={description}
          onChangeText={text => setDescription(text)}
          placeholder="Conteúdo"
          placeholderTextColor="#963cfe"
        />
        <Title>Nome de usuário:</Title>
        <Input
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Nome"
          placeholderTextColor="#963cfe"
        />
      </ContainerInput>
      <Footer>
        <Button label="Editar Post" onPress={EditPost} />
      </Footer>
    </Container>
  )
}
