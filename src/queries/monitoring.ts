import { monitoringUrl } from '@Constants/url';
import { BloodGroup } from '@core/donation';
import { IMonitoring, IMonitoringResponse } from '@core/monitoring';
import { formatDate } from '@Helpers/converters';
import { baseFetch } from '@Services/fetch';

interface ValuesType {
  group: BloodGroup;
  quantity: number;
}

interface MonitoringReturnType {
  values: ValuesType[];
  dateUpdate: string;
  fullname: string;
  _id: string;
}

export const getMonitoringData = async (): Promise<MonitoringReturnType> => {
  const { data } = await baseFetch<IMonitoring[]>({ url: monitoringUrl });

  const [{ values, dateUpdate, fullname, _id }] = data;

  const valuesPrepare = Object.entries(values).map(
    ([group, quantity]) =>
      <ValuesType>{
        group,
        quantity,
      },
  );

  const dateUpdatePrepare = formatDate(new Date(dateUpdate));

  return { values: valuesPrepare, dateUpdate: dateUpdatePrepare, fullname, _id };
};

export const updateMonitoringData = async (payload: IMonitoringResponse) => {
  await baseFetch({
    url: monitoringUrl,
    method: 'PUT',
    data: payload,
  });
};
