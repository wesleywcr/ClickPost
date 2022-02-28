import { User } from '../../screens/Profile'
import { Content, InfoText } from './styles'
interface InfoCardProps {
  user: User | undefined
}
export default function InfoCard({ user }: InfoCardProps) {
  return (
    <Content>
      <InfoText>{`Nome: ${
        user ? user?.name : ' informações não encontradas'
      }`}</InfoText>
      <InfoText>{`@${
        user ? user?.username : ' informações não encontradas'
      }`}</InfoText>
      <InfoText>{`Email: ${
        user ? user?.email : ' informações não encontradas'
      }`}</InfoText>
      <InfoText>{`Endereço: ${
        user ? user?.address.street : ' informações não encontradas'
      }`}</InfoText>
      <InfoText>{`Cidade:${
        user ? user?.address.city : ' informações não encontradas'
      }`}</InfoText>
      <InfoText>{`Telefone:${
        user ? user?.phone : ' informações não encontradas'
      }`}</InfoText>
      <InfoText>{`Website:${
        user ? user?.website : ' informações não encontradas'
      }`}</InfoText>
      <InfoText>{`Empresa que trabalha:${
        user ? user?.company.name : ' informações não encontradas'
      }`}</InfoText>
    </Content>
  )
}
