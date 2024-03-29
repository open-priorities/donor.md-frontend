import { Accordion } from '@UI/accordion';
import { ListWithBorder } from '@UI/list-with-border';
import { Paragraph, Title } from '@UI/typography';
import styled from 'styled-components';

const list = [
  {
    left: '<b>Прием алкоголя, включая слабоалкогольных напитков, вина и пиво</b>',
    right: '48 часов',
  },
  {
    left: '<b>Татуировки/пирсинг/иглоукалывание</b>',
    right: '12 месяцев после завершения процедуры',
  },
  {
    left: '<b>Прием антибиотиков</b>',
    right: '2 недели после окончания приема',
  },
  {
    left: '<b>Удаление зуба</b>',
    right: '10 дней',
  },
  {
    left: '<b>Лечение зубов</b>',
    right: 'через 24 часа после лечения, если нет осложнений',
  },
  {
    left: '<b>Ангина, грипп, ОРВИ, гнойный отит\n</b>',
    right: 'через 1 месяц после выздоровления',
  },
  {
    left: '<b>Насморк (только)</b>',
    right: 'через 7 дней после выздоровления',
  },
  {
    left: '<b>Аллергические заболевания в стадии обострения </b>',
    right: 'через 2 месяца после купирования острого периода',
  },
  {
    left: '<b>Менструация</b>',
    right: '5 дней со дня окончания',
  },
  {
    left: '<b>Беременность/Роды/Кормление грудью </b>',
    right: `на весь период беременности </br>
      через 12 месяце после родов </br>
      через 3 месяца после окончания лактации </br>
`,
  },
  {
    left: '<b>COVID19, пневмония</b>',
    right: 'через 6 месяцев после окончания лечения',
  },
];

const medicalProcedures = [
  {
    left: `<b>Переливания крови, ее компонентов</b>
        (исключение составляют</br> ожоговые реконвалесценты и лица, иммунизированные к</br>
         резус-фактору)`,
    right: 'через 6 месяцев',
  },
  {
    left: `<b>Оперативные вмешательства, в т. ч. аборты и другие </br> гинекологические операции</b>
        (необходимо предоставление<br/> медицинской справки или выписки из истории болезни о характере</br>
         и дате операции)`,
    right: 'через 6 месяцев со дня операции',
  },
  {
    left: '<b>Лазерная операция на глаза</b>',
    right: 'через месяц после операции',
  },
  {
    left: '<b>Эндоскопические исследования</b>',
    right: 'через 6 месяцев',
  },
  {
    left: '<b>Удаление родимого пятная, папиллом</b>',
    right: 'через 2 недели после операции',
  },
  {
    left: `<b>Переломы костей:</b></br>
        Домашнее лечение</br>
        Больничное лечение`,
    right: `через 2 месяца после выздоровления </br>
          через 4 месяца после выздоровления
`,
  },
];

const diseases = [
  {
    left: `<b>Малярия в анамнезе</b> при отсутствии симптомов и отрицательных </br>
        результатах иммунологических тестов`,
    right: 'через 3 года',
  },
  {
    left: `<b>Гепатит А (болезнь боткина)</b> в анамнезе при отсутствии симптомов и
        </br> отрицательных результатах иммунологических тестов`,
    right: 'через 2 года после выздоровления',
  },
  {
    left: `<b>Брюшной тиф</b> после выздоровления и полного клинического </br>
        обследования при отсутствии выраженных функциональных расстройств`,
    right: 'через 1 год',
  },
  {
    left: `<b>Острые и хронические воспалительные процессы в стадии обострения</b></br>
        независимо от локализаци`,
    right: 'через 1 месяц после выздоровления',
  },
  {
    left: '<b>Обострение язвы желудка и (или) двенадцатиперстной кишки</b>',
    right: 'через 1 месяц после выздоровления',
  },
  {
    left: '<b>Болезни почек, не указанные в абсолютных ограничениях</b>',
    right: 'через 1 год после купирования острого</br> синдрома',
  },
  {
    left: '<b>Вегето-сосудистая дистония</b>',
    right: 'через 1 месяц',
  },
  {
    left: '<b>Бронхит</b>',
    right: 'через 3 недели после выздоровления',
  },
  {
    left: '<b>Воспаление легких</b>',
    right: 'через 6 месяцев после выздоровления',
  },
  {
    left: '<b>Боррелиоз</b>',
    right: 'через 1 месяц после выздоровления\n',
  },
  {
    left: '<b>Клещевой энцефалит</b>',
    right: 'через 1 год после выздоровления',
  },
  {
    left: '<b>Герпес Зостер</b>',
    right: 'через 2 недели',
  },
  {
    left: '<b>Простой герпес</b>',
    right: '10 дней со дня окончания',
  },
  {
    left: '<b>Микоплазменная инфекция, генитальный герпис, гонорея, хламидиоз,</br> Кондилома,уреплазма</b>',
    right: 'через 4 месяца после лечения острой стадии',
  },
  {
    left: '<b>Токсоплазмоз</b>',
    right: 'через 6 месяцев после окончания лечения',
  },
  {
    left: '<b>Легкая диарея</b>',
    right: 'через 1 неделю',
  },
];

const medicines = [
  {
    left: '<b>Антидепрессанты</b>',
    right: 'через 1 неделю после окончания курса',
  },
  {
    left: '<b>Противогрибковые препараты</b>',
    right: 'через 1 месяц после окончания курса приема',
  },
  {
    left: '<b>Гормональные препараты</b>',
    right: 'через 1 месяц после окончания курса приема',
  },
  {
    left: '<b>Салициалаты, аналгетики</b>',
    right: 'через  5 дней после приема',
  },
  {
    left: '<b>Обезболивающие обычные</b>',
    right: 'сдача разрешена',
  },
  {
    left: '<b>Противозачаточные средства</b>',
    right: 'сдача разрешена',
  },
  {
    left: `<b>Легкие успокоительные, снотворные, </br>слабительное</b>`,
    right: 'сдача разрешена',
  },
];

const vaccinations = [
  {
    left: `Прививки от гепатит В, столбняк, дифтерия, коклюш, паратиф, холера, грипп,</br>
        полиомиелит), анатоксинами</br>
        Вакцинирование против рака шейки матки</br>
        Вакцинирование от ВПЧ`,
    right: 'через 10 дней',
  },
  {
    left: `Прививка живыми вакцинами (бруцеллез, чума, туляремия, вакцина БЦЖ,</br>
        оспа, краснуха, полиомиелит перорально), введение противостолбнячной</br>
        сыворотки`,
    right: `через 1 месяц (при отсутствии выраженных</br>
        воспалительных явлений на месте инъекции)`,
  },
  {
    left: 'Введение иммуноглобулина против гепатита В и клещевого энцефалита\n',
    right: 'через 12 месяцев',
  },
  {
    left: 'Прививка вакциной против бешенства',
    right: `через 14 дней (если животное было с </br> 
        бешенством, то через 12 месяцев)`,
  },
];

const blood = [
  {
    left: '<b>Диспротеинемия</b>',
    right: 'через 1 месяц',
  },
  {
    left: '<b>Отклонение от норм показателей донорской крови\n</b>',
    right: `не раньше чем, через 1 месяц после</br> получения результатов и достижения</br> допустимых пределов
`,
  },
];

const contacts = [
  {
    left: '<b>Контакты с лицом с носителем гепатита B, С, ВИЧ </b>(бытовой, половой)',
    right: 'через 12 месяцев при негативном</br> результате анализа на маркеры',
  },
  {
    left: '<b>Контакты с лицом с носителем гепатита А, E</b>',
    right: `через 3 месяца при негативном результате</br> анализа на маркеры`,
  },
];

const businessTrips = [
  {
    left: `<b>Пребывание в загранкомандировках</b> длительностью более 2 месяцев `,
    right: 'через 6 месяцев после возвращения',
  },
  {
    left: `<b>Пребывание в эндемичных по малярии странах тропического и</br>
        субтропического климата</b> (Азия, Африка, Южная и Центральная Америка)</br>
        <b>более 3 месяцев</b>`,
    right: 'через 3 года  после возвращения',
  },
];

export const TemporaryFaq = () => {
  const prepareList = (payload: typeof list) =>
    payload.map(({ left, right }, index) => (
      <SpaceBetweenItem key={index.toString()}>
        <Paragraph as='span' margin='0' align='left' dangerouslySetInnerHTML={{ __html: left }} />
        <Paragraph as='span' margin='0' align='right' dangerouslySetInnerHTML={{ __html: right }} />
      </SpaceBetweenItem>
    ));

  return (
    <section>
      <Accordion ghost defaultActiveKey={1}>
        <Accordion.Panel
          key={1}
          header={
            <Title as='h3' bold>
              Распространенные временные противопоказания
            </Title>
          }
        >
          <ListWithBorder list={prepareList(list)} />
        </Accordion.Panel>
        <Accordion.Panel
          key={2}
          header={
            <Title as='h3' bold>
              Медицинские процедуры
            </Title>
          }
        >
          <ListWithBorder list={prepareList(medicalProcedures)} />
        </Accordion.Panel>
        <Accordion.Panel
          key={3}
          header={
            <Title as='h3' bold>
              Заболевания
            </Title>
          }
        >
          <ListWithBorder list={prepareList(diseases)} />
        </Accordion.Panel>
        <Accordion.Panel
          key={4}
          header={
            <Title as='h3' bold>
              Лекарства
            </Title>
          }
        >
          <ListWithBorder list={prepareList(medicines)} />
        </Accordion.Panel>
        <Accordion.Panel
          key={5}
          header={
            <Title as='h3' bold>
              Прививки
            </Title>
          }
        >
          <ListWithBorder list={prepareList(vaccinations)} />
        </Accordion.Panel>
        <Accordion.Panel
          key={6}
          header={
            <Title as='h3' bold>
              Изменение биохимических показателей крови
            </Title>
          }
        >
          <ListWithBorder list={prepareList(blood)} />
        </Accordion.Panel>
        <Accordion.Panel
          key={7}
          header={
            <Title as='h3' bold>
              Контакты
            </Title>
          }
        >
          <ListWithBorder list={prepareList(contacts)} />
        </Accordion.Panel>
        <Accordion.Panel
          key={8}
          header={
            <Title as='h3' bold>
              Командировки
            </Title>
          }
        >
          <ListWithBorder list={prepareList(businessTrips)} />
        </Accordion.Panel>
      </Accordion>
    </section>
  );
};

const SpaceBetweenItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
