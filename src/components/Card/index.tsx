import { Alert, Text } from 'react-native'
import {
  BodyContent,
  Container,
  ContainerButtons,
  Button,
  Footer,
  Info,
  Profile,
  TitleContent,
  DetailsButton,
  DetailsButtonText,
  ActorText
} from './styles'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../routes/Models'

export interface Post {
  userId: number
  id: number
  title: string
  actor: string
  body: string
}
interface PostProps {
  post: Post
}

export default function Card({ post }: PostProps) {
  const { navigate } = useNavigation<propsStack>()

  function handleNavigateToProfile() {
    navigate('Profile', { PostId: post.id })
  }
  function handleNavigateToEditPost() {
    navigate('Edit', { PostId: post.id })
  }
  async function deletePost() {
    await api.delete(`posts/${post.id}`)
    navigate('Feed')
  }

  function confirmDeletion() {
    Alert.alert('Excluir post', 'Deseja excluir o post ?', [
      {
        text: 'Sim',
        onPress() {
          deletePost()
        }
      },
      {
        text: 'Não'
      }
    ])
  }
  return (
    <Container>
      <Profile>
        <Info>
          <TitleContent>{post.title}</TitleContent>
          <ActorText>{post.actor}</ActorText>
        </Info>
        <BodyContent>{post.body}</BodyContent>
      </Profile>
      <DetailsButton onPress={handleNavigateToProfile}>
        <DetailsButtonText>Informações do usuário</DetailsButtonText>
        <Feather name="arrow-right" size={20} color="#73074d" />
      </DetailsButton>

      <Footer>
        <ContainerButtons>
          <Button onPress={handleNavigateToEditPost}>
            <Text>
              <Feather name="edit" size={30} color="#280540" />
            </Text>
          </Button>

          <Button onPress={confirmDeletion}>
            <Text>
              <Feather name="trash-2" size={30} color="#280540" />
            </Text>
          </Button>
        </ContainerButtons>
      </Footer>
    </Container>
  )
}
