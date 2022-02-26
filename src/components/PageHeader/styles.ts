import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  padding: 40px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`
export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ArrowButton = styled(BorderlessButton)``
export const Logo = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 5px;
  padding-left: 5px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_UBUNTU};
`
export const Title = styled.Text`
  max-width: 155px;
  margin-top: 20px;
  line-height: 30px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_ARCHIVO};
  font-size: 28px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`
