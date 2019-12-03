const express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  jwt = require('jsonwebtoken'),
  Sequelize = require('sequelize'),
  Op = Sequelize.Op,
  models = require('./models'),
  PORT = process.env.PORT || 8080;

const tools = require('./tools/authentication');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//====================DISPLAYING POTATOES=======================
app.get('/displayData', (req,res) => {
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

//====================LOGIN============================
app.post('/login', (req,res) => {
  let username = req.body.username
  let password = req.body.password
  //settings variables for our information makes it easier to refer to later

  models.Users.findOne({
    where: {
      username: username
    }
    //check for the user in our database
  }).then((user) => {
    if(user) {
      //if the user exists give them a token
      jwt.sign({ username: username }, 'secret',
        function (error, token) {
          if (token) {
            //the token with be a json file with the following information
            //the username, the token, the user's id, and a status of 200
            res.json({ username: username, token: token, id: user.id, status: 200 })
          } else {
            //if the token fails, send a json file with a message and status of 500
            res.status(500).json({ message: 'unable to generate token', status: 500 })
          }
        }) //end of jwt.sign
    }
    else {
      //if the user fails, send an error message
      let message = 'Invalid login attempt.'
      res.status(500).json({ message: message, status: 500 })
      console.log('login failed; incorrect information')
    }
  }); //end of promise for jwt.sign
}); //end of login post

//whenever we want to check for the user, we need to authenticate
//check the tools/authentication file for the function
app.get('/username', tools.authenticate, (req, res) => {
  res.send(currentUser[currentUser.length - 1])
})

//====================ASSOCIATIONS BETWEEN POTATOES AND USERS =================
app.post('/userFavoritePotato', (req,res) => {
  let userid = req.body.userid
  let potatoid = Number(req.body.potatoid)

  models.FavoritePotatoes.create({
    userid: userid,
    potatoid: potatoid
  }); //end of favoritepotatoes build
}); //end of post

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
