import styled from 'styled-components';

import { Paragraph as PH, Title as TL } from '../../src/components/UI';
import { Container } from '../../src/core/layouts/container';
import { HeaderContentFooter } from '../../src/core/layouts/header-content-footer';

const Paragraph = styled(PH)`
  margin-bottom: 15px;
`;

const Title = styled(TL)`
  margin-bottom: 15px;
  &:first-child {
    margin-bottom: 40px;
  }
`;

const DonorAndWork = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title bold>Донор и работа | Донор и учеба</Title>
        <Title as='h4' bold>
          До сдачи крови и в день сдачи крови
        </Title>
        <Paragraph>
          Если Вы где-то работайте или учитесь, то день сдачи крови, является официальной причиной
          освобождения от работы или учебы, независимо от форм собственности с сохранением за ним среднего
          заработка/стипендии за эти дни.
        </Paragraph>
        <Paragraph>
          Перед тем как пойти сдавать кровь вам необходимо уведомить Вашего непосредственного
          начальника/куратора. Это позволяет руководству предприятия (учреждения, организации) скоординировать
          функционирование работы при отсутствии работника - донора или чтоб в учебный день, вас никто не
          искал. Обычно для этого достаточно устных договоренностей, но иногда к сожалению приходиться писать
          заявление.
        </Paragraph>
        <Paragraph>
          В свою очередь, работодатель/куратор не имеет права запретить работнику сдавать кровь в
          рабочий/учебный день. Согласно трудовому законодательству ПМР, в день сдачи крови и в день
          связанного с этим медицинского обследования работник освобождается от работы.
        </Paragraph>
        <Title as='h4' bold>
          Наши рекомендации, как написать такое заявление:
        </Title>
        <Paragraph>
          <b>Заявление о намерении пройти сдать кровь</b> необходимо подать минимум за 2 дня; Содержание
          заявления. Работник, желающий сдать кровь, указывает в заявлении об этом: • конкретную дату
          медицинского обследования и сдачи крови; • дату использования дополнительного дня отдыха. Работник
          самостоятельно определяет дату дня отдыха или присоединяет его к ежегодному отпуску.
        </Paragraph>
        <Paragraph>
          <b>Пример заявления.</b> «Прошу освободить меня от выполнения должностных обязанностей ДАТА г. в
          связи с прохождением медицинского обследования и сдачей крови. Прошу предоставить за этот день
          дополнительный день отдыха дата г. ИЛИ Прошу предоставить дополнительный день отдыха к ежегодному
          оплачиваемому отпуску. Обязуюсь предоставить соответствующую медицинскую справку».
        </Paragraph>
        <Paragraph>
          В силу ст. 7 Закона ПМР “О донорстве” работодатель обязан не только предоставлять работнику,
          являющемуся донором, установленные законодательством меры социальной поддержки, но и
          беспрепятственно отпускать его в организацию здравоохранения в день обследования и сдачи крови и ее
          компонентов. В случае если по соглашению с администрацией работник, являющийся донором, в день сдачи
          крови вышел на работу (за исключением работ, связанных с особыми условиями труда), ему
          предоставляется по его желанию другой день отдыха с сохранением за ним среднего заработка. Если день
          сдачи крови пришелся на период ежегодного оплачиваемого отпуска, выходной или праздничный день, то
          работнику - донору по его желанию предоставляется другой день отдыха.
        </Paragraph>
        <Paragraph>
          Факт нахождения гражданина в учреждении здравоохранения для соответствующего обследования и взятия
          крови подтверждается справкой, выдаваемой учреждением здравоохранения.
        </Paragraph>
        <Title as='h4' bold>
          Выплата пособия по временной нетрудоспособности
        </Title>
        <Paragraph>
          Если Ваш трудового стажа недостаточно для выплаты пособия по временной нетрудоспособности в размере
          полного заработка (по МРОТ). Вы можете претендовать на льготу в случае, если Вы систематически
          сдаете кровь (не менее пяти раз в год для мужчин и не менее трех раз в год для женщин), на
          протяжении 12 месяцев после последней сдачи крови.
        </Paragraph>
        <Paragraph>
          Из опыта наших доноров льготу можно получить в двух случаях: 1) Заранее написать заявление о
          предоставление льготы 2) В случае перерасчета больничного листа.
        </Paragraph>
        <Paragraph>
          <b>Пример текста заявления (1):</b> Прошу Вас, в соответствии статьей 9 Закона “О донорстве”
          предоставить мне льготу по выплате пособия по временной нетрудоспособности в размере полного
          заработка. Прилагаю справки о сдачи крови: 1. Копия справки №1,2,3,4”
        </Paragraph>
        <Paragraph>
          <b>Пример текста заявления (2):</b> Прошу Вас произвести перерасчет пособия по временной
          нетрудоспособности в размере полного заработка, в связи использованием мной льготы на основании
          статьи 9 Закона “О донорстве”. Прилагаю справки о сдачи крови: 1. Копия справки №1,2,3,4”
        </Paragraph>
        <Paragraph>
          Напоминаем, что данная льгота действует 12 месяцев от последней сдачи крови, в случаи
          систематических донаций. За эти 12 месяцев Вы сделайте еще донации и снова напишите о предоставлении
          данной льготы.
        </Paragraph>
        <Title as='h4' bold>
          Информация для руководителей организаций и отделов кадров
        </Title>
        <Paragraph>
          Руководители предприятий, учреждений, организаций (независимо от форм собственности), высших,
          средних специальных и средне-технических учебных заведений, начальники воинских подразделений
          обязаны:
        </Paragraph>
        <Paragraph>
          - беспрепятственно отпускать рабочих, служащих, учащихся в учреждения здравоохранения для
          прохождения обследования в день дачи крови (плазмы, клеток крови) для переливания и сохранять за
          ними среднюю заработную плату по месту работы со всеми дополнительными выплатами;
        </Paragraph>
        <Paragraph>
          - в случае дачи крови во время отпуска или в нерабочий день (выходной или праздничный) предоставить
          донору другой оплачиваемый день отдыха;
        </Paragraph>
        <Paragraph>
          - предоставлять рабочим, служащим, студентам, учащимся непосредственно после каждого дня дачи крови
          (плазмы, клеток крови) для переливания день отдыха с правом его присоединения к очередному отпуску
          или использования по желанию донора в другое время;
        </Paragraph>
        <Paragraph>
          - производить оплату дополнительного дня отдыха из расчета средней заработной платы по месту работы
          со всеми дополнительными выплатами;
        </Paragraph>
        <Paragraph>
          - в день сдачи крови или ее компонентов освобождать военнослужащих, являющихся донорами, от несения
          нарядов, вахт и других форм службы.
        </Paragraph>
        <Title as='h4' bold>
          Из статьи 7 Закона ПМР “О Донорстве”.
        </Title>
        <Paragraph>
          Гарантии и компенсации работникам в случае сдачи ими крови и ее компонентов: 1. В день сдачи крови и
          ее компонентов, а также в день связанного с этим медицинского обследования работник освобождается от
          работы.
        </Paragraph>
        <Paragraph>
          2. В случае, если по соглашению с работодателем работник в день сдачи крови и ее компонентов вышел
          на работу (за исключением тяжелых работ и работ с вредными и (или) опасными условиями труда, когда
          выход работника на работу в этот день невозможен), ему предоставляется по его желанию другой день
          отдыха.
        </Paragraph>
        <Paragraph>
          3. В случае сдачи крови и ее компонентов в период ежегодного оплачиваемого отпуска, в выходной или
          нерабочий праздничный день работнику по его желанию предоставляется другой день отдыха.
        </Paragraph>
        <Paragraph>
          4. После каждого дня сдачи крови и ее компонентов работнику предоставляется дополнительный день
          отдыха. Указанный день отдыха по желанию работника может быть присоединен к ежегодному оплачиваемому
          отпуску или использован в другое время в течение года после дня сдачи крови и ее компонентов.
        </Paragraph>
        <Paragraph>
          5. При сдаче крови и ее компонентов работодатель сохраняет за работником его средний заработок за
          дни сдачи и предоставленные в связи с этим дни отдыха.
        </Paragraph>
        <Title as='h4' bold>
          Статья 182 Трудового Кодекса ПМР
        </Title>
        <Paragraph>
          Советуем руководству предприятия (учреждения, организации) помнить о работниках — донорах крови, их
          льготах и правах. Согласитесь, ваш коллега - донор делает доброе дело и не следует ему
          препятствовать. Если Вы сталкивайтесь с трудностями со своими работодателем, напишите нам и мы
          постараемся Вам помочь.
        </Paragraph>
      </Container>
    </HeaderContentFooter>
  );
};

export default DonorAndWork;
