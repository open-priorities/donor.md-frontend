import styled, { css } from 'styled-components';

type ListWithCheckType = { list: string[]; marginBottom?: string };

export const ListWithCheck = ({ list, marginBottom = '0.5rem' }: ListWithCheckType) => (
  <ListWithCheckWrapper>
    {list.map((item) => (
      <ListItem key={item} marginBottom={marginBottom} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ListWithCheckWrapper>
);

const ListWithCheckWrapper = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li<{ marginBottom: string }>(
  ({ marginBottom }) => css`
    margin-bottom: ${marginBottom};

    &:before {
      content: '✔';
      display: inline-block;
      font-size: 1.25rem;
      margin-right: 5px;
    }
  `,
);
