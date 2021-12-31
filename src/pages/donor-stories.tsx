/* eslint no-console:0 */
import { DonorStory } from '@Components/donor-story';
import { Pagination } from '@Components/pagination';
import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { getStories } from '@Queries/stories';
import { useTypedQuery } from '@Queries/utils';
import { Loading } from '@UI/loading';
import { Title } from '@UI/typography';

const DonorStoriesPage = () => {
  const { data, isLoading } = useTypedQuery('stories', getStories);
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title margin='0 0 40px 0' bold>
          Истории доноров
        </Title>
        {isLoading && <Loading />}
        {data?.map((props) => (
          <DonorStory key={props.fullname} {...props} />
        ))}
      </Container>
      <Pagination onChange={(page: number) => console.log(page)} />
    </HeaderContentFooter>
  );
};

export default DonorStoriesPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
