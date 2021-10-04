import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { StoriesHead } from '@Sections/top-donors/stories-head';
import { TableDonors } from '@Sections/top-donors/table-donors';

const TopDonorsPage = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <StoriesHead />
        <TableDonors />
      </Container>
    </HeaderContentFooter>
  );
};

export default TopDonorsPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
