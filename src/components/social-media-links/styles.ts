import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  cursor: pointer;
  margin-right: 15px;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
