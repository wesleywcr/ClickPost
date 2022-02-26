import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'

import { Container, ContainerScroll } from './styles'

export default function Feed() {
  return (
    <Container>
      <PageHeader title="Lista de produtos" />

      <ContainerScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerScroll>
    </Container>
  )
}
