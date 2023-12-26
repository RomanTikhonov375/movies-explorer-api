import { celebrate, Joi } from 'celebrate';

const checkPatchUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string().min(2).max(30),
  }),
});

export default checkPatchUserValidation;
