import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg';

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${({ theme }) => theme.colors.darkBlue};
`;
