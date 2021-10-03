import styled, { css } from 'styled-components';

type NumberedListType = { list: string[]; marginBottom?: string };

export const NumberedList = ({ list, marginBottom = '0.5rem' }: NumberedListType) => (
  <NumberedListWrapper>
    {list.map((item) => (
      <ListItem key={item} marginBottom={marginBottom} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </NumberedListWrapper>
);

const NumberedListWrapper = styled.ol`
  counter-reset: count;
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li<{ marginBottom: string }>(
  ({ marginBottom }) => css`
    font-size: 1.125rem;
    margin-bottom: ${marginBottom};

    &:before {
      counter-increment: count;
      content: counter(count) '.';
      font-weight: bold;
      display: inline-block;
      margin-right: 5px;
    }
  `,
);
