import React from 'react';
import styled from 'styled-components';
import HeaderContentFooter from '../../layouts/header-content-footer';
import { Container } from '../../layouts/container';
import { Paragraph as PH, Title as TL } from '../../components/UI';

const Paragraph = styled(PH)`
  margin-bottom: 15px;
`;

const Title = styled(TL)`
  margin-bottom: 15px;
  &:first-child {
    margin-bottom: 40px;
  }
`;

const List = styled.div`
  ol {
    list-style: none;
    counter-reset: li;
    padding-left: 0;
  }
  li:before {
    font-weight: bold;
    counter-increment: li;
    content: counters(li, '.') '. ';
  }
  dl {
    margin: 0;
  }
`;

const ListItem = styled.li`
  margin-bottom: 15px;
`;

const UserAgreement: React.FC = (): JSX.Element => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title bold>Пользовательское соглашение с DONOR.MD</Title>
        <Paragraph>
          <b>Примечание</b>: Использование web-сервиса Donor.md, включая страницы, сервисы и функции
          (далее Web-cервис) или прохождение процедуры регистрации (создание учетной записи) или
          иной процедуры входа на сайт, означает ваше полное и безусловное принятие согласие с
          пользовательским соглашением, без каких-либо оговорок и исключений.
        </Paragraph>
        <Paragraph>
          Если вы не принимаете все условия данного соглашения, вы не сможете пользовать данный
          web-сервис.
        </Paragraph>
        <List>
          <ol>
            <ListItem>
              <b>Общие положения, изменение, вступление в силу</b>
              <ol>
                <li>Использование сервисов DONOR.MD регулируется настоящим Соглашением.</li>
                <li>
                  Web-сервис DONOR.MD предоставляет возможность пользователю сети Интернет,
                  находящемуся на web-сервисе (далее – «Пользователь») использовать его на условиях,
                  изложенных в настоящем Пользовательском соглашении.
                </li>
                <li>
                  Соглашение вступает в силу с момента выражения Пользователем согласия с его
                  условиями в порядке, предусмотренном в настоящем Соглашении.
                </li>
                <li>
                  При условии принятия условий Соглашения Web-сервис предлагает Пользователям доступ
                  к средствам навигации, коммуникации, поиска, размещения и хранения разного рода
                  информации и материалов (контента), персонализации контента и т.д.
                </li>
              </ol>
            </ListItem>
            <ListItem>
              <b>Изменение и расторжение Пользовательского соглашения</b>
              <ol>
                <li>
                  Соглашение и любые его положения могут быть изменены, дополнены, приостановлены,
                  исключены, заменены, убраны или удалены в любой момент.
                </li>
                <li>
                  Информация о новой редакции Пользовательского соглашения будет размещена в сети
                  Интернет по адресу: donor.md/pravila не позднее чем за 10 дней до ее вступления в
                  силу. В случае, если Вы не согласны с какими-либо изменениями Пользовательского
                  соглашения, Вы должны прекратить использование Web-сервиса с момента вступления в
                  силу новой редакции Пользовательского соглашения. В случае если Вы продолжаете
                  использовать Web-сервис после вступления в силу новой редакции Пользовательского
                  соглашения, Вы тем самым выражаете свое согласие с новой редакцией
                  Пользовательского соглашения.
                </li>
                <li>
                  Какое-либо использование, воспроизведение, изменение или распространение
                  Web-сервиса, прямо не предусмотренное условиями Пользовательского соглашения,
                  категорически запрещается.
                </li>
                <li>
                  Donor.md имеет право расторгнуть настоящее Соглашение и (или) временно или
                  окончательно приостановить Ваш доступ к Вашей Учетной записи в случаях,
                  предусмотренных в пункте 3.5 при этом расторжение вступит в силу немедленно и без
                  предупреждения (или после предупреждения).
                </li>
              </ol>
            </ListItem>
            <ListItem>
              <b>
                Регистрация Пользователя. Учетная запись Пользователя. Другие группы пользователей
              </b>
              <ol>
                <li>
                  Для того чтобы воспользоваться функциями «личного кабинета донора» пользователю
                  необходимо пройти процедуру регистрации, в результате которой для Пользователя
                  будет создана уникальная Учетная запись. Создавая Учетную запись, Пользователь
                  подтверждает, что он является совершеннолетним и дееспособным.
                </li>
                <li>
                  Для регистрации Пользователь обязуется предоставить достоверную и полную
                  информацию о себе по вопросам, предлагаемым в форме регистрации, и поддерживать
                  эту информацию в актуальном состоянии.
                </li>
                <li>
                  Пользователь может в любое время получать доступ, изменять и обновлять данные
                  вашей Учетной записи.
                </li>
                <li>
                  Если Пользователь предоставляет неверную информацию или у Web-сервиса есть
                  основания полагать, что предоставленная Пользователем информация не является
                  точной, полной или достоверной, Web-сервис имеет право по своему усмотрению
                  заблокировать либо удалить Учетную запись Пользователя и отказать Пользователю в
                  использовании учетной записи (либо отдельных функций Web-сервиса).
                </li>
                <li>
                  В частности, для создания Учетной записи, Вы должны предоставить Donor.md
                  следующую информацию для создания учетной записи (личного кабинета донора):
                  <ul>
                    <dl>1) дата рождения;</dl>
                    <dl>2) Имя, Фамилию и отчество;</dl>
                    <dl>3) Адрес электронной почты;</dl>
                    <dl>4) номер мобильного и домашнего телефона;</dl>
                    <dl>5) пароль от учетной записи;</dl>
                    <dl>6) учетные профили социальных сетей и мессенджеров;</dl>
                    <dl>7) город проживания;</dl>
                    <dl>8) группа крови, фентип по системе резус;</dl>
                    <dl>9) фотографию.</dl>
                  </ul>
                  <ol>
                    <li>
                      Реципиент или его представители (физическое лицо, которому по медицинским
                      показаниям требуется донорская кровь и (или) ее компонентов и которому
                      необходима помощь Web-сервиса по поиску Донора или его представители):
                    </li>
                    <ul>
                      <dl>1) дата рождения;</dl>
                      <dl>2) Имя, Фамилия и отчество;</dl>
                      <dl>3) заболевание;</dl>
                      <dl>4) учреждение и город госпитализации;</dl>
                      <dl>5) группа крови, фентип по системе резус.</dl>
                      <dl>6) фотографию;</dl>
                      <dl>
                        7) для представителя Реципиента, имя, фамилия, отчество и контактные данные
                        (телефон, e-mail).
                      </dl>
                    </ul>
                    <li>Волонтеры</li>
                    <ul>
                      <dl>1) Фамилия и имя;</dl>
                      <dl>2) номер телефона;</dl>
                      <dl>3) адрес электронной почты.</dl>
                    </ul>
                    <li>Юридические лица и организации:</li>
                    <ul>
                      <dl>1) наименование;</dl>
                      <dl>2) организационно-правовая форма;</dl>
                      <dl>3) руководитель организации;</dl>
                      <dl>4) имя контактных лиц для целей пользования Web-сервисом;</dl>
                      <dl>5) номер телефона;</dl>
                      <dl>6) адрес электронной почты.</dl>
                    </ul>
                  </ol>
                </li>
              </ol>
              <li>
                Donor.md оставляет за собой право в любой момент потребовать от Пользователя
                подтверждения данных по пунктам 3.5. и 3.5.1., указанных при регистрации, и
                запросить в связи с этим подтверждающие документы (в частности - документы,
                удостоверяющие личность), не предоставление которых, по усмотрению Web-сервиса может
                быть приравнено к предоставлению недостоверной, неполной или неточной информации и
                повлечь последствия, предусмотренные п. 3.4 Соглашения.
              </li>
              <li>
                В случае если данные Пользователя, указанные в предоставленных им документах, не
                соответствуют данным, указанным в личном кабинете донора и форме запроса на кровь, а
                также в случае, когда данные, указанные при регистрации, не позволяют
                идентифицировать Пользователя, Donor.md вправе отказать Пользователю в доступе к
                Учетной записи и использовании сервиса Donor.md.
              </li>
              <li>
                Вход в личный кабинет донора осуществляется через пару логин/пороль и/или телефон,
                социальные сети (ВКонтакте, Facebook, Одноклассники («Социальные сети»).
              </li>
              <li>
                Пользователь личного кабинета обязан немедленно уведомить Donor.md о любом случае
                несанкционированного (не разрешенного Пользователем) доступа к сервисам Donor.md с
                использованием Учетной записи Пользователя или каких-либо иных нарушениях
                безопасности. Принимать меры, предотвращающие доступ посторонних лиц к вашей Учетной
                записи и компьютеру.
              </li>
              <li>
                Использование Пользователем своей Учетной записи. Пользователь не вправе
                воспроизводить, повторять и копировать, продавать и перепродавать, а также
                использовать для каких-либо коммерческих целей какие-либо части Donor.md (включая
                контент, доступный Пользователю посредством сервисов), или доступ к ним, кроме тех
                случаев, когда Пользователь получил такое разрешение от Donor.md, либо когда это
                прямо предусмотрено настоящим соглашением.
              </li>
              <li>
                Donor.md имеет право приостановить, изменить, прекратить действие или удалить любую
                Учетную запись по любому основанию, в том числе, помимо прочего, в случае нарушения
                Вами условий настоящего Пользовательского соглашения или если у Donor.md есть
                основания полагать, что Ваша Учетная запись используется другим лицом. Donor.md по
                своему усмотрению может предварительно сообщить Вам об этом.
              </li>
              <li>
                Donor.md не признает передачу Учетных записей. Запрещается приобретать, продавать,
                дарить или обменивать Учетные записи, а также предлагать приобрести, продать,
                подарить или обменять какую-либо Учетную запись. Любые такие попытки признаются
                недействительными и лишенными юридической силы.
              </li>
              <li>
                Donor.md не несет ответственности за какие-либо убытки или ущерб, возникшие в
                результате несоблюдения положений данного параграфа.
              </li>
            </ListItem>
            <ListItem>
              <b>Функционирование сервиса</b>
              <ol>
                <li>
                  Donor.md вправе посылать своим пользователям информационные сообщения и
                  уведомления по интегрированным каналам связи.
                </li>
                <li>
                  Используя Web-cервис, Пользователь также дает свое согласие на получение сообщений
                  рекламного характера. Пользователь вправе отказаться от получения сообщений
                  рекламного характера путем использования соответствующего функционала в настройках
                  уведомлений.
                </li>
                <li>
                  В целях повышения качества Donor.md вправе осуществлять сбор мнений и отзывов
                  Пользователей по различным вопросам путем направления информационного сообщения
                  при очередном посещении Пользователем сервиса. Собранные мнения и отзывы могут
                  быть использованы для формирования статистических данных, которые могут быть
                  использованы для сервиса Donor.md. Отзывы, оставленные Пользователем с
                  использованием его учетной записи, также могут быть опубликованы Donor.md, как с
                  указанием имени пользователя, так и без указания. При написании отзывов
                  Пользователь обязуется руководствоваться требованиями настоящего Соглашения, в том
                  числе требованиями, установленными п. 5 настоящего Соглашения.
                </li>
              </ol>
            </ListItem>
            <ListItem>
              <b>Контент Пользователя</b>
              <ol>
                <li>
                  Пользователь самостоятельно несет ответственность за соответствие содержания
                  размещаемого Пользователем контента включая все фотографии, тексты и иные
                  материалы, которую вы направляете (например, путем загрузки или передачи) Donor.md
                  («Пользовательский контент») требованиям действующего законодательства, включая
                  ответственность перед третьими лицами в случаях, когда размещение Пользователем
                  того или иного Пользовательского контента или его содержание нарушает права и
                  законные интересы третьих лиц, в том числе личные неимущественные права авторов,
                  иные интеллектуальные права третьих лиц, и/или посягает на принадлежащие им
                  нематериальные блага.
                </li>
                <li>
                  Пользователь признает и соглашается с тем, что Donor.md не обязан просматривать
                  весь Пользовательский контент, размещаемый и/или распространяемый Пользователем
                  посредством Web-сервиса, а также то, что Donor.md имеет право (но не обязанность)
                  по своему усмотрению отказать Пользователю в размещении и/или распространении им
                  Пользовательского контента или удалить любой Пользовательский контент, который
                  доступен на Web-сервисе. Пользователь осознает и согласен с тем, что он должен
                  самостоятельно оценивать все риски, связанные с использованием Пользовательского
                  контента других пользователей, включая оценку надежности, полноты или полезности
                  этого контента.
                </li>
                <li>
                  Пользователь осознает и соглашается с тем, что технология работы сервисов может
                  потребовать копирование (воспроизведение) Пользовательского контента Web-сервисом,
                  а также переработки его для соответствия техническим требованиям и дает согласие
                  на такие действия.
                </li>
              </ol>
            </ListItem>
            <ListItem>
              <b>Условия использования функциями Web-сервисом</b>
              <ol>
                <li>
                  Пользователь самостоятельно несет ответственность перед третьими лицами за свои
                  действия, связанные с использованием Web-cервиса, в том числе, если такие действия
                  приведут к нарушению прав и законных интересов третьих лиц, а также за соблюдение
                  законодательства (включая законодательства о донорстве крови) при использовании
                  функции Web-cервиса.
                </li>
                <li>
                  При использовании Web-сервиса Пользователь не вправе:
                  <ol>
                    <li>
                      загружать, посылать, передавать или любым другим способом размещать и/или
                      распространять контент, который является незаконным, вредоносным,
                      клеветническим, оскорбляет нравственность, демонстрирует (или является
                      пропагандой) насилия и жестокости, нарушает права интеллектуальной
                      собственности, пропагандирует ненависть и/или дискриминацию людей по расовому,
                      этническому, половому, религиозному, социальному признакам, содержит
                      оскорбления в адрес каких-либо лиц или организаций, содержит элементы (или
                      является пропагандой) порнографии, детской эротики, представляет собой рекламу
                      (или является пропагандой) услуг сексуального характера (в том числе под видом
                      иных услуг), разъясняет порядок изготовления, применения или иного
                      использования наркотических веществ или их аналогов, взрывчатых веществ или
                      иного оружия;
                    </li>
                    <li>
                      нарушать права третьих лиц, в том числе несовершеннолетних лиц и/или причинять
                      им вред в любой форме;
                    </li>
                    <li>
                      выдавать себя за другого человека или представителя организации и/или
                      сообщества без достаточных на то прав, в том числе за представителей Donor.md,
                      а также применять любые другие формы и способы незаконного представительства
                      других лиц в сети, а также вводить пользователей или Donor.md в заблуждение
                      относительно свойств и характеристик каких-либо субъектов или объектов;
                    </li>
                    <li>
                      загружать, посылать, передавать или любым другим способом размещать и/или
                      распространять контент, при отсутствии прав на такие действия согласно
                      законодательству или каким-либо договорным отношениям;
                    </li>
                    <li>несанкционированно собирать и хранить персональные данные других лиц;</li>
                    <li>
                      содействовать действиям, направленным на нарушение ограничений и запретов,
                      налагаемых Соглашением;
                    </li>
                    <li>
                      другим образом нарушать нормы законодательства, в том числе нормы
                      международного права.
                    </li>
                  </ol>
                </li>
              </ol>
            </ListItem>
            <ListItem>
              <b>Исключительные права на содержание сервисов и контент</b>
              <ol>
                <li>
                  Все объекты, доступные на Donor.md, в том числе элементы дизайна, текст,
                  графические изображения, иллюстрации, видео, базы данных и другие объекты, а также
                  любой контент, размещенный на Donor.md, являются объектами исключительных прав
                  Donor.md, Пользователей и других правообладателей. Donor.md обладает правами на
                  все информационное наполнение, появляющееся на Web-сервисе, за исключением
                  Пользовательского контента. Вы согласны с тем, что не имеете права собственности
                  или каких-либо иных прав на любое информационное наполнение, включая, без
                  ограничений, любые реквизиты, связанные с какой-либо Учетной записью или
                  сохраняемые на Web-сервисе.
                </li>
                <li>
                  Использование Пользователем элементов Web-сервиса, а также любого
                  Пользовательского контента для личного некоммерческого использования без передачи
                  третьим лицами, допускается при условии сохранения всех знаков охраны авторского
                  права, других уведомлений об авторстве, сохранения имени (или псевдонима)
                  автора/наименования правообладателя в неизменном виде, сохранении соответствующего
                  объекта в неизменном виде.
                </li>
                <li>
                  {' '}
                  Наши представители могут отслеживать и (или) записывать ваши сообщения и записи в
                  личном кабинете, когда вы находитесь на Donor.md, и настоящим вы даете безотзывное
                  согласие на такое отслеживание и запись.
                </li>
                <li>
                  Если по Вашему мнению Пользовательский контент иных пользователей нарушает
                  законодательство или иное применимое право, в частности (без ограничений) если
                  использование соответствующих результатов интеллектуальной деятельности или
                  средств индивидуализации лицом, инициировавшим передачу Пользовательского
                  контента, содержащего соответствующие результат интеллектуальной деятельности или
                  средство индивидуализации, является неправомерным, Вы можете в письменной форме
                  направить нам заявление о таком нарушении по электронной почте.
                </li>
              </ol>
            </ListItem>
            <ListItem>
              <b>Сайты и контент третьих лиц и реклама на Donor.md</b>
              <ol>
                <li>
                  Web-сервис может содержать ссылки или переадресацию на другие сайты в сети
                  Интернет (сайты третьих лиц). Указанные третьи лица и их контент не изменяются и
                  не проверяются на соответствие тем или иным требованиям (достоверности, полноты,
                  законности и т.п.).
                </li>
                <li>
                  Web-сервис не несет ответственность за любую информацию, материалы, размещенные на
                  сайтах третьих лиц и не принимает на себя обязательства в связи с использованием
                  или невозможностью использовать или рассчитывать на такую информацию, материалы,
                  размещенные на сайтах третьих лиц или доступные на таких сайтах товары или услуги,
                  к которым Пользователь получает прямой или косвенный доступ с использованием
                  сервисов, в том числе, за любые мнения или утверждения, выраженные на сайтах
                  третьих лиц, рекламу и т.п., а также за доступность таких сайтов или контента и
                  последствия их использования Пользователем. Web-сервис является информационным
                  посредником в отношении таких ссылок и материалов.
                </li>
              </ol>
            </ListItem>
            <ListItem>
              <b>Конфиденциальность</b>
              <ol>
                <li>
                  Наша Политика конфиденциальности (доступная по ссылке
                  https://donor.md/confidential) включает дополнительные требования и условия,
                  касающиеся возможного использования, сбора и раскрытия Ваших персональных данных,
                  в том числе тех данных, которые составляют специальные категории персональных
                  данных согласно законодательству. Вы подтверждаете, что ознакомились, приняли и
                  понимаете нашу Политику конфиденциальности и ее требования и условия.
                </li>
                <li>
                  Используя наш Сайт или связанные с ним сервисы, вы соглашаетесь с тем, что ваши
                  данные могут передаваться третьим лицам, участвующим в оказании услуг и
                  обеспечении работы Web-сервиса. Подробно условия такой передачи описаны в нашей
                  Политике конфиденциальности.
                </li>
              </ol>
            </ListItem>
            <ListItem>
              <b>Иные положения</b>
              <ol>
                <li>
                  Любая информация и/или материалы, доступ к которым Пользователь получает с
                  использованием сервисов Donor.md, Пользователь может использовать на свой
                  собственный страх и риск и самостоятельно несет ответственность за возможные
                  последствия использования указанных информации и/или материалов, в том числе за
                  ущерб, который это может причинить компьютеру Пользователя или третьим лицам, за
                  потерю данных или любой другой вред;
                </li>
                <li>
                  Donor.md не несет ответственности за любые виды убытков, произошедшие вследствие
                  использования Пользователем Web-сервиса или отдельных частей/функций сервиса;
                </li>
                <li>
                  Если по тем или иным причинам одно или несколько положений настоящего Соглашения
                  будут признаны недействительными или не имеющими юридической силы, это не
                  оказывает влияния на действительность или применимость остальных положений
                  Соглашения.
                </li>
                <li>
                  Бездействие со стороны Donor.md в случае нарушения Пользователем либо иными
                  пользователями положений Соглашений не лишает Donor.md права предпринять
                  соответствующие действия в защиту своих интересов позднее, а также не означает
                  отказа Donor.md от своих прав в случае совершения в последующем подобных либо
                  сходных нарушений.
                </li>
              </ol>
            </ListItem>
            <ListItem>
              <b>Контактные данные DONOR.MD</b>
              <Paragraph>
                Вопросы, замечания и просьбы в связи с настоящей Политикой конфиденциальности можно
                направлять электронной почтой по адресу: <b>support@donor.md</b>.
              </Paragraph>
            </ListItem>
            <Paragraph>
              ПРИНИМАЯ НАСТОЯЩЕЕ СОГЛАШЕНИЕ, Я ПОДТВЕРЖДАЮ, ЧТО ПРОЧИТАЛ(А) И ПОНЯЛ(А) ИЗЛОЖЕННОЕ
              ВЫШЕ ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ, И ПРИЗНАЮ, ЧТО, ИСПОЛЬЗУЯ WEB-СЕРВИС DONOR.MD
              (ВКЛЮЧАЯ СЕРВИСЫ И ФУНКЦИИ, СВЯЗАННЫЕ С WEB-СЕРВИСОМ) ИЛИ УЧЕТНУЮ ЗАПИСЬ, Я ВЫРАЖАЮ
              СВОЕ СОГЛАСИЕ С УСЛОВИЯМИ СОГЛАШЕНИЯ И ОБЯЗУЮСЬ ВЫПОЛНЯТЬ ЭТИ УСЛОВИЯ.
            </Paragraph>
          </ol>
        </List>
      </Container>
    </HeaderContentFooter>
  );
};

export default UserAgreement;
