import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import ImgLanding from '../../assets/images/Landing.png'
import {
  Container,
  Header,
  ButtonsContainer,
  Description,
  FooterText,
  Title
} from './styles'
import { propsStack } from '../../routes/Models'

export default function Home() {
  const navigation = useNavigation<propsStack>()

  function handleNavigateToFeedPage() {
    navigation.navigate('Feed')
  }
  return (
    <Container>
      <Header source={ImgLanding} />
      <Title>ClickPosts</Title>
      <Description>Seja bem-vindo, em nossa plataforma</Description>
      <ButtonsContainer>
        <Button label="Entrar" onPress={handleNavigateToFeedPage} />
      </ButtonsContainer>
      <FooterText>{`Mais de 5000 compras realizadas`}</FooterText>
    </Container>
  )
}
