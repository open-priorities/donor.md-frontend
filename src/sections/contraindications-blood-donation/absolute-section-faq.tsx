import { Accordion } from '@UI/accordion';
import { NumberedList } from '@UI/numbered-list';
import { Title } from '@UI/typography';

const absoluteRestrictions = [
  'ВИЧ - инфекция',
  'Гепатит В, С',
  'Сифилис',
  'Злокачественные образования (онкология)',
  'Полное отсутствие слуха и речи',
  'Бронхиальная астма',
  'Генерализованный псориаз',
  'Заболевание крови',
  'Сахарные диабет',
  'Цирроз печени',
  'Нарушение зрения (миопия более 4)',
  'Заболевания щитовидной железы ( в случае нарушения функций и обмена веществ)',
];

const infectiousDiseases = [
  'Туберкулез',
  'Бруцеллез',
  'Сыпной тиф',
  'Туляремия',
  'Лепра',
  'Африканский трипаносомоз',
  'Болезнь Чагаса',
];

const parasiticDiseases = [
  'Эхинококкоз',
  'Токсоплазмоз',
  'Трипаносомоз',
  'Филяриатоз',
  'Ришта',
  'Лейшманиоз',
  'Бабезиос',
  'Дракункулез',
  'Лихорадка Ку',
];

const mentalIllness = [
  'Органические заболевания ЦНС',
  `Психические расстройства и расстройства поведения (включая диагноз наркомания и алкоголизм и опасность) 
  и острые обострения, представляющие опасность больному и окружающим.`,
];

const cardiovascularDiseases = [
  'Гипертоническая болезнь II - III ст',
  'Ишемическая болезнь сердца',
  'Атеросклероз, атеросклеротический кардиосклероз',
  'Облитерирующий  эндоартериит,  неспецифический аортоартериит',
  'Рецидивирующий тромбофлебит и флебит, тромбангиит',
  'Эндокардит, миокардит',
  'Порок сердца',
];

const diseasesBlood = [
  'Хроническая анемия',
  'Аутоиммунные заболевания (ревматоидный артрит, склеродермия, системная красная волчанка и др.)',
];

const respiratoryDiseases = [
  'Бронхоэктатическая  болезнь,  эмфизема  легких',
  'Диффузный пневмосклероз в стадии декомпенсации',
];

const digestiveDiseases = [
  `Оперативные вмешательства по поводу резекции органа (желудок,
  почка,   желчный   пузырь,   селезенка,   яичники,   матка  и  пр.)`,
  'Ахилический гастрит',
  'Калькулезный   холецистит   с  повторяющимися  приступами  и явлениями холангита',
  'Хронические  заболевания  печени,  в  том  числе  токсической природы и неясной этиологии',
  'Диффузные и очаговые поражения почек',
  'Мочекаменная болезнь',
];

const eyesDiseases = [
  'Озерна',
  'Остаточные явления увеита (ирит, иридоциклит, хориоретинит)',
  'Трахома',
  'Полная слепота',
];

const skinDiseases = [
  `Распространенные   заболевания   кожи   воспалительного   и
инфекционного характера`,
  `Генерализованный  псориаз,  эритродермия,  экземы, пиодермия,
  сикоз, красная волчанка, пузырчатые дерматозы`,
  `Грибковые  поражения  кожи  (микроспория,  трихофития, фавус,
  эпидермофития) и внутренних органов (глубокие микозы)`,
  `Гнойничковые заболевания кожи (пиодермия, фурункулез, сикоз)`,
];

const otherDiseases = [
  'Резекции, ампутации, удаление органов, в том числе частичное (желудок, почка, селезенка, яичники, матка)',
  'Болезни эндокринной системы в стадии декомпенсации',
  'Диффузные заболевания соединительной ткани',
  'Наличие трасплатированных органов, тканей',
  'Лучевая болезнь',
  'Остеомиелит острый и хронический',
  'В период беременности',
];

export const AbsoluteSectionFaq = () => (
  <section>
    <Accordion ghost defaultActiveKey={1}>
      <Accordion.Panel
        key={1}
        header={
          <Title as='h3' bold>
            Распространенные абсолютные ограничения
          </Title>
        }
      >
        <NumberedList list={absoluteRestrictions} />
      </Accordion.Panel>
      <Accordion.Panel
        key={2}
        header={
          <Title as='h3' bold>
            Инфекционные заболевания
          </Title>
        }
      >
        <NumberedList list={infectiousDiseases} />
      </Accordion.Panel>
      <Accordion.Panel
        key={3}
        header={
          <Title as='h3' bold>
            Паразитарные заболевания
          </Title>
        }
      >
        <NumberedList list={parasiticDiseases} />
      </Accordion.Panel>
      <Accordion.Panel
        key={4}
        header={
          <Title as='h3' bold>
            Психические заболевания
          </Title>
        }
      >
        <NumberedList list={mentalIllness} />
      </Accordion.Panel>
      <Accordion.Panel
        key={5}
        header={
          <Title as='h3' bold>
            Сердечно-сосудистые заболевания
          </Title>
        }
      >
        <NumberedList list={cardiovascularDiseases} />
      </Accordion.Panel>
      <Accordion.Panel
        key={6}
        header={
          <Title as='h3' bold>
            Болезни связанные с кровью и иммунным механизмом
          </Title>
        }
      >
        <NumberedList list={diseasesBlood} />
      </Accordion.Panel>
      <Accordion.Panel
        key={7}
        header={
          <Title as='h3' bold>
            Болезни органов дыхания
          </Title>
        }
      >
        <NumberedList list={respiratoryDiseases} />
      </Accordion.Panel>
      <Accordion.Panel
        key={8}
        header={
          <Title as='h3' bold>
            Болезни органов пищеварения, печени, жёлчных путей, почек и мочевыводящих путей
          </Title>
        }
      >
        <NumberedList list={digestiveDiseases} />
      </Accordion.Panel>
      <Accordion.Panel
        key={9}
        header={
          <Title as='h3' bold>
            Болезни ЛОР-органов и глаз
          </Title>
        }
      >
        <NumberedList list={eyesDiseases} />
      </Accordion.Panel>
      <Accordion.Panel
        key={10}
        header={
          <Title as='h3' bold>
            Кожные болезни
          </Title>
        }
      >
        <NumberedList list={skinDiseases} />
      </Accordion.Panel>
      <Accordion.Panel
        key={11}
        header={
          <Title as='h3' bold>
            Другие болезни и состояния
          </Title>
        }
      >
        <NumberedList list={otherDiseases} />
      </Accordion.Panel>
    </Accordion>
  </section>
);
