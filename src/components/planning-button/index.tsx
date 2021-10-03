import { userAtom } from '@Store/atoms/user-atom';
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { AdditionalButtons } from './additional-buttons';

export const PlanningButton = () => {
  const [visible, setVisible] = useState(false);
  const user = useRecoilValue(userAtom);

  if (!user) return null;

  return (
    <>
      <ButtonGroup visible={visible}>
        <ButtonRed onClick={() => null}>Запланировать донацию</ButtonRed>
        <ButtonRed onClick={() => null}>Добавить донацию</ButtonRed>
      </ButtonGroup>
      <ButtonWrapper onClick={() => setVisible((s) => !s)}>
        <Image src='/images/icons/planning-button.svg' layout='fill' />
      </ButtonWrapper>
    </>
  );
};

const ButtonGroup = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 60px;
  width: 100px;
  right: ${({ visible }) => (visible ? '220px' : '-200px')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: all 0.2s ease-in;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    display: none;
  }
`;

const ButtonRed = styled(AdditionalButtons)`
  margin-bottom: 20px;
  box-shadow: 0 15px 20px -10px rgba(255, 67, 75, 0.5);
`;

const ButtonWrapper = styled.button`
  cursor: pointer;
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 100px;
  height: 130px;
  background: transparent;
  border: none;
  outline: none;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    display: none;
  }
`;
