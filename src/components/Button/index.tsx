import { TouchableOpacityProps } from 'react-native'
import { Container, Label } from './styles'

type NewButtonProps = TouchableOpacityProps & {
  label: string
  onPress(): void
}

export default function Button({ label, onPress }: NewButtonProps) {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  )
}
