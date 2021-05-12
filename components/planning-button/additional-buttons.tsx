import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  onClick: () => void;
}

export const AdditionalButtons: FC<IProps> = ({ children, onClick, ...rest }) => (
  <Button type='button' onClick={onClick} {...rest}>
    {children}
  </Button>
);

const Button = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.danger};
  border-radius: 25px;
  color: white;
  border: none;
  font-size: 1em;
  width: max-content;
  padding: 15px 20px;
`;
