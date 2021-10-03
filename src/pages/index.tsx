import { Footer } from '@Components/common/footer';
import { Header } from '@Components/common/header';
import { Container } from '@Layouts/container';
import { AboutDonation } from '@Sections/home/about-donations';
import { CallToAction } from '@Sections/home/call-to-action';
import { Feedback } from '@Sections/home/feedback';
import { Intro } from '@Sections/home/intro';
import { Monitoring } from '@Sections/home/monitoring';
import { Places } from '@Sections/home/places';
import { Stories } from '@Sections/home/stories';

const HomePage = () => {
  return (
    <>
      <Header />
      <Container as='main'>
        <Intro />
        <Monitoring />
        <Places />
        <AboutDonation />
        <CallToAction />
        <Stories />
        <Feedback />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
