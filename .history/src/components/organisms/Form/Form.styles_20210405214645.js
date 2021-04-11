import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 378px;
  height: 438px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 0px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const StyledHeader = styled.div`
  margin: 60px 0 30px;
  width: 70%;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  border-bottom: solid 3px ${({ theme }) => theme.colors.lighBlue};
`;
