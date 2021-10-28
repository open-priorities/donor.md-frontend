import { userAtom } from '@Store/atoms/user-atom';
import { Avatar } from '@UI/avatar';
import { Paragraph, Title } from '@UI/typography';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export const DonorInfo = () => {
  const user = useRecoilValue(userAtom);

  if (!user) return null;

  const [name, lastname] = user.fullname.split(' ');

  return (
    <Layer>
      <Avatar src={user.avatar} fullname={user.fullname} />
      <UserText>
        <Title as='h3' margin='0' bold>
          {name}
        </Title>
        <Title as='h3' margin='0' bold>
          {lastname}
        </Title>
        {user.honorary && (
          <Paragraph size='1.375rem' margin='0'>
            почетный донор
          </Paragraph>
        )}
      </UserText>
    </Layer>
  );
};

const Layer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 20px;
`;
