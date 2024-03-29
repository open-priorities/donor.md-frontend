import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

import { RecipientCard } from '../../components/recipient-card';
import { Alert } from '../../components/UI/alert';
import { Loading } from '../../components/UI/loading';
import { Paragraph, TitleWithArrow } from '../../components/UI/typography';
import { prepareError } from '../../core/helpers/prepare-data';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';
import { getRecipients } from '../../queries/recipients';
import { useTypedQuery } from '../../queries/utils';

const Recipients = () => {
  const { data, isLoading, isError, error } = useTypedQuery('recipients', getRecipients);

  return (
    <DashboardGrid>
      <TitleWithArrow>Реципиенты</TitleWithArrow>
      <TextWrapper>
        <Paragraph bold margin='0 0 0 0'>
          Рекомендованные реципиенты
        </Paragraph>
      </TextWrapper>
      {isLoading && <Loading />}
      {isError && <Alert>{prepareError(error)}</Alert>}
      {data?.map((item) => (
        <RecipientCard key={item._id} recipient={item.recipient} />
      ))}
    </DashboardGrid>
  );
};

export default Recipients;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('recipients', getRecipients);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;
