import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { AboutDonation } from '@Sections/home/about-donations';
import { CallToAction } from '@Sections/home/call-to-action';
import { Feedback } from '@Sections/home/feedback';
import { Intro } from '@Sections/home/intro';
import { Monitoring } from '@Sections/home/monitoring';
import { Places } from '@Sections/home/places';
import { Stories } from '@Sections/home/stories';

const HomePage = () => {
  return (
    <HeaderContentFooter>
      <Container as='main'>
        <Intro />
        <Monitoring />
        <Places />
        <AboutDonation />
        <CallToAction />
        <Stories />
        <Feedback />
      </Container>
    </HeaderContentFooter>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
