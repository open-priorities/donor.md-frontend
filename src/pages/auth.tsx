import { RecoveryForm } from '@Components/forms/auth/recovery';
import { SignInForm } from '@Components/forms/auth/sign-in';
import { SignUpForm } from '@Components/forms/auth/sign-up';
import { Logo } from '@Components/logo';
import { Container } from '@Layouts/container';
import { TitleWithArrow } from '@UI/typography';
import { useState } from 'react';
import styled from 'styled-components';

const AuthPage = () => {
  const [state, setState] = useState<string>('signIn');

  return (
    <Main>
      <Container>
        <Logo />
        <StyledTitle className='h2' margin='15px' align='center'>
          Кабинет Донора
        </StyledTitle>
        <FormWrapper>
          {state === 'signIn' && <SignInForm onChangeState={setState} />}
          {state === 'signUp' && <SignUpForm onChangeState={setState} />}
          {state === 'recovery' && <RecoveryForm onChangeState={setState} />}
        </FormWrapper>
      </Container>
    </Main>
  );
};

export default AuthPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const Main = styled.main`
  min-height: 100%;
  padding: 20px 0;
  @media (min-width: 992px) {
    background: url('/images/auth.png') no-repeat bottom right;
    background-size: 53vh 31vw;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 15px 25px;
  background: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => `1px solid ${theme.colors.redDiluted}`};
  border-radius: ${({ theme }) => theme.radius};

  @media (min-width: 768px) {
    padding: 30px 50px;
  }
`;

const StyledTitle = styled(TitleWithArrow)`
  padding-top: 20px;
`;
