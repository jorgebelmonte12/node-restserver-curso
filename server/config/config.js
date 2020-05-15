// ================================
//   PUERTO
// ================================

process.env.PORT = process.env.PORT || 3000;


// ================================
//   ENTORNO
// ================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; //<< Variable de heroku para saber donde estamos

// ================================
//   Base de datos
// ================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    urlDB = 'mongodb+srv://strider:wmzB3ROJLtLQ3hG9@cluster0-ahxtl.mongodb.net/cafe';
}

process.env.URLDB = urlDB;