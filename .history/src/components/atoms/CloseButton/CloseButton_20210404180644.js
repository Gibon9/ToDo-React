import styled from 'styled-components';

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
`;
