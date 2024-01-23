import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from "cors";

import dotenv from 'dotenv';
dotenv.config();
const { NODE_ENV, PORT } = process.env;

import indexRoute from '@/routes/index';
import userRoute from '@/routes/user';

const app = express();

app.set('port', PORT || 8080);

app.use(cors({
  origin: ['http://localhost:3000', "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
  credentials: true
}));

app.use((req, res, next) => {
  if (NODE_ENV === 'development') {
    morgan('dev')(req, res, next);
  } else {
    morgan('combined')(req, res, next);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  }),
);

app.use('/', indexRoute);
app.use('/user', userRoute);
app.use((req, res, next) => {
  return res.status(404).send('NOT FOUND');
});

app.listen(app.get('port'), () => {
  console.log('server is working');
});
