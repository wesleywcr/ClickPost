import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Button from '../../components/Button'
import { Footer } from '../../components/Card/styles'
import { Input } from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import { propsStack } from '../../routes/Models'
import api from '../../services/api'
import { Container, ContainerInput, Title } from './styles'

export default function EditPost() {
  const { navigate } = useNavigation<propsStack>()

  function handleNavigateToFeed() {
    navigate('Feed')
  }

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')

  async function EditPost() {
    await api.put('posts', {
      title: title,
      body: description
    })
    setTitle('')
    setDescription('')
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
