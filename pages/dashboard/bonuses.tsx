import { useQuery } from 'react-query';
import styled from 'styled-components';

import { PartnerOfferCard } from '../../src/components/partner-offer-card';
import { Paragraph, TitleWithArrow } from '../../src/components/UI';
import { Loading } from '../../src/components/UI/loading';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';
import { getBonuses } from '../../src/queries/dashboard/bonuses';

const Bonuses = () => {
  const { data, isLoading } = useQuery('bonuses', getBonuses);

  return (
    <DashboardGrid>
      <TitleWithArrow>Бонусы</TitleWithArrow>
      <TextWrapper>
        <Paragraph bold margin={false}>
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

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;
