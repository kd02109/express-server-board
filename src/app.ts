import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  return res.send('HELLO EXPRESS');
});

app.listen(app.get('port'), () => {
  console.log('server is working');
});
