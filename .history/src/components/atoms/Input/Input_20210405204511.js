import styled from 'styled-components';

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 8px;
  border-radius: 20px;
  width: 80%;
  max-height: 100px;
  background-color: ${({ theme }) => theme.colors.lightOrange};
`;
