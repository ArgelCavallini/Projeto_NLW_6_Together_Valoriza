import "reflect-metadata";
import 'dotenv/config';

//import { errors } from 'celebrate';
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import path from 'path';

import "express-async-errors";

//import sentryConfig from '@config/sentry';
import uploadConfig from '@config/upload';
import routes from "./routes";

import '@shared/infra/typeorm';
//import '@shared/container';
//import '@shared/infra/crons';

const app = express();

/*
if (process.env.NODE_ENV !== 'development') {
  Sentry.init({ dsn: sentryConfig.dsn });
  app.use(Sentry.Handlers.requestHandler());
}*/

app.use(
  cors({
    origin: [process.env.APP_WEB_URL, process.env.SITE_WEB_URL],
    allowedHeaders: ['Authorization', 'Accept', 'Content-Type', 'Origin', 'Access-Control-Allow-Origin'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use('/images', express.static(path.resolve(__dirname, '..', '..', '..', 'assets', 'images')));
app.use('/fonts', express.static(path.resolve(__dirname, '..', '..', '..', 'assets', 'font')));
//app.use(rateLimiter);

app.options('*', cors());
app.use(routes);

//app.use(errors());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      status: 'error',
      message: err.message,
    })
  }

  return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    })
});

app.listen(process.env.PORT || 3000,() => console.log("Server is running"))