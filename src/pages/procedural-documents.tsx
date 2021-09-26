/* eslint-disable react/jsx-wrap-multilines */

import styled from 'styled-components';

import { Accordion } from '../components/UI/accordion';
import { Paragraph as PH, Title as TL } from '../components/UI/typography';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';

const Paragraph = styled(PH)`
  margin-bottom: 15px;
`;

const Title = styled(TL)`
  margin-bottom: 15px;
  &:first-child {
    margin-bottom: 40px;
  }
`;

const ProceduralDocuments = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title margin='0 0 40px 0' bold>
          Регламентирующие документы о донорстве в Приднестровье
        </Title>
        <Paragraph>
          <a href='http://www.vspmr.org/file.xp?file=87905'>
            Закон Приднестровской Молдавской Республики «О донорстве» (редакция на 01.01.2020 года)
          </a>
        </Paragraph>
        <Paragraph>
          <a href='http://gov-pmr.org/content/documents/2017/240.pdf'>
            Порядок обеспечения доноров в день сдачи крови и (или) ее компонентов бесплатным питанием, а также
            условия и размер денежной компенсации на питание (Постановление Правительства № 240 от 15 сентября
            2017 года)
          </a>
        </Paragraph>
        <Paragraph>
          Порядок медицинского освидетельствования (обследования доноров крови и ее компонентов (Приказ
          Министерства Здравоохранения №691 от 30.12.2010)
        </Paragraph>
        <Paragraph>
          <a href='http://minzdrav.gospmr.org/file.xp?file=10097'>
            Порядок заготовки и клинического использования плазмы от доноров - реконвалесцентов новой
            коронавирусной инфекции (COVID-19) в государственных лечебно-профилактических учреждениях (Приказ
            Министерства Здравоохранения №710 от 13.08.2020)
          </a>
        </Paragraph>
        <Accordion defaultActiveKey={[1]} ghost>
          <Accordion.Panel
            header={
              <Title as='h4' bold>
                Выдержки из Трудового Кодекса ПМР 10.12.20г.
              </Title>
            }
            key={1}
          >
            <Paragraph bold>Статья 162. Случаи предоставления гарантий и компенсаций</Paragraph>
            <Paragraph>
              При предоставлении гарантий и компенсаций соответствующие выплаты производятся за счет средств
              работодателя. Органы и организации, в интересах которых работник исполняет государственные или
              общественные обязанности (доноры и другие), производят работнику выплаты в порядке и на
              условиях, которые предусмотрены настоящим Кодексом, законами и иными нормативными правовыми
              актами Приднестровской Молдавской Республики. В указанных случаях работодатель освобождает
              работника от основной работы на период исполнения государственных или общественных обязанностей.
            </Paragraph>
            <Paragraph bold>
              Статья 183. Гарантии и компенсации работникам в случае сдачи ими крови и ее компонентов
            </Paragraph>
            <ol>
              <li>
                В день сдачи крови и ее компонентов, а также в день связанного с этим медицинского
                обследования работник освобождается от работы.
              </li>
              <li>
                В случае, если по соглашению с работодателем работник в день сдачи крови и ее компонентов
                вышел на работу (за исключением тяжелых работ и работ с вредными и (или) опасными условиями
                труда, когда выход работника на работу в этот день невозможен), ему предоставляется по его
                желанию другой день отдыха.
              </li>
              <li>
                В случае сдачи крови и ее компонентов в период ежегодного оплачиваемого отпуска, в выходной
                или нерабочий праздничный день работнику по его желанию предоставляется другой день отдыха.
              </li>
              <li>
                После каждого дня сдачи крови и ее компонентов работнику предоставляется дополнительный день
                отдыха. Указанный день отдыха по желанию работника может быть присоединен к ежегодному
                оплачиваемому отпуску или использован в другое время в течение года после дня сдачи крови и ее
                компонентов.
              </li>
              <li>
                При сдаче крови и ее компонентов работодатель сохраняет за работником его средний заработок за
                дни сдачи и предоставленные в связи с этим дни отдыха.
              </li>
            </ol>
          </Accordion.Panel>
          <Accordion.Panel
            header={
              <Title as='h4' bold>
                Выдержки из Положения о стипендиальном обеспечении организаций профессионального образования и
                научных учреждений (Приказ Министерства Просвещения от 18 июля 2016 года № 842)
              </Title>
            }
            key={2}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus aperiam aspernatur culpa
            dicta exercitationem explicabo hic ipsum libero, magni maiores modi odio perspiciatis qui quo quos
            similique ut!
          </Accordion.Panel>
        </Accordion>
      </Container>
    </HeaderContentFooter>
  );
};

export default ProceduralDocuments;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
