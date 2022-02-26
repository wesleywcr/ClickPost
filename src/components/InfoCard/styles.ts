import styled from 'styled-components/native'

export const Content = styled.View`
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin-bottom: 16px;
  border-radius: 10px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const InfoText = styled.Text`
  margin: 20px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONTS.REGULAR_UBUNTU};
`
