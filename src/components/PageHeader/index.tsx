import { Image } from 'react-native'
import { ArrowButton, Container, Logo, Title, TopBar } from './styles'
import backIcon from '../../assets/images/icons/back.png'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../routes/Models'
type PageHeaderProps = {
  title: string
}
export default function PageHeader({ title }: PageHeaderProps) {
  const { navigate } = useNavigation<propsStack>()

  function handleGoBack() {
    navigate('Home')
  }
  return (
    <Container>
      <TopBar>
        <ArrowButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </ArrowButton>
        <Title>{title}</Title>
        <Logo>ClickPost</Logo>
      </TopBar>
    </Container>
  )
}
