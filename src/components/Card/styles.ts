import styled from 'styled-components/native';

export const Container = styled.View`
      align-items: center;
      width: 180px;
      height: 250px;
      margin: 0 10px;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

`;
