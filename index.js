/**
 *  Serveur Backend Pokedex
 */

console.log("Hello World!");

// Définir l'emplacement des fichiers bases de données 
const POKEDEX = "./DATA/pokedex.json";

//définir l'emplacement des images
const IMAGES_SRC = "./FILES/images";

//Définir un port
const port = 5001;

// ***********************************************************
//lancer un serveur express sur un port défini
const fs = require('fs');
const express = require('express');
const app = express();

//Lancement du serveur et attendre
app.listen(
    port,
    '127.0.0.1',
    () => {
        console.log('Server pokedex is listening on ' + port);
    }
)

//crée la route qui renvoie tout
app.get(
    '/',
    findAllPokemon
)

// fonction

function findAllPokemon(request, response) {
    //1. Lecture du fichier
    let data = fs.readFileSync(POKEDEX);

    //2. Analyse du JSON
    let pokedex = JSON.parse(data);
    console.log(pokedex);
    //3. Renvoie toute le json interprété
    response.send(pokedex);
}

app.get(
    '/',
    findRandomPokemon
)

function findRandomPokemon(request, response) {
    //1. Lecture du fichier
    let data = fs.readFileSync(POKEDEX);

    // Analyse du JSON
    let pokedex = JSON.parse(data);

    // Sélection d'un ID de Pokémon au hasard
    let randomId = Math.floor(Math.random() * 808) + 1; // Les ID de Pokémon vont de 1 à 808

    // Trouver le Pokémon par son ID
    if (pokedex.pokemon.id === randomId) {
        // Renvoie les informations du Pokémon
        return response.send(pokemon);
};