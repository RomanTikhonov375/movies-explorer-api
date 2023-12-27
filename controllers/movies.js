import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import Movie from '../models/Movie';
import BadRequestError from '../utils/errors/BadRequestError';
import NotFoundError from '../utils/errors/NotFoundError';
import NoAccessRightsError from '../utils/errors/NoAccessRightsError';

export const getMovies = async (req, res, next) => {
  try {
    const owner = req.user._id;
    const movies = await Movie.find({ owner });
    return res.status(StatusCodes.OK).send(movies); // массив карточек
  } catch (error) {
    return next(error);
  }
};

export const createMovie = async (req, res, next) => {
  try {
    const movie = await new Movie({
      country: req.body.country,
      director: req.body.director,
      duration: req.body.duration,
      year: req.body.duration,
      description: req.body.description,
      image: req.body.image,
      trailerLink: req.body.trailerLink,
      nameRU: req.body.nameRU,
      nameEN: req.body.nameEN,
      thumbnail: req.body.thumbnail,
      movieId: req.body.movieId,
      owner: req.user._id,
    });
    return res.status(StatusCodes.OK).send(await movie.save({
      runValidators: true,
    }));
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      return next(new BadRequestError(error));
    }
    if (error instanceof mongoose.Error.ValidationError) {
      return next(new BadRequestError(error));
    }
    return next(error);
  }
};

export const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById({ _id: id });
    if (!movie) {
      throw new NotFoundError('Карточка по id не найдена');
    }
    const movieOwner = movie.owner.toString().replace('new ObjectId', '');
    if (movieOwner === req.user._id) {
      await Movie.deleteOne(movie);
      return res.status(StatusCodes.OK).send({ message: 'Пост удален' });
    } throw new NoAccessRightsError('Можно удалять только свои карточки');
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      return next(new BadRequestError('Передан не валидный id'));
    }
    return next(error);
  }
};
