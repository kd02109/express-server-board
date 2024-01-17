import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => {
  console.log('server is working');
});
