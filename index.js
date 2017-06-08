const app = require('express')();

app.use('/graphql', (req, res) =>{
    res.send('Hello World');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})