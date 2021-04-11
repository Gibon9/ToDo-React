import styled from 'styled-components';

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.colors.lighBlue};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 8px;
  border-radius: 10px;
  width: 100%;
  max-height: 100px;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  border: ${({ theme }) => theme.colors.darkOrange} solid 1px;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 10px 15px;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
