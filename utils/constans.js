export const URLREGEXP = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
export const { PORT = 3001 } = process.env;
export const { NODE_ENV, DB_CONN } = process.env;
export const DB_CONN_DEV = 'mongodb://127.0.0.1:27017/bitfilmsdb';
