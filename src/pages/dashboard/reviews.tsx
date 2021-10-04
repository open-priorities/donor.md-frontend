import { ReviewForm } from '@Components/forms/dashboard/review';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { Divider } from '@UI/other';
import { Paragraph, Title, TitleWithArrow } from '@UI/typography';

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
