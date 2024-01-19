import express from 'express';

const userRoute = express.Router();

userRoute.get('/', (req, res) => {
  return res.send('Welcome Express User Route');
});
userRoute.get('/:id', (req, res) => {
  console.log(req.params);
  return res.send(`Hello, User id with ${req.params.id}`);
});
export default userRoute;
