import styled from 'styled-components/native'

export const Container = styled.TextInput`
  width: 100%;
  height: 54px;
  margin-top: 10px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  color: ${({ theme }) => theme.COLORS.TEXT};
`
