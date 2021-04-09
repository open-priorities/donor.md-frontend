/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import HeaderContentFooter from '../../layouts/header-content-footer';
import { Container } from '../../layouts/container';
import { Paragraph as PH, Title as TL, Accordion } from '../../components/UI';
import ButtonGroup from '../../components/UI/button-group';

const Paragraph = styled(PH)`
  margin-bottom: 15px;
`;

const Title = styled(TL)`
  margin-bottom: 15px;
  &:first-child {
    margin-bottom: 40px;
  }
`;

const buttons = [
  { key: 1, text: 'Временные противопоказания' },
  { key: 2, text: 'Абсолютные  противопоказания' },
];

const MinimumRequirementsForDonor: React.FC = (): JSX.Element => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title bold>Минимальные требования к донору</Title>
        <ol>
          <li>
            Возраст <b>от 18 до 60 лет</b>
          </li>
          <li>
            Вес <b>более 55 кг</b>
          </li>
          <Paragraph>
            Люди с массой тела меньше 55 кг допускаются к донорству в индивидуальном порядке по
            усмотрению врача-трансфузиолога.
          </Paragraph>
          <li>Наличие гражданства ПМР или временной прописки</li>
          <li>Не иметь абсолютных противопоказаний</li>
          <li>Не иметь временных ограничений на момент сдачи крови</li>
        </ol>
        <Title as='h3' bold>
          Противопоказания
        </Title>
        <Paragraph>
          Перед процедурой сдачи крови каждый донор проходит консультацию с врачом-трансфузиологом.
          Не стесняйтесь задавать вопросы по поводу ваших заболеваний.
        </Paragraph>
        <Paragraph>
          Мы подготовили для вас противопоказания к донорству: абсолютных, то есть независящих от
          давности заболевания и результатов лечения, и временных — действующих лишь определенный
          срок.
        </Paragraph>
        <Paragraph>
          Руководствуйтесь, пожалуйста, этими ограничениями лишь в том случае, когда Вы совершенно
          уверены в наличии у себя соответствующего заболевания или состояния здоровья.
        </Paragraph>
        <div>
          <ButtonGroup buttons={buttons} handleClick={(args) => console.log('---> ', args)} />
          <Accordion ghost defaultActiveKey={1}>
            <Accordion.Panel
              key={1}
              header={<Title as='h3'>Распространенные абсолютные ограничения</Title>}
            >
              <ol>
                <li>ВИЧ- инфекция</li>
                <li>Гепатит В, С</li>
                <li>Сифилис</li>
                <li>Злокачественные образования (онкология)</li>
                <li>Полное отсутствие слуха и речи</li>
                <li>Бронхиальная астма</li>
                <li>Генерализованный псориаз</li>
                <li>Заболевание крови</li>
                <li>Сахарные диабет</li>
                <li>Цирроз печени</li>
                <li>Нарушение зрения (миопия более 4)</li>
                <li>
                  Заболевания щитовидной железы (в случае нарушения функций и обмена веществ)
                </li>
              </ol>
            </Accordion.Panel>
            <Accordion.Panel key={2} header={<Title as='h3'>Инфекционные заболевания</Title>}>
              <ol>
                <li>1. Туберкулез</li>
                <li>2. Бруцеллез</li>
                <li>3. Сыпной тиф</li>
                <li>4. Туляремия</li>
                <li>5. Лепра</li>
                <li>6. Африканский трипаносомоз</li>
                <li>7. Болезнь Чагаса</li>
                </ol> 
            </Accordion.Panel>
            <Accordion.Panel key={2} header={<Title as='h3'>Паразитарные заболевания</Title>}>
                <ol>
                <li>1.Эхинококкоз</li>
                <li>2. Токсоплазмоз</li>
                <li>3. Трипаносомоз</li>
                <li>4. Филяриатоз</li>
                <li>5. Ришта</li>
                <li>6. Лейшманиоз</li>
                <li>7. Бабезиос</li>
                <li>8. Дракункулез</li>
                <li>9. Лихорадка Ку</li>                                
                </ol> 
            </Accordion.Panel>
            <Accordion.Panel key={3} header={<Title as='h3'>Психические заболевания</Title>}>
                <ol>
                <li>1. Органические заболевания ЦНС</li>
                <li>2. Психические расстройства и расстройства поведения (включая диагноз наркомания и алкоголизм и опасность)
                       и острые обострения, представляющие опасность больному и окружающим</li>                                         
                </ol> 
            </Accordion.Panel>
             <Accordion.Panel key={4} header={<Title as='h3'>Сердечно-сосудистые заболевания</Title>}>
                <ol>
                <li>1. Гипертоническая болезнь II - III ст.</li> 
                <li>2. Ишемическая болезнь сердца</li>  
                <li>3. Атеросклероз, атеросклеротический кардиосклероз</li> 
                <li>4. Облитерирующий  эндоартериит,  неспецифический аортоартериит</li> 
                <li>5. Рецидивирующий тромбофлебит и флебит, тромбангиит</li> 
                <li>6. Эндокардит, миокардит</li> 
                <li>7. Порок сердца</li>                                       
                </ol> 
            </Accordion.Panel>
             <Accordion.Panel key={5} header={<Title as='h3'>Болезни связанные с кровью и иммунным механизмом</Title>}>
                <ol>
                <li>1. Хроническая анемия</li> 
                <li>2. Аутоиммунные заболевания (ревматоидный артрит, склеродермия, системная красная волчанка и др.)</li>                                                  
                </ol> 
            </Accordion.Panel>
             <Accordion.Panel key={6} header={<Title as='h3'>Болезни органов дыхания</Title>}>
                <ol>
                <li>1. Бронхоэктатическая  болезнь,  эмфизема  легких</li> 
                <li>2. Диффузный пневмосклероз в стадии декомпенсации</li>                                                  
                </ol> 
            </Accordion.Panel>
           <Accordion.Panel key={7} header={<Title as='h3'>Болезни органов пищеварения, печени, жёлчных путей, почек и мочевыводящих путей</Title>}>
                <ol>                   
               <li>1. Оперативные вмешательства по поводу резекции органа (желудок,
                      почка,   желчный   пузырь,   селезенка,   яичники,   матка  и  пр.)</li>   
               <li>2. Ахилический гастрит</li> 
               <li>3. Калькулезный   холецистит   с  повторяющимися  приступами  и явлениями холангита</li> 
               <li>4. Хронические  заболевания  печени,  в  том  числе  токсической природы и неясной этиологии</li> 
               <li>5. Диффузные и очаговые поражения почек</li> 
               <li>6. Мочекаменная болезнь</li>           
                </ol> 
            </Accordion.Panel> 
            <Accordion.Panel key={8} header={<Title as='h3'>Болезни ЛОР-органов и глаз</Title>}>
                <ol>                   
              <li>1. Озерна</li> 
              <li>2. Остаточные явления увеита (ирит, иридоциклит, хориоретинит</li> 
              <li>3. Трахома</li> 
              <li>4. Полная слепота</li> 
              </ol> 
            </Accordion.Panel>  
             <Accordion.Panel key={9} header={<Title as='h3'>Кожные болезни</Title>}>
                <ol>                   
                <li>1. Генерализованный  псориаз,  эритродермия,  экземы, пиодермия,
                       сикоз, красная волчанка, пузырчатые дерматозы</li>
                <li>2. Грибковые  поражения  кожи  (микроспория,  трихофития, фавус,
                       эпидермофития) и внутренних органов (глубокие микозы)</li>
                <li>3. Гнойничковые заболевания кожи (пиодермия, фурункулез, сикоз)</li>
              </ol> 
            </Accordion.Panel>  
            <Accordion.Panel key={10} header={<Title as='h3'>Другие болезни и состояния</Title>}>
                <ol>                
                <li>1.Резекции, ампутации, удаление органов, в том числе частичное (желудок, почка, селезенка, яичники, матка)</li>
                <li>2. Болезни эндокринной системы в стадии декомпенсации</li>
                <li>3. иффузные заболевания соединительной ткани</li>
                <li>4. Наличие трасплатированных органов, тканей</li>
                <li>5. Лучевая болезнь</li>
                <li>6. Остеомиелит острый и хронический</li>
                <li>7. В период беременности</li> 
              </ol> 
            </Accordion.Panel>            
          </Accordion>
        <Paragraph>Почему же существует такой огромный список противопоказаний и зачем они, ведь кровь все равно проверяют / тестируют в лаборатории перед тем, как выдать пациентам в больнице? 
         Это все потому, что донорство, в первую очередь - это забота о доноре, то есть работает принцип "не навреди себе". Ведь согласитесь, если человек имеет хроническое заболевание, 
         к примеру, псориаз, его организм нуждается в отдыхе и лечении, а не нагрузке. Поэтому сначала заботимся о себе и своем здоровье, а уже потом - спасаем других.</Paragraph>
        <Paragraph>Возможно, Вы будете разочарованы тем, что не сможете совершить донацию при наличии абсолютных противопоказаний.</Paragraph>
       <Paragraph>Однако, мы надеемся, что Вы поймете нашу главную задачу — обеспечение безопасности компонентов донорской крови для пациентов. Наличие противопоказаний к донорству не означает, 
       что Вы не можете внести свой вклад в развитие добровольного донорства крови! В разделе «Волонтерам» Вы можете узнать, как помочь нам.</Paragraph>
      <Paragraph>Если вы не нашли противопоказаний в списках, значит потенциально Вы можете быть донором крови. И все же обращаем внимание, что список - это основа и в нем далеко не все указанные случаи, учитывая которые человек не может стать донором. 
      Поэтому если Вы сомневаетесь и хотите все же уточнить можете ли вы быть донором, обращайтесь к нам и мы Вам подскажем все детали.</Paragraph>
       </div>
      </Container>
    </HeaderContentFooter>
  );
};

export default MinimumRequirementsForDonor;
