import styled from 'styled-components';

import { Paragraph as PH, Title as TL } from '../../components/UI/typography';
import { Container } from '../../core/layouts/container';
import { HeaderContentFooter } from '../../core/layouts/header-content-footer';

const Paragraph = styled(PH)`
  margin-bottom: 15px;
`;

const Title = styled(TL)`
  margin-bottom: 15px;
  &:first-child {
    margin-bottom: 40px;
  }
`;

const List = styled.ul`
  padding-left: 10px;
`;
const ListItem = styled.li`
  list-style-type: '✔';
  padding-bottom: 10px;
`;

const PlasmaDonors = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title bold>Доноры плазмы COVID19</Title>
        <Title as='h3' bold>
          Что надо знать донорам плазмы для лечения пациентов с COVID19?
        </Title>
        <Paragraph>
          Для быстрого формирования иммунного ответа при помощи антител к вирусной инфекции. Получить эти
          антитела искусственным путем невозможно, только переболевший и выздоровевший человек может стать
          донором плазмы, имеющей антитела к COVID-19 и помочь больным
        </Paragraph>
        <Title as='h3' bold>
          Что потом делают?
        </Title>
        <Paragraph>
          Вся собранная плазма после анализов отправляется в инфекционные госпиталя. Плазма будет использована
          для лечения пациентов с новой коронавирусной инфекции, находящимся в медицинских организациях в
          тяжелом состоянии.
        </Paragraph>
        <Title as='h3' bold>
          Как стать донором антиCOVID-ой плазмы?
        </Title>
        <List>
          <ListItem>находиться в возрастной категории от 18 до 55 лет</ListItem>
          <ListItem>переболеть COVID19 и иметь хороший иммунный статус антител к COVID19</ListItem>
          <ListItem>иметь клинические и биохимические анализы в норме</ListItem>
          <ListItem>не иметь традиционных противопоказаний к донорству</ListItem>
        </List>
        <Title as='h3' bold>
          Что потом делают?
        </Title>
        <Paragraph>
          Вся собранная плазма после анализов отправляется в инфекционные госпиталя. Плазма будет использована
          для лечения пациентов с новой коронавирусной инфекции, находящимся в медицинских организациях в
          тяжелом состоянии.
        </Paragraph>
        <Paragraph color='red'>
          Сдать плазму можно не ранее, чем через 14 дней после выписки из стационара
        </Paragraph>
        <Title as='h3' bold>
          Какие анализы сдают доноры плазмы COVID19?
        </Title>
        <List>
          <ListItem>
            исследование уровень иммуноглобулинов G к COVID19, чтобы видеть, насколько активна плазма для
            лечения коронавирусной инфекции, есть ли там антитела
          </ListItem>
          <ListItem>
            общий анализ крови, мочи, общей белок, уровень сахара в крови, креатин, коагулограмма
          </ListItem>
        </List>
        <Title as='h3' bold>
          Как проходит сдача плазмы?
        </Title>
        <Paragraph>
          Сдача плазмы осуществляется в два этапа, сначала делают все анализы, а потом делают забор плазмы.
          Общая время сдачи анализов и сдачи плазмы составляет около трех часов. Забор плазмы проходит в
          максимально комфортных условиях, в специальном донорском кресле.
        </Paragraph>
        <Paragraph>
          Нахождение в стационаре после сдачи плазмы не требуется. В течение суток не рекомендуется заниматься
          физическими упражнениями, курить, необходимо хорошо и правильно питаться.
        </Paragraph>
        <Title as='h3' bold>
          Куда обратиться для сдачи плазмы?
        </Title>
        <Paragraph>
          Для визита в учреждение с целью сдачи плазмы, содержащей антитела к COVID-19, необходима
          предварительная запись. C собой необходимо иметь выписку из лечебного учреждения, где вы проходили
          лечение от COVID-19.
        </Paragraph>
        <Paragraph>
          Сдать антиковдную плазму можно только в Тирасполе. <br /> Отделение переливания крови РКБ работает с
          8:00 до 14:00 (с 12:00 до 12:30 перерыв). <br /> Обращаться на второй этаж в регистратуру доноров.
          Контактный телефон: <b>0(533) 2-55-05</b>.
        </Paragraph>
      </Container>
    </HeaderContentFooter>
  );
};

export default PlasmaDonors;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
