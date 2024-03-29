import { ReviewForm } from '@Components/forms/dashboard/review';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getUser } from '@Queries/user';
import { Divider } from '@UI/dilider';
import { Paragraph, Title, TitleWithArrow } from '@UI/typography';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

const ReviewsAdd = () => {
  return (
    <DashboardGrid>
      <TitleWithArrow margin='0 0 50px 0'>Добавить отзыв</TitleWithArrow>
      <Paragraph>
        На этой странице вы можете оставить отзыв, написать вопрос и оценить качество работы службы
        переливания крови.
      </Paragraph>
      <Divider orientation='left'>
        <Title as='h5' bold>
          Оценка качества
        </Title>
      </Divider>
      <ReviewForm />
    </DashboardGrid>
  );
};

export default ReviewsAdd;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('user', getUser);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
