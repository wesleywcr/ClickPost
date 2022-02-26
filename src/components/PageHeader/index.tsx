import { Image, Text } from 'react-native'
import { ArrowButton, Button, Container, Title, TopBar } from './styles'
import backIcon from '../../assets/images/icons/back.png'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../routes/Models'
import { Feather } from '@expo/vector-icons'

type PageHeaderProps = {
  title: string
  displaybutton: 'none' | 'flex'
}
export default function PageHeader({ title, displaybutton }: PageHeaderProps) {
  const { navigate, goBack } = useNavigation<propsStack>()

  function handleNavigateToNewPost() {
    navigate('NewPost')
  }

  function handleGoBack() {
    goBack()
  }
  return (
    <Container>
      <TopBar>
        <ArrowButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </ArrowButton>
        <Title>{title}</Title>

        {/* <Logo>ClickPost</Logo> */}

        <Button
          style={{ display: `${displaybutton}` }}
          onPress={handleNavigateToNewPost}
        >
          <Text>
            <Feather name="plus" size={30} color="#280540" />
          </Text>
        </Button>
      </TopBar>
    </Container>
  )
}
