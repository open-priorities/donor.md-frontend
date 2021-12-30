const { NODE_ENV } = process.env;

export const backendUrl =
  NODE_ENV === 'development'
    ? 'http://localhost:5000/api/v1'
    : 'https://donor-md-backend.herokuapp.com/api/v1';

export const apiV1 = `${backendUrl}/api/v1`;

export const topDonorsUrl = (sexId: string) => `/top-donors?sexId=${sexId}`;

export const monitoringUrl = `/monitoring`;

export const userUrl = `/user`;

export const questionnaireUrl = `/questionnaire`;

export const storyUrl = `/story`;

export const userStoryUrl = `/story`;

export const donorProgressUrl = `/donor-progress`;
