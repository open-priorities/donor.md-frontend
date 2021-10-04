import { RecipientCard } from '@Components/recipient-card';
import { prepareError } from '@Helpers/prepare-error';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getRecipients } from '@Queries/recipients';
import { useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Loading } from '@UI/loading';
import { Paragraph, TitleWithArrow } from '@UI/typography';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

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
