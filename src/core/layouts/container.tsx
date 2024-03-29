import { FC } from 'react';
import styled from 'styled-components';

type ContainerType = {
  as?: any;
};

export const Container: FC<ContainerType> = ({ children, ...rest }) => (
  <StyledContainer {...rest}>{children}</StyledContainer>
);

export const ContainerFluid: FC<ContainerType> = ({ children, ...rest }) => (
  <StyledContainerFluid {...rest}>{children}</StyledContainerFluid>
);

const StyledContainer = styled.section`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const StyledContainerFluid = styled.section`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 992px) {
    padding: 0 30px;
  }

  @media (min-width: 1200px) {
    padding: 0 80px;
  }
`;
