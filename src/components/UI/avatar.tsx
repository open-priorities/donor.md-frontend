import { getFirstLetters } from '@Helpers/get-first-letters';
import { getAvatar, updateAvatar } from '@Queries/avatar';
import { useTypedMutation } from '@Queries/utils';
import { Avatar as AntAvatar, Badge } from 'antd';
import { ChangeEvent, memo } from 'react';
import styled, { css } from 'styled-components';

type AvatarType = {
  fullname: string;
  src: string | null;
  size?: number;
  count?: number;
};

export const Avatar = memo(({ fullname, src, size = 100, count = 0 }: AvatarType) => {
  const { mutate: loadAvatar, data: avatarUrl } = useTypedMutation('avatar', getAvatar);
  const { mutateAsync, data: url } = useTypedMutation('avatar', (payload: FormData) => updateAvatar(payload));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    mutateAsync(formData).then(() => loadAvatar());
  };

  return (
    <label>
      <Badge count={count}>
        {src ? (
          <AvatarWrapper size={size} src={avatarUrl || url || src} />
        ) : (
          <AvatarWrapper size={size}>{getFirstLetters(fullname)}</AvatarWrapper>
        )}
      </Badge>
      <HideInput type='file' onChange={handleChange} />
    </label>
  );
});

const AvatarWrapper = styled(AntAvatar)(
  ({ theme }) => css`
    position: relative;
    font-size: 2rem !important;
    font-weight: bold;
    color: ${theme.colors.white};
    background: transparent;
    border: 2px solid ${theme.colors.white};
    transition: all 0.3s ease-in;

    &:hover {
      cursor: pointer;
      &:before {
        content: '\\2026';
        font-size: 32px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
      }
    }
  `,
);

const HideInput = styled.input`
  display: none;
`;
