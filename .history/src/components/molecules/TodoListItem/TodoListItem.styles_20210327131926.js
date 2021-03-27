import styled from 'styled-components';
const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  max-width: 414px;
  height: 59px;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lighBlue};
  color: ${({ theme }) => theme.colors.lightOrange};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledParagraph = styled.p`
  margin-left: 35px;
  max-width: 75%;
`;
