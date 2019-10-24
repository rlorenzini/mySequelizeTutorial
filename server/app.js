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

//====================DISPLAYING POTATOES=======================
app.get('/displayData', (req,res) => {
  // models.potatoes.findAll().then((result) => {
  //   for (i = 0; i < result.length; i ++) {
  //   console.log(result[i].name)}
  // })
  models.potatoes.findAll().then((result) => {
    res.json({result:result})
  })
})
//====================REGISTRATION==============================
app.post('/register', (req,res) => {

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
      res.status(500).json({ status: 500, message: 'username already exists '})
    } else {

      // encrypt here (bcrypt)
      //why encrypt before you check if user exists?
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
