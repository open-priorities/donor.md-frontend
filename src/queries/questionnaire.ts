import { apiV1 } from '@Constants/url';
import { IQuestion, IQuestionnaireStory } from '@core/question';
import { baseFetch } from '@Services/fetch';

export const getQuestionnaire = async () => {
  const { data } = await baseFetch<IQuestion[]>({ url: `${apiV1}/questionnaire` });
  return data;
};

export const createQuestionnaireAction = async (payload: IQuestionnaireStory) => {
  const { data } = await baseFetch<IQuestion>({
    method: 'POST',
    url: `${apiV1}/questionnaire`,
    data: payload,
  });

  return { data };
};
