const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const userRouter = require('./UserRouter');
const showsRouter = require('./ShowsRouter');

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/shows', showsRouter);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));
}

app.use('*', (req, res) => {
  // res.sendStatus(404)
  console.log('404: Client attempted to access an unknown route');
  res.status(404).send('That page does not exist!');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message.err);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Current environment is ${process.env.NODE_ENV}`);
});
