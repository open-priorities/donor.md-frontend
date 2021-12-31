import { emailRegex } from '@Constants/regex';

export const requiredField = {
  required: {
    value: true,
    message: 'Обязательное поле',
  },
};

export const emailField = {
  pattern: {
    value: emailRegex,
    message: 'Введите email',
  },
};

export const numberField = {
  pattern: {
    value: emailRegex,
    message: 'Введите email',
  },
};
