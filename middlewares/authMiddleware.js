const jsonwebtoken = require("jsonwebtoken")


// MIDDLEWARE AUTENTICACION DE TOKEN
const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  const [type, jwt] = authorization.split(" ");
  try {
    if (type.toLowerCase() !== "bearer") {
      throw new Error("Invalid type")
    }

    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
    req.auth = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated." });
    return;
  }

}

const isValidRole = (rol) => (req, res, next) => {
  if (req.auth?.rol === rol) {
    
    next()
  } else {
    res.status(403).json({ message: "You are not authorized" })
  }
}

const isValidUser = (mail) => async (req, res, next) => {
  mail = req.params.mail || req.body.mail
  console.log(mail)
  console.log(req.auth.mail)
  if (req.auth?.mail === mail) {
    next()
  } else {
    res.status(403).json({ message: "You are not authorized" })
  }
}

module.exports = {
  authBearerMiddleware,
  isValidRole,
  isValidUser
};