import styled from 'styled-components';

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 8px;
  border-radius: 20px;
  width: 100%;
  max-height: 100px;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  border: ${({ theme }) => theme.colors.darkOrange} solid 1px;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 10px 15px;
`;
