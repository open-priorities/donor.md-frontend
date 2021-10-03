import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { HeadSection } from '@Sections/contraindications-blood-donation/head-section';
import { TemporaryFaq } from '@Sections/contraindications-blood-donation/temporary-faq';
import { Paragraph } from '@UI/typography';

const ContraindicationsBloodDonation = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <HeadSection />
        <TemporaryFaq />
        <Paragraph margin='50px 0 0 0'>
          Если Вы сомневаетесь или не находите ответа на свой вопрос, то непременно проконсультируйтесь с
          медицинским работником Центра крови по телефонам.
        </Paragraph>
      </Container>
    </HeaderContentFooter>
  );
};

export default ContraindicationsBloodDonation;

export const getStaticProps = () => {
  return {
    props: {},
  };
};
