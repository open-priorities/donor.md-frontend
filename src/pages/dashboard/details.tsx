import { DashboardButtonsLinks } from '@Components/dashboard-buttons-links';
import { DetailsForm } from '@Components/forms/dashboard/details';
import { UserStoryForm } from '@Components/forms/dashboard/user-story';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getUser } from '@Queries/user';
import { TitleWithArrow } from '@UI/typography';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

const MyDetails = () => {
  return (
    <DashboardGrid>
      <TitleWithArrow>Мои данные</TitleWithArrow>
      <DashboardButtonsLinks />
      <DetailsForm />
      <UserStoryForm />
    </DashboardGrid>
  );
};

export default MyDetails;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('user', getUser);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
