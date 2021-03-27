import styled from 'styled-components';

export const StyeledButton = styled.button`
  margin-right: 25px;
  background-color: transparent;
  border: none;
  height: 24px;
  width: 24px;
  color: ${({ theme }) => theme.colors.lightOrange};
  cursor: pointer;
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;
