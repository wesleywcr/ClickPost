import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  height: 60px;
  width: 52%;
  border-radius: 10px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
`
export const Label = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.BOLD_ARCHIVO};
  color: ${({ theme }) => theme.COLORS.TEXT};
`
