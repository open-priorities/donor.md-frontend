import React from 'react';
import Link from 'next/link';
import { column1, column2, column3 } from './mock';
import { Container } from '../../../layouts/container';
import { StyledLink, Title } from '../../UI';
import {
  StyledFooter,
  Grid,
  TitleBrand,
  ParagraphSlogan,
  ColumnList,
  ColumnListItem,
} from './styles';

const Footer: React.FC = (): JSX.Element => (
  <StyledFooter>
    <Container>
      <Grid>
        <div>
          <TitleBrand bold size='1.5rem' margin='15px'>
            donor.md
          </TitleBrand>
          <ParagraphSlogan size='.9rem' margin='15px'>
            Проект созданный с концепцией «Люди помогают людям» для формирования стабильной базы
            крови восполняемой регулярными донорами.
          </ParagraphSlogan>
        </div>
        <div>
          <Title as='h4' margin='15px'>
            О донорстве
          </Title>
          <ColumnList>
            {column1.map((item) => (
              <ColumnListItem key={item.id}>
                <Link href={item.href} passHref>
                  <StyledLink color='textDark'>{item.text}</StyledLink>
                </Link>
              </ColumnListItem>
            ))}
          </ColumnList>
        </div>
        <div>
          <Title as='h4' margin='15px'>
            О нас
          </Title>
          <ColumnList>
            {column2.map((item) => (
              <ColumnListItem key={item.id}>
                <Link href={item.href} passHref>
                  <StyledLink color='textDark'>{item.text}</StyledLink>
                </Link>
              </ColumnListItem>
            ))}
          </ColumnList>
        </div>
        <div>
          <Title as='h4' margin='15px'>
            Сотрудничество
          </Title>
          <ColumnList>
            {column3.map((item) => (
              <ColumnListItem key={item.id}>
                <Link href={item.href} passHref>
                  <StyledLink color='textDark'>{item.text}</StyledLink>
                </Link>
              </ColumnListItem>
            ))}
          </ColumnList>
        </div>
      </Grid>
    </Container>
  </StyledFooter>
);

export default Footer;
