import styled from 'styled-components';
import AuthContext from 'contexts/AuthContext';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 2rem 0;
`;

const Button = styled.button`
  background: #1877f2;
  color: white;
  min-width: 200px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  padding: 6px 0;
  margin: 2rem 0;

  &:hover {
    background: #385898;
  }
`;

const Login = () => {
  const auth = useContext(AuthContext);

  if (auth.status === 'connected') {
    return <Redirect to="/todos" />;
  }

  return (
    <Container>
      <Title>登入 Todo</Title>
      <Button className="btn-reset" onClick={auth.handleFBLogin}>
        {' '}
        使用 Facebook 登入{' '}
      </Button>
    </Container>
  );
};

export default Login;
