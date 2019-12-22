const jwt = require('jsonwebtoken');

function authenticate (req, res, next) {
  //set a request prop as headers with authorization
  let headers = req.headers["authorization"]
  
  console.log(req.headers)

  let token = headers.split(' ')[1]

  //setting the json web token
  jwt.verify(token, 'secret', (err, decoded) => {
    if (decoded) {
      if (decoded.username) {
        //if jwt is valid and user is logged in, next
        next()
      } else {
        //else, send error message
        res.status(401).json({ message: 'Token invalid' })
      }
    } else {
      //if jwt cant verify at all, send error message
      res.status(401).json({ message: 'Token invalid' })
    }
  });
};

module.exports = authenticate;
