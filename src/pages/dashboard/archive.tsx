import { DashboardButtonsLinks } from '@Components/dashboard-buttons-links';
import { Pagination } from '@Components/pagination';
import { formatDate } from '@Helpers/converters';
import { prepareError } from '@Helpers/prepare-error';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getDonation } from '@Queries/donations';
import { getUser } from '@Queries/user';
import { useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { ColorsType } from '@UI/theme';
import { Paragraph, TitleWithArrow } from '@UI/typography';
import { Table as AntTable } from 'antd';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled, { css } from 'styled-components';

type StatusType = 'success' | 'pending' | 'reject';

type valueType = { text: string; color: keyof ColorsType };

const statusMapper: Record<StatusType, valueType> = {
  success: { text: 'Проверено', color: 'green' },
  pending: { text: 'На проверке.. ', color: 'textMuted' },
  reject: { text: 'Отклонено', color: 'red' },
};

const columns = [
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    render: (date: Date) => (
      <div>
        <Paragraph as='span' margin='0 0 0 0'>
          {formatDate(date)}
        </Paragraph>
      </div>
    ),
  },
  {
    title: 'Центр Крови',
    dataIndex: 'transfusionCenterId',
    key: 'transfusionCenterId',
    render: (address: string) => <Paragraph margin='0 0 0 0'>{address}</Paragraph>,
  },
  { title: 'Номер донации', dataIndex: 'donationNumber', key: 'donationNumber' },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (status: StatusType) => {
      const currentStatus = statusMapper[status];

      return (
        <div>
          <Paragraph as='span' margin='0 15px 0 0' color={currentStatus.color}>
            {currentStatus?.text}
          </Paragraph>
        </div>
      );
    },
  },
  {
    title: 'Справка',
    dataIndex: 'referenceImg',
    key: 'referenceImg',
    render: (href: string) => (
      <StyledLink href={href} download>
        Скачать
      </StyledLink>
    ),
  },
];

const DonationsArchive = () => {
  const { data, isLoading, isError, error } = useTypedQuery('donations', getDonation);

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      {isError && <Alert message={prepareError(error)} />}
      <Table columns={columns} dataSource={data} pagination={false} loading={isLoading} />
      <Pagination
        margin='50px 0 0 0'
        onChange={(...args) => {
          // eslint-disable-next-line no-console
          console.log(args);
        }}
      />
    </DashboardGrid>
  );
};

export default DonationsArchive;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('user', getUser);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const StyledLink = styled.a(
  ({ theme }) => css`
    text-decoration: underline;
    color: ${theme.colors.textDark};
  `,
);

const Table = styled(AntTable)<any>(
  ({ theme }) => css`
    && .ant-table,
    && .ant-table-thead > tr > th {
      background: transparent;
      text-align: center;
    }

    && .ant-table-thead > tr > th {
      background: ${theme.colors.white};
      border-top: 1px solid ${theme.colors.redDiluted};
      border-bottom: 1px solid ${theme.colors.redDiluted};
    }

    && .ant-table-thead > tr > th:first-child {
      border-left: 1px solid ${theme.colors.redDiluted};
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }

    && .ant-table-thead > tr > th:last-child {
      border-right: 1px solid ${theme.colors.redDiluted};
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    && .ant-table-tbody > tr > td {
      text-align: center;
      border-bottom: 1px solid ${theme.colors.redDiluted};
    }

    && .ant-table-tbody > tr.ant-table-row:hover > td {
      background: #fafafa8a;
    }

    @media (min-width: 992px) {
      & .ant-table {
        overflow-x: hidden;
      }
    }
  `,
);
