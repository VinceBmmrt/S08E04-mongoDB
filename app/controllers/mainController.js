const database = require("../database.js");

const mainController = {
    homepage: async (request, response) => {
        // on veut récupérer les données qui proviennent de la db avant eds les envoyer à la vue

        // l'objet database est une promesse, donc on aoute async/await
        const db = await database;
        const pokemons = await db.collection("pokedex")
            .find({}, {name:1})
            .sort({name:1})
            .toArray();
        // on veut tous les pokemons donc on ne mets rien dans les premières accolades du .find
        // on veut faire une projection pour ne garder que les noms des pokemons (second paramètre du .find)
        // on trie les pokemons par nom
        // .toArray() = méthode pour transformer le résultat en tableau pour pouvoir itérer dessus 

        console.log(pokemons);

        response.render('homepage.ejs', { pokemons });
    }
}

module.exports = mainController;