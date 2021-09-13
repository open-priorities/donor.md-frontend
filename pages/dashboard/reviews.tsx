import { ReviewForm } from '../../src/components/forms/dashboard/review';
import { Divider, Paragraph, Title, TitleWithArrow } from '../../src/components/UI';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';

const ReviewsAdd = () => {
  return (
    <DashboardGrid>
      <TitleWithArrow margin='50px'>Добавить отзыв</TitleWithArrow>
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
  return {
    props: {},
  };
};
