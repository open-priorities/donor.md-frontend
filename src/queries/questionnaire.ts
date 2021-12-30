import { questionnaireUrl } from '@Constants/url';
import { IQuestion, IQuestionnaireStory } from '@core/question';
import { baseFetch } from '@Services/fetch';

export const getQuestionnaire = async () => {
  const { data } = await baseFetch<IQuestion[]>({ url: questionnaireUrl });
  return data;
};

export const createQuestionnaireAction = async (payload: IQuestionnaireStory) => {
  const { data } = await baseFetch<IQuestion>({
    method: 'POST',
    url: questionnaireUrl,
    data: payload,
  });

  return { data };
};
