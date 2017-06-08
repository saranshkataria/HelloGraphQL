const app = require('express')(),
      schema = require('./schema'),
      graphql = require('graphql'),
      expressGraphql = require('express-graphql');

app.use('/graphql', expressGraphql({
  schema,
  graphiql: true
}));

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});