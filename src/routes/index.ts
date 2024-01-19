import express from 'express';

const indexRoute = express.Router();

indexRoute.get('/', (req, res) => {
  return res.send('Welcome Express');
});

export default indexRoute;
