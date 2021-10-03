import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { DonationQuestions } from '@Sections/about-donation/donation-questions';
import { Facts } from '@Sections/about-donation/facts';
import { HowToPrepare } from '@Sections/about-donation/how-to-prepare';
import { OpportunitiesDonors } from '@Sections/about-donation/opportunities-donors';
import { StyledLink } from '@UI/links';
import { Paragraph, Title } from '@UI/typography';
import Link from 'next/link';

const AboutDonationPage = () => {
  return (
    <HeaderContentFooter>
      <Container>
        <Title margin='0 0 40px 0' bold>
          О донорстве
        </Title>
        <Paragraph margin='0'>
          Если Вы открыли эту страницу значит у Вас возникло желание сдать донорскую кровь.
        </Paragraph>
        <Paragraph>
          Нам нравятся Ваши мотивы! И мы расскажем Вам более подробно о донорстве и всё, что с ним связано.
        </Paragraph>
        <Paragraph>
          В жизни случаются ситуации, когда в силу чрезвычайных обстоятельств, болезни, травмы, кровотечения
          человек нуждается в крови или ее компонентах.
        </Paragraph>
        <Paragraph>
          Люди, по своей природе, социальны и должны помогать друг другу. Поэтому в таких случаях на помощь
          приходит донор, донор крови.
        </Paragraph>
        <Paragraph>
          <b>Донор</b> - это человек, который добровольно сдает свою кровь или ее компоненты с целью
          использования для оказания жизненно необходимой помощи.
        </Paragraph>
        <Paragraph>
          По Закону&nbsp;
          <Link href='/#'>
            <StyledLink underline>«О донорстве»</StyledLink>
          </Link>
          , донорская кровь является национальным достоянием государства.
        </Paragraph>
        <Paragraph>
          Мы собрали для Вас самую важную информацию о том, как стать ответственным донором, интересные факты,
          льготы и привилегии для доноров и многое другое.
        </Paragraph>
        <HowToPrepare />
        <OpportunitiesDonors />
        <Facts />
        <DonationQuestions />
      </Container>
    </HeaderContentFooter>
  );
};

export default AboutDonationPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
