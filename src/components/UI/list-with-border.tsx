import styled, { css } from 'styled-components';

type ListWithBorderType = { list: JSX.Element[] };

export const ListWithBorder = ({ list }: ListWithBorderType) => (
  <ListWithBorderWrapper>
    {list.map((item) => (
      <ListItem key={item.key}>{item}</ListItem>
    ))}
  </ListWithBorderWrapper>
);

const ListWithBorderWrapper = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li(
  ({ theme }) => css`
    border-top: 1px solid ${theme.colors.redDiluted};
    font-size: 1.125rem;
    padding: 15px 0;

    &:last-child {
      border-bottom: 1px solid ${theme.colors.redDiluted};
    }
  `,
);
