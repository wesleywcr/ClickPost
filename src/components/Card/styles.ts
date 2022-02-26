import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin-bottom: 16px;
  border-radius: 10px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const Profile = styled.View`
  justify-content: center;
  align-items: center;
  padding: 26px;
`
export const Info = styled.View`
  margin-left: 18px;
`
export const TitleContent = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 26px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_ARCHIVO};
`
export const BodyContent = styled.Text`
  margin: 25px;
  font-size: 14px;
  line-height: 28px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONTS.REGULAR_UBUNTU};
`
export const Footer = styled.View`
  padding: 24px;
  align-items: center;
`
export const ContainerButtons = styled.View`
  flex-direction: row;
  margin-top: 18px;
`
export const Button = styled(RectButton)`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
`
