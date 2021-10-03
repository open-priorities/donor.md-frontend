import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { AbsoluteSectionArticle } from '@Sections/contraindications-blood-donation/absolute-section-article';
import { AbsoluteSectionFaq } from '@Sections/contraindications-blood-donation/absolute-section-faq';
import { HeadSection } from '@Sections/contraindications-blood-donation/head-section';

const Absolute = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <HeadSection />
        <AbsoluteSectionFaq />
        <AbsoluteSectionArticle />
      </Container>
    </HeaderContentFooter>
  );
};

export default Absolute;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
