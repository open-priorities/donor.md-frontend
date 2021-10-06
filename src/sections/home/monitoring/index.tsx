import { getMonitoringData } from '@Queries/monitoring';
import { useTypedQuery } from '@Queries/utils';
import { Loading } from '@UI/loading';
import { Title } from '@UI/typography';

import { Section } from '../utils';
import { BloodItem } from './blood-item';
import { BloodList, ParagraphJustify } from './styles';

export const Monitoring = () => {
  const { data, isLoading } = useTypedQuery('monitoring', getMonitoringData);

  return (
    <Section id='monitoring'>
      <Title as='h2' bold>
        Мониторинг запасов
      </Title>
      {isLoading && <Loading />}

      {data && (
        <>
          <BloodList>
            {data.values.map((item) => (
              <BloodItem key={item.group} {...item} />
            ))}
          </BloodList>
          <ParagraphJustify align='left' color='textMuted'>
            <span>Данные представлены отделением переливания крови г. Тирасполь</span>
            <span>По состоянию на: {data.dateUpdate}</span>
          </ParagraphJustify>
        </>
      )}
    </Section>
  );
};
