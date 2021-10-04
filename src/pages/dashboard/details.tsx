import { DashboardButtonsLinks } from '@Components/dashboard-buttons-links';
import { DetailsForm } from '@Components/forms/dashboard/details';
import { UserStoryForm } from '@Components/forms/dashboard/user-story';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { TitleWithArrow } from '@UI/typography';

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
  return {
    props: {},
  };
};
