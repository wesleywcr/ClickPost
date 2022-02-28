import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  justify-content: center;
  padding: 50px;
`
export const Header = styled.Image`
  width: 100%;
  height: 250px;
`
export const Title = styled.Text`
  text-align: center;
  color: #fff;
  line-height: 40px;
  margin-top: 20px;
  font-size: 45px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_UBUNTU};
`
export const Description = styled.Text`
  line-height: 30px;
  margin-top: 80px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR_ARCHIVO};
  color: ${({ theme }) => theme.COLORS.TEXT};
  max-width: 280px;
`

export const ButtonsContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const FooterText = styled.Text`
  max-width: 140px;
  margin-top: 44px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR_UBUNTU};
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`
