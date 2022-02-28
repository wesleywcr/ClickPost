import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import InfoCard from '../../components/InfoCard'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api'
import { Container, Title } from './styles'

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  phone: number
  website: string
  company: {
    name: string
  }
}
export default function Profile() {
  const route = useRoute()

  const { PostId } = route.params

  const [user, setUser] = useState<User>()
  useEffect(() => {
    api.get(`users/${PostId}`).then(response => {
      setUser(response.data)
    })
  }, [])

  return (
    <Container>
      <PageHeader displaybutton="none" title="Usuário" />
      <Title>Informações</Title>

      <InfoCard user={user} />
    </Container>
  )
}
