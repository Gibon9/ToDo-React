import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.lighBlue};
  font-family: 'Open Sans', sans-serif;
  margin-left: 20px;
`;
