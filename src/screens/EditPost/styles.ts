import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`
export const ContainerInput = styled.View`
  width: 100%;
  height: 310px;
  justify-content: flex-end;
  padding: 0 24px 16px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 26px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_UBUNTU};
`
export const Footer = styled.View`
  align-items: center;
  justify-content: center;
`
