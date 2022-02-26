import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const ContainerScroll = styled.ScrollView`
  margin-top: -20px;
`
