import { celebrate, Joi } from 'celebrate';
import { URLREGEXP } from '../utils/constans';

export const checkPostMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(URLREGEXP),
    trailerLink: Joi.string().required().pattern(URLREGEXP),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().pattern(URLREGEXP),
    movieId: Joi.number().required(),
  }),
});

export const checkDeleteMovieValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
});
