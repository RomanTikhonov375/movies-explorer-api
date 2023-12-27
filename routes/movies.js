import { Router } from 'express';
import {
  createMovie, getMovies, deleteMovie,
} from '../controllers/movies';
import { checkPostMovieValidation, checkDeleteMovieValidation } from '../middlewares/joiMovieValidation';

const movieRouter = Router();
movieRouter.get('/', getMovies);
movieRouter.post('/', checkPostMovieValidation, createMovie);
movieRouter.delete('/:id', checkDeleteMovieValidation, deleteMovie);

export default movieRouter;
