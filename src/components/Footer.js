import styled from 'styled-components';
import AuthContext from 'contexts/AuthContext';
import { useContext } from 'react';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const LogoutBtn = styled.button`
  font-size: 14px;
  font-weight: 300;
  margin: 2rem 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = ({ numOfTodos }) => {
  const { handleFBLogout } = useContext(AuthContext);
  return (
    <Container>
      <p>剩餘項目數：{numOfTodos}</p>
      <LogoutBtn className="btn-reset" onClick={handleFBLogout}>
        登出
      </LogoutBtn>
    </Container>
  );
};

export default Footer;
