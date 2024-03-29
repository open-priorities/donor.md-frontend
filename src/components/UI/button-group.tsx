import { IOptions } from '@core/IIterableStruct';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Button } from './button';

type ButtonGroupType = {
  buttons: IOptions[];
  onClick?: (_id: string) => void;
};

export const ButtonGroup = ({ buttons, onClick }: ButtonGroupType) => {
  const [buttonId, setButtonId] = useState('');
  const [{ _id }] = buttons;

  useEffect(() => {
    setButtonId(_id);
    onClick?.(_id);
  }, [_id, onClick]);

  const handleClick = (id: string) => () => {
    setButtonId(id);
    onClick?.(id);
  };

  return (
    <ButtonGroupWrapper>
      {buttons.map(({ _id, text }) => (
        <StyledButton
          key={_id}
          size='lg'
          variant='outline-primary'
          active={buttonId === _id}
          onClick={handleClick(_id)}
        >
          {text}
        </StyledButton>
      ))}
    </ButtonGroupWrapper>
  );
};

const StyledButton = styled(Button)<{ active: boolean }>(
  ({ theme, active }) => css`
    width: 100%;
    color: ${active && theme.colors.white};
    background: ${active && theme.colors.danger};

    @media (min-width: ${theme.media.sm}) {
      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
      }

      &:nth-of-type(2):not(:last-child) {
        border-radius: 0;
        border-right-width: 0;
      }

      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  `,
);

const ButtonGroupWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & ${StyledButton} {
      margin-bottom: 15px;
    }

    @media (min-width: ${theme.media.sm}) {
      flex-direction: row;
      max-height: 62px;
    }
  `,
);
