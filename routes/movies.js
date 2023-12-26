import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import {
  createMovie, getMovies, deleteMovie,
} from '../controllers/movies';
import URLREGEXP from '../utils/constans';

const movieRouter = Router();
movieRouter.get('/', getMovies);
movieRouter.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(URLREGEXP),
    trailerLink: Joi.string().required().pattern(URLREGEXP),
    nameRU: Joi.string().required().min(2).max(30),
    nameEN: Joi.string().required().min(2).max(30),
    thumbnail: Joi.string().required().pattern(URLREGEXP),
    movieId: Joi.number().required(),
  }),
}), createMovie);

movieRouter.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }),
}), deleteMovie);

export default movieRouter;
