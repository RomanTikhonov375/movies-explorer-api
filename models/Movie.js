import mongoose from 'mongoose';
import URLREGEXP from '../utils/constans';

const movieSheme = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (v) => URLREGEXP.test(v),
        message: (props) => `${props.value} Не валидный URL адрес`,
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator: (v) => URLREGEXP.test(v),
        message: (props) => `${props.value} Не валидный URL адрес`,
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: (v) => URLREGEXP.test(v),
        message: (props) => `${props.value} Не валидный URL адрес`,
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

  },
  // Options
  {
    versionKey: false,
    timestamps: true,
  },
);

export default mongoose.model('movie', movieSheme);
