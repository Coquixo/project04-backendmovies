const express = require("express");
const router = express.Router();

const MoviesRoutes = require("./views/moviesRoutes");
const SeriesRoutes = require("./views/seriesRoutes");
const userRoutes = require("./views/userRoutes");
const orderRoutes = require("./views/orderRoutes");
const AuthRoutes = require("./views/authRoutes");
const { authBearerMiddleware } = require("./middlewares/authMiddleware");

//middleware para las rutas de auth
router.use("/auth", AuthRoutes);

//middleware para las rutas de movie
router.use("/movies", MoviesRoutes);
//middleware para las rutas de serie
router.use("/series", SeriesRoutes);
//middleware para las rutas de authBarer
router.use(authBearerMiddleware);
//middleware para las rutas de user
router.use("/users", userRoutes);
//middleware para las rutas de order
router.use("/orders", orderRoutes);

module.exports = router;
