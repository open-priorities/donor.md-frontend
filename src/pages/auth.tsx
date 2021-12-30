import { RecoveryForm } from '@Components/forms/auth/recovery';
import { SignInForm } from '@Components/forms/auth/sign-in';
import { SignUpForm } from '@Components/forms/auth/sign-up';
import { Logo } from '@Components/logo';
import { Container } from '@Layouts/container';
import { TitleWithArrow } from '@UI/typography';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';

const AuthPage = () => {
  const { query } = useRouter();

  return (
    <Main>
      <Container>
        <Logo />
        <Content>
          <TitleWithArrow className='h2' margin='0 0 35px 0' align='center'>
            Кабинет Донора
          </TitleWithArrow>
          <FormWrapper>
            {!('state' in query) && <SignInForm />}
            {query?.state === 'signUp' && <SignUpForm />}
            {query?.state === 'recovery' && <RecoveryForm />}
          </FormWrapper>
        </Content>
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

const Content = styled.div``;
