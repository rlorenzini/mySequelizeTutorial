const express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  Sequelize = require('sequelize'),
  Op = Sequelize.Op,
  models = require('./models'),
  SALT_ROUNDS = 10,
  PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.post('/submitData', (req,res) => {

  let username = req.body.username,
    password = req.body.password,
    firstName = req.body.firstName,
    lastName = req.body.lastName,
    email = req.body.email


  models.Users.findOne({
    where: {
      username: username
    }
  }).then((user) => {
    if (user) {
      res.status(500).json({ message: 'username already exists '})
    } else {
      let user = models.Users.build({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email
      })
      user.save()
    } // end of else
  }); //end of promise
}); // end of post submitData

app.listen(PORT, () => {
  console.log(`Server running at localhost: ${PORT} `);
});
