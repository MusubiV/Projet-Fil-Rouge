"use strict";

// Récupérer le panier depuis le localStorage
let texte = localStorage.getItem("panierBD");

// Convertir le texte en objet JSON
let panierBD = JSON.parse(texte);
let i = 0;

// Parcourir tout les elements du panier
for (const item of panierBD) {
  
  // Récupérer l'objet album correspondant à la clé
  let album = albums.get(panierBD[i]); 




  


console.log(album)
  // Créer un élément HTML pour l'album
  let divAlbum = document.createElement("div");
  let serie = series.get(album.idSerie);
  let auteur = auteurs.get(album.idAuteur);
  let imgBD = serie.nom + "-" + album.numero + "-" +album.titre + ".jpg";
  console.log(imgBD);
  // Ajouter les informations de l'album à la div
  divAlbum.innerHTML = `
    <fieldset>
    <img src ="albumsMini/${serie.nom.replace(/'|!|\?|\.|"|:|\$/g, "")}-${album.numero}-${album.titre.replace(/'|!|\?|\.|"|:|\$/g, "")}.jpg"></fieldset>
    <h4>${serie.nom}</h4>
    <p>${album.titre}</p>
    <p>Numéro: ${album.numero}</p>
    <p>Auteur: ${auteur.nom}</p>
    <p>Prix: ${album.prix}</p>
  `;
  i++;
  // Ajouter la div à la page
  document.body.appendChild(divAlbum);
} 



  // Lire l'événements du clic sur le bouton test
 document.getElementById("btn-monpanier").addEventListener("click", (event) => {

    let nombreA = creerNombreAleatoire();
    
    if (albums.has(nombreA)){
      let nouvelleBD = nombreA;
  
         // /!\ A changer - doit recuperer la valeur de la BD Ajouter (nom numéro img etc)
      ajouterBD(nouvelleBD);
    }
    else {console.log("n'existe pas");}
    
  });

  document.getElementById("btn-supprimertout").addEventListener("click", (event) => {

    supprimerBDPanier();

  })

  
/* Fonction d'ajout d'une nouvelle BD
*
*
*/
function ajouterBD(nouvelleBD, nombreA) {
  // Creer la liste panierBD
  //localStorage.setItem("panierBD", JSON.stringify(panierBD));
  let panierBD = JSON.parse(localStorage.getItem("panierBD"));

  
  // Ajouter le nouvel élément
  panierBD.push(nouvelleBD);

  // Mettre à jour la liste dans le localStorage
  localStorage.setItem("panierBD", JSON.stringify(panierBD));
  location.reload();
}


/* /!\/!\/!\/!\/!\/!\/!\ A FAIRE : LA CONFIMRMATION DE SUPPRESSION
* Remet a zero le panierBD 
*
*/
function supprimerBDPanier() {

  localStorage.setItem("panierBD", JSON.stringify([]));
    location.reload();

}


function creerNombreAleatoire(){
  let nombreAleatoire = Math.floor(Math.random() * 629) + 1;
  return nombreAleatoire.toString();
}








//
var divListe = document.getElementById("panier-BD");


