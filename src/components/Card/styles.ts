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
  padding: 15px;
`
export const Info = styled.View`
  margin-left: 18px;
`
export const TitleContent = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 26px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_ARCHIVO};
`
export const ActorText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 10px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_ARCHIVO};
  font-style: italic;
  text-align: right;
  margin-right: 18px;
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
  margin-top: 14px;
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
export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
`
export const DetailsButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECOND};
  font-size: 15px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_ARCHIVO};
  margin-left: 10px;
`
