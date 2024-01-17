import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

dotenv.config();
const { NODE_ENV } = process.env;
const app = express();

app.set('port', process.env.PORT || 8080);

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

app.get('/', (req, res) => {
  return res.send('HELLO EXPRESS');
});

app.listen(app.get('port'), () => {
  console.log('server is working');
});
