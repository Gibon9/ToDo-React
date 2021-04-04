import styled from 'styled-components';

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 8px;
  border-radius: 20px;
  width: 200px;
  max-height: 100px;
  background-color: ${({ theme }) => theme.colors.lightOrange};
`;
