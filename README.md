# Proyecto VideoClub API

##  API de un videoclub.
***
<img src="./img/tablas.PNG" width="600em"/><br>
***

## Pre-requisitos del proyecto para hacerlo funcionar en tu equipo local:

* Instalar **Nodejs** en nuestro equipo, descargándolo de su página oficial
https://nodejs.org/

* Clonar el proyecto en nuestro equipo con git bash:
```
$git clone 'https://github.com/JavierMoyaSimo/project04-backendmovies.git'
```

* Instalar todas las dependecias con el siguiente comando:
```
npm i
```

* Arrancamos el servidor con el siguiente comando:
```
npm run dev
```


## Endpoints

* **Movies**
    * **LISTADO DE TODAS LAS PELICULAS**: GET- http://localhost:3000/movies/
    * **LISTADO DE PELICULAS TOP RATED**: GET- http://localhost:3000/movies/topMovies
    * **PELICULA SEGUN SU ID**: GET- http://localhost:3000/movies/id/:id
    * **PELICULA SEGUN SU TITULO**: GET- http://localhost:3000/movies/title/:title
    * **PELICULA SEGUN SU GENERO**: GET- http://localhost:3000/movies/genre/:genre

* **Series**
    * **LISTADO DE TODAS LAS SERIES**: GET- http://localhost:3000/series/
    * **LISTADO DE SERIES TOP RATED**: GET- http://localhost:3000/series/topSeries
    * **SERIES SEGUN SU ID**: GET- http://localhost:3000/series/id/:id
    * **SERIES SEGUN SU TITULO**: GET- http://localhost:3000/series/title/:title
    * **SERIES SEGUN SU GENERO**: GET- http://localhost:3000/series/genre/:genre
    * **LISTADO SERIES SEGUN CAPITULO PROXIMOS 7 DIAS**: GET- http://localhost:3000/series/nextsevendays
    * **LISTADO SERIES SEGUN PASE EN TEATRO**: GET- http://localhost:3000/series/theater
    * **LISTADO SERIES SEGUN PASE EN CINE**: GET- http://localhost:3000/series/cine

* **Orders**
    * **GENERAR UN NUEVO PEDIDO (PELICULA)**: POST- http://localhost:3000/orders/newOrderMovie
    * **GENERAR UN NUEVO PEDIDO (SERIE)**: POST- http://localhost:3000/orders/newOrderSerie
    * **MODIFICAR DATOS DE UN PEDIDO**: PATCH- http://localhost:3000/orders/updateOrder
    * **LISTAR TODOS LOS PEDIDOS DE UN USUARIO**: GET- http://localhost:3000/orders/orders/:id
    * **LISTAR TODOS LOS PEDIDOS HECHOS EN LA APLICACION(sólo puede realizarlo el admin)**: GET- http://localhost:3000/orders/appOrders

* **Users**
    * **MOSTRAR DATOS DE USUARIO SEGUN MAIL**: GET- http://localhost:3000/users/user/:mail
    * **MODIFICAR DATOS DE USUARIO**: PATCH- http://localhost:3000/users/updateUser/:mail
    * **BORRAR UN USUARIO(solo puede hacerlo el admin)**: DELETE- http://localhost:3000/users/deleteUser/:mail

* **Auth**
    * **REGISTER**: POST- http://localhost:3000/auth/register
    * **LOGIN**: POST- http://localhost:3000/auth/login

    
## Tecnologías utilizadas en el proyecto:
Todo esto, se instalará cuando ejecutemos el comando npm i que hemos citado anteriormente:

* **express**: Instalamos express en nuestro proyecto:
```
npm install express
```
* **nodemon**: Instalamos nodemon en nuestro proyecto.
 También añadimos en nuestro **package.json** un script para poder ejecutarlo:
```
npm install nodemon
```
```
//AÑADIDO EN PACKAGE.JSON
"dev": "nodemon index.js"
```
```
//EJECUTAMOS EN TERMINAL
npm run dev
```
* **sequelize**: Instalamos sequelize en nuestro proyecto, haciendo que podamos conectarnos y manipular la base de datos.
```
npm install sequelize-cli -g
npm install --save sequelize mysql2 sequelize-cli
sequelize init

```
* **jsonwebtoken**: Instalamos jsonwebtoken en nuestro proyecto para gestionar uso de tokens:
```
npm install jsonwebtoken
```


## Explicación de la estructura del proyecto

Usamos el modelo vista-controlador para estructurar el proyecto.
 **Creamos un CRUD básico**. En el proyecto existirá la siguiente estructura:

* **index.js**: Este es el archivo principal. En este archivo nos traemos todo lo necesario para que nuestra API funcione y se arranca el servidor.

* **config**
    * **config.json**: En este archivo se gestiona la configuración para conectar con la base de datos. 
    Se crea de manera automática con **sequelize**(paralelamente, tendremos un archivo .env, el cual meteremos en el .gitignore, con lo cual no se podrá ver desde Github).
   
* **middlewares**
    * **authMiddleware.js**: En este archivo se gestiona el Middleware de autenticacion del token.


* **db.js**: En este archivo se gestiona el acceso a la base de datos.

* **router.js**: En este archivo se gestiona las diferentes vistas que puede tener la aplicación. Se creará una ruta por cada tabla de la base de datos a la que queramos acceder.

* **views**
    * **authRoutes.js**: En este archivo gestionamos la ruta /auth y los endpoints que apuntan a dicha ruta.
    * **moviesRoutes.js**: En este archivo gestionamos la ruta /movies y los endpoints que apuntan a dicha ruta.
    * **orderRoutes.js**: En este archivo gestionamos la ruta /orders y los endpoints que apuntan a dicha ruta.
    * **seriesRoutes.js**: En este archivo gestionamos la ruta /orders y los endpoints que apuntan a dicha ruta.
    * **userRoutes.js**: En este archivo gestionamos la ruta /users y los endpoints que apuntan a dicha ruta.
    
    

* **controllers**

    * **authControllers.js**: En este archivo creamos las funciones de cada endpoint:
         * **authRegisterController**: Registra un usuario.
         * **authLoginController**: Login de un usuario
    * **moviesControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **getMovies**: Obtenemos un listado de todas las películas.
        * **getTopMovies**: Obtenemos un listado de las películas mejor puntuadas(rating : 5).
        * **getMovieById**: Obtenemos la película buscada por ID.
        * **getMovieByTitle**: Obtenemos la películas filtrada por el titulo.
        * **getMoviesByGenre**: Obtenemos un listado de las películas filtrado por el género.   
    * **orderControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **postNewOrderMovie**: Creamos un pedido de una película nuevo. 
        * **postNewOrderSerie**: Creamos un pedido de una serie nuevo. 
        * **updateOrder**: Modificamos los datos de un pedido(Modificaremos la fecha de rentig).
        * **getOrdersByUser**: Obtenemos un listado de todos los pedidos realizados por un usuario.        
        * **getAppOrders**: Lista de todos los pedidos realizados en la aplicación (securizado para que solo pueda acceder un administrador).
   
   * **seriesControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **getSeries**: Obtenemos un listado de todas las series.
        * **getTopSeries**: Obtenemos un listado de las series mejor puntuadas(rating : 5).
        * **getSerieById**: Obtenemos la serie buscada por ID.
        * **getSerieByTitle**: Obtenemos la serie filtrada por el titulo.
        * **getSeriesByGenre**: Obtenemos un listado de las series filtrado por el género. 
        * **getSeriesNextDays**: Obtenemos un listado de las series filtrado por si tendrán capítulo los próximos 7 días. 
        * **getSeriesNextTheater**: Obtenemos un listado de las series filtrado por si tendrán pase en teatros.
        * **getSeriesNextCine**: Obtenemos un listado de las series filtrado por si tendrán pase en cines.

   * **userControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **getUserByMail**: Obtenemos un usuario por mail.
        * **updateUser**: Actualizamos un usuario(sólamente podrá acceder el propio usuario)
        * **deleteUser**: Eliminamos un usuario(Opción solo para el admin)
        
* **migrations**
    * **20221101173334-create-article-table.js**: 
    * **20221101173433-create-movie-table.js**: 
    * **20221101173457-create-serie-table.js**:
    * **20221101173516-create-rol-table.js**:  
    * **20221101173554-create-user-table.js**:
    * **20221101173617-create-order-table.js**:  


* **models**
    * **article.js**: 
    * **index.js**: Gestiona la conexión con la base de datos.
    * **movie.js**: 
    * **order.js**: 
    * **rol.js**: 
    * **serie.js**: 
    * **user.js**: 
* **seeders**:
    * **1-20221105123220-create-article.js**: Generamos 45 articulos
    ```
    ```
    * **2-20221105124921-create-rol.js**: Generamos los roles que tendrán los usuarios("user" y "rol")
    ```
    ```
    * **3-20221103182355-create-movie.js**: Generamos 27 películas distintas
    ```
    ```
   * **4-20221103195105-create-serie.js**: Generamos 18 series distintas
    ```
    ```

* **.gitignore**: Archivo en el que se indica que archivos no se subirán a nuestro repositorio. Está editado de la siguiente manera:
```
/node_modules
.env
/config/config.json
```

## Explicación de la securización de la API:
- En primer lugar, un usuario se registrará(entre otras cosas, con su email y password).
- La contraseña se encriptará y se guardará en base de datos.
- Al logearse, gestionamos la comparación entre la contraseña introducida en el login(también encriptada) y la contraseña que habíamos guardado previamente en nuestra base de datos.
- Una vez hagamos el login, obtendremos un Token, el cual usaremos para tener acceso a los distintos endpoints privados.

