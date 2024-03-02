import express, { json } from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import { config } from 'dotenv';
import cors from 'cors';
import { errors } from 'celebrate';
import limiter from './utils/rateLimetid';
import { requestLogger, errorLogger } from './middlewares/logger';
import router from './routes/index';
import NotFoundError from './utils/errors/NotFoundError';
import errorHandler from './utils/errors/errorHandler';
import {
  NODE_ENV, PORT, DB_CONN, DB_CONN_DEV,
} from './utils/constans';
import handleCors from './middlewares/handleCors';

config();
const app = express();
app.use(handleCors());
app.use(cors());
app.use(helmet());
app.use(limiter);

mongoose.connect(NODE_ENV ? DB_CONN : DB_CONN_DEV);
app.use(json());
app.use(requestLogger);
app.use(router);
app.use((req, res) => {
  throw new NotFoundError('Страница не найдена');
});
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
