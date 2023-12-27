// dans ce fichier on va se connecter à la BDD et renvoyer une instance de connexion

// on utilise le client mongoDB (fourni avec la librairie mongodb)
// npm i mongodb
const { MongoClient } = require("mongodb");

// Create a MongoClient
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb
const client = new MongoClient(process.env.DB_URL);

// on demande au client mongo de se connecter
// et une fois qu'on a la connexion, on demande au client de nous donner accès à la BDD "pokemon"
module.exports = client.connect().then(mongoClient => mongoClient.db("pokemon"));