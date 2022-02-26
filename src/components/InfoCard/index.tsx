import { User } from '../../screens/Profile'
import { Content, InfoText } from './styles'
interface InfoCardProps {
  user: User
}
export default function InfoCard({ user }: InfoCardProps) {
  return (
    <Content>
      <InfoText>{`Nome: ${user.name}`}</InfoText>
      <InfoText>{`@${user.username}`}</InfoText>
      <InfoText>{`Email: ${user.email}`}</InfoText>
      <InfoText>{`Endereço: ${user.address.street}`}</InfoText>
      <InfoText>{`Cidade:${user.address.city}`}</InfoText>
      <InfoText>{`Telefone:${user.phone}`}</InfoText>
      <InfoText>{`Website:${user.website}`}</InfoText>
      <InfoText>{`Empresa que trabalha:${user.company.name}`}</InfoText>
    </Content>
  )
}
