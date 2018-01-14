const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema, getDocument } = require('boe-graphql');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get('/api/:id', async (req, res) => {
  const data = await getDocument({ id: req.params.id });
  res.json(data);
});

app.get('/', (req, res) => res.send('BOE GraphQL'));

app.listen(3000, () => {
  console.info('BOE GraphQL - Listening to http://localhost:3000/graphql');
});
