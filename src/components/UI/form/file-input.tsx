import { hexToRGB } from '@Helpers/converters';
import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

export const FileInput = forwardRef<HTMLInputElement, IInputProps>(
  ({ size = 'md', onChange, ...rest }, ref) => {
    const [len, setLen] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setLen(e.target.files?.length ?? 0);
      onChange?.(e);
    };

    return (
      <InputLabel>
        <HiddenInput onChange={handleChange} ref={ref} type='file' {...rest} />
        <FakeInput size={size}>
          <span>{len ? `Выбран ${len} файл` : 'Выбрать файл'}</span> &#128391;
        </FakeInput>
      </InputLabel>
    );
  },
);

const HiddenInput = styled.input(
  () => css`
    display: none;
  `,
);

const InputLabel = styled.label`
  cursor: pointer;
`;

const FakeInput = styled.span<{ size: 'sm' | 'md' | 'lg' }>(
  ({ size, theme }) => css`
    display: flex;
    justify-content: space-between;
    border: 1px solid ${hexToRGB(theme.colors.danger, 0.5)};
    background: ${theme.colors.white};
    padding: ${theme.sizes.controls[size].padding};
    font-size: ${theme.sizes.controls[size].fontSize};
    border-radius: ${theme.sizes.controls[size].radius};
  `,
);
