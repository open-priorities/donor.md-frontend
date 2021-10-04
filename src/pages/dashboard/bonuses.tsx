import { PartnerOfferCard } from '@Components/partner-offer-card';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getBonuses } from '@Queries/bonuses';
import { useTypedQuery } from '@Queries/utils';
import { Loading } from '@UI/loading';
import { Paragraph, TitleWithArrow } from '@UI/typography';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

const Bonuses = () => {
  const { data, isLoading } = useTypedQuery('bonuses', getBonuses);

  return (
    <DashboardGrid>
      <TitleWithArrow>Бонусы</TitleWithArrow>
      <TextWrapper>
        <Paragraph bold margin='0 0 0 0'>
          Партнерские предложения для доноров
        </Paragraph>
        <Paragraph>Выбирайте актуальные для себя предложение от наших партнеров.</Paragraph>
      </TextWrapper>
      {isLoading && <Loading />}
      {data && data.map((item) => <PartnerOfferCard key={item._id} {...item} />)}
    </DashboardGrid>
  );
};

export default Bonuses;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('bonuses', getBonuses);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;
