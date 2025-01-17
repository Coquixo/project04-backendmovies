const models = require("../models/index");
const {
  assertValidPassword,
  assertEmailIsValid,
  assertEmailIsUnique,
  createUser,
  encryptPassword,
} = require("../services/auth.service");
require("dotenv").config();

const jsonwebtoken = require("jsonwebtoken");

const authRegisterController = async (req, res) => {
  const body = req.body;
  //validate password
  try {
    assertValidPassword(body.password);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid password: " + error.message });
    return;
  }
  // validate email is valid
  try {
    assertEmailIsValid(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Email is invalid: " + error.message });
    return;
  }
  // validate email is unique
  try {
    assertEmailIsUnique(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Email is already registered: ",
    });
    return;
  }
  // save user
  try {
    const UserCreated = await createUser({
      name: body.name,
      surname: body.surname,
      age: body.age,
      phone: body.phone,
      address: body.address,
      email: body.email,
      password: body.password,
      rolIdRol: body.rolIdRol || "user",
    });
    res.status(201).json(UserCreated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const authLoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await models.users.findOne({
      where: { email: email },
    });
    if (!userFound) {
      res.status(401).json({ message: "Password or email is incorrect" });
      return;
    }
    const hashedPassword = encryptPassword(password);

    if (hashedPassword !== userFound.password) {
      res.status(401).json({ message: "Password or email incorrect" });
      return;
    }

    const secret = process.env.JWT_SECRET;

    if (secret.length < 10) {
      throw new Error("JWT_SECRET is less than 10 characters");
    }

    const jwt = jsonwebtoken.sign(
      {
        name: userFound.name,
        email: userFound.email,
        id: userFound.id_user,
        rol: userFound.rolIdRol.toLowerCase(),
      },
      secret
    );
    res.status(200).json({
      message: "Login successful",
      jwt: jwt,
      id_user: userFound.id_user,
      name: userFound.name,
      surname: userFound.surname,
      email: userFound.email,
      phone: userFound.phone,
      address: userFound.address,
      rolIdRol: userFound.rolIdRol,
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  authLoginController,
  authRegisterController,
};
