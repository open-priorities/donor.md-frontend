import { ButtonGroup } from '@UI/button-group';
import { NumberedList } from '@UI/numbered-list';
import { Paragraph, Title } from '@UI/typography';
import { useRouter } from 'next/dist/client/router';

const buttons = [
  { _id: '/minimum-donor-requirements', text: 'Временные противопоказания' },
  { _id: '/minimum-donor-requirements/absolute', text: 'Абсолютные  противопоказания' },
];

const list = [
  `Возраст<b> от 18 до 60 лет</b>`,
  `Вес <b>более 55 кг</b></br></br>
   Люди с массой тела меньше 55 кг допускаются к донорству в индивидуальном порядке по усмотрению врача-трансфузиолога.
   </br></br>
`,
  'Наличие гражданства ПМР или временной прописки',
  'Не иметь абсолютных противопоказаний',
  'Не иметь временных ограничений на момент сдачи крови',
];

export const HeadSection = () => {
  const { push } = useRouter();

  const handleClick = (path: string) => {
    push(path);
  };

  return (
    <section>
      <Title margin='0 0 40px 0' bold>
        Минимальные требования к донору
      </Title>
      <NumberedList list={list} />
      <Title as='h3' margin='35px 0 20px 0' bold>
        Противопоказания
      </Title>
      <Paragraph>
        Перед процедурой сдачи крови каждый донор проходит консультацию с врачом-трансфузиологом. Не
        стесняйтесь задавать вопросы по поводу ваших заболеваний.
      </Paragraph>
      <Paragraph>
        Мы подготовили для вас противопоказания к донорству: абсолютных, то есть независящих от давности
        заболевания и результатов лечения, и временных — действующих лишь определенный срок.
      </Paragraph>
      <Paragraph margin='15px 0 30px 0'>
        Руководствуйтесь, пожалуйста, этими ограничениями лишь в том случае, когда Вы совершенно уверены в
        наличии у себя соответствующего заболевания или состояния здоровья.
      </Paragraph>
      <ButtonGroup buttons={buttons} onClick={handleClick} />
    </section>
  );
};
