import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.ALERT};
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin: 16px;
  font-size: 26px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_UBUNTU};
`
