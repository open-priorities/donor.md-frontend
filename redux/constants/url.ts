const { NODE_ENV } = process.env;

export const backend = NODE_ENV === 'development' ? 'http://localhost:5000' : '';
export const apiV1 = `${backend}/api/v1`;
