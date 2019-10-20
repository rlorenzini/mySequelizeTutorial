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

//====================SUBMIT DATA TO OUR DATABASE==============================
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

//====================QUERYING OUR DATA========================================
//models.Table.<insert_here>({})
//findOne, findAll, destroy, build, findByPk, update

//findOne({ where: { attribute: desiredValue } })

//findAll({ where: { attribute: desiredValue } })
//findAll({ }) returns all from whichever Table you declare

//destroy({ where: { attribute: desiredValue } })
//destroy({ }) can be used in various ways to destroy empty data, tables, etc
//destroy({ where: {} }) destroys all data in a table
//destroy({ where: {}, truncate: true })

//build({ attribute: desiredValue }) needs the required attributes at minimum


//ASSOCIATIONS
//hasOne
//hasMany
//check unogs for example

app.listen(PORT, () => {
  console.log(`Server running at localhost: ${PORT} `);
});
