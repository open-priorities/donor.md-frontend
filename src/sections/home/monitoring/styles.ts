import { Paragraph } from '@UI/typography';
import NextImage from 'next/image';
import styled from 'styled-components';

export const BloodList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 30px 0;
  list-style-type: none;

  @media (min-width: 992px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const Image = styled(NextImage)<{ layout: string }>`
  margin-top: -5px;
`;

export const ParagraphJustify = styled(Paragraph)`
  display: flex;
  justify-content: space-between;
`;
