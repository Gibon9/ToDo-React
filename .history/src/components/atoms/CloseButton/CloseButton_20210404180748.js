import styled from 'styled-components';

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
  border: none;
  height: 27px;
  width: 27px;
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;
