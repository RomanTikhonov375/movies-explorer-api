import { celebrate, Joi } from 'celebrate';

export const checkSignupValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(2).max(30).required(),
    name: Joi.string().max(30).min(2),
  }),
});

export const checkSigninValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(2).max(30).required(),
  }),
});
