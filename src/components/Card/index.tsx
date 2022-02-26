import { Text } from 'react-native'
import {
  BodyContent,
  Container,
  ContainerButtons,
  Button,
  Footer,
  Info,
  Profile,
  TitleContent
} from './styles'
import { Feather } from '@expo/vector-icons'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}
interface PostProps {
  post: Post
}
export default function Card({ post }: PostProps) {
  return (
    <Container>
      <Profile>
        <Info>
          <TitleContent>{post.title}</TitleContent>
        </Info>
        <BodyContent>{post.body}</BodyContent>
        <Footer>
          <ContainerButtons>
            <Button>
              <Text>
                <Feather name="edit" size={30} color="#280540" />
              </Text>
            </Button>

            <Button>
              <Text>
                <Feather name="trash-2" size={30} color="#280540" />
              </Text>
            </Button>
          </ContainerButtons>
        </Footer>
      </Profile>
    </Container>
  )
}
