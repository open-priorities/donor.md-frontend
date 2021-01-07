import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import cn from 'classnames';
import style from './style.module.scss';

export declare type KeyType = number | string;
export declare type ButtonsProps = {
  key: KeyType;
  text: string;
};

export declare type OnClickProps = (key: KeyType) => void;
export declare type Props = {
  className?: Array<string> | string;
  buttons: Array<ButtonsProps>;
  handleClick: OnClickProps;
};

const ButtonGroup: React.FC<Props> = ({ className, buttons, handleClick }): JSX.Element => {
  const [buttonId, setButtonId] = useState<KeyType>(0);

  const onClick = (key: KeyType) => {
    if (key === buttonId) return;
    handleClick(key);
    setButtonId(key);
  };

  const [{ key }] = buttons;
  useEffect(() => onClick(key), []);

  return (
    <div className={cn(style.button__group, className)}>
      {buttons.map(({ key, text }: ButtonsProps) => (
        <Button
          key={key}
          shape='round'
          size='large'
          className={cn(`${style.button} btn-outline-danger`, {
            [style.button__active]: buttonId === key,
          })}
          onClick={() => onClick(key)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default React.memo(ButtonGroup);
