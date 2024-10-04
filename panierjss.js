"use strict";


//console.log(albums.get("1"));

//(reset la valeur en cas de bug)
if (!localStorage.getItem("panierBD"))localStorage.setItem("panierBD", JSON.stringify([]));
//localStorage.setItem("prix",JSON.stringify([]));

// Récupérer le panier depuis le localStorage
let texte = localStorage.getItem("panierBD");

//console.log(texte);
// Convertir le texte en objet JSON
let panierBD = JSON.parse(texte);
let i = 0;
var prixTotal=0;
let test = "";
let sousTotala = 0;
let prix = "";
let divAlbum = document.createElement("div");





for (const item of panierBD) {
  

  let album = albums.get(panierBD[i].numero); 

console.log(album)

  let divAlbum = document.createElement("div");
  let serie = series.get(album.idSerie);
  let auteur = auteurs.get(album.idAuteur);
  let imgBD = serie.nom + "-" + album.numero + "-" +album.titre + ".jpg";





  let quantiteStockee = panierBD[i].quantité;

  let selectHTML = `
    <select class="quantity-select" data-index="${i}">
      `;

  for (let j = 0; j <= 5; j++) {
    selectHTML += `<option value="${j}" ${j === parseInt(quantiteStockee) ? 'selected' : ''}>${j}</option>`;
  }
  selectHTML += `</select>`;

  let sousTotal = album.prix * quantiteStockee;
  divAlbum.innerHTML = `
    <div class="carte">
      <div class="contenu-carte">
      <img src ="albumsMini/${serie.nom.replace(/'|!|\?|\.|"|:|\$/g, "")}-${album.numero}-${album.titre.replace(/'|!|\?|\.|"|:|\$/g, "")}.jpg" class="carteimg">
      <h4>${serie.nom} , ${album.titre}</h4>
      <p</p>
      <p>Numéro: ${album.numero}</p>
      <p>Auteur: ${auteur.nom}</p>
      <p>Prix: ${album.prix + "€"} </p>
      <div class="quantity-container">
<!--- -->     
      <label for="quantitySelect">Quantité: </label>
       ${selectHTML}   
<!--- -->
      </div>
      <div class="prix-totalbd">
        <p class="prix-total" value="${parseFloat(sousTotal).toFixed(2)}">Sous-total : ${parseFloat(sousTotal).toFixed(2)}€ </p>
      </div>
      <button class="btn-supprBD" data-index="${i}" data-key="${panierBD[i]}" onclick="ouvrirModal(this)">supprimer la bd</button>
      </div>
      <p></p>
    </div>
  `;
  divAlbum.querySelector('.prix-total').value = parseFloat(sousTotal).toFixed(2);
  document.getElementById('total-prix').textContent = `Prix total : ${prixTotal.toFixed(2)}€`; 
  divAlbum.querySelector('.quantity-select').addEventListener('change', function() {

  let nouvelleQuantite = parseInt(this.value, 10);
  let sousTotal = album.prix * nouvelleQuantite;
  divAlbum.querySelector('.prix-total').textContent = `Sous-total : ${parseFloat(sousTotal).toFixed(2) + "€"}`;
  divAlbum.querySelector('.prix-total').value = parseFloat(sousTotal).toFixed(2);
 
  calculerPrixTotal();

 
});

prix = sousTotal



i++;
  document.getElementById("panier-BD").appendChild(divAlbum);

} 


 document.getElementById("btn-monpanier").addEventListener("click", (event) => {

    let nombreA = creerNombreAleatoire();
    let nouvelleQuantite = creerQuantiteAleatoire();

    if (albums.has(nombreA)){
      let nouvelleBD = nombreA;
      ajouterBDr(nouvelleBD , nouvelleQuantite);
    }
    else {console.log("n'existe pas");}
    
  });
  document.getElementById("btn-supprimertout").addEventListener("click", (event) => {
    supprimerTOUTBDPanier();
  })



  calculerPrixTotal()
  
  



































// Gestion des événements du modal
document.getElementById("confirmDelete").addEventListener("click", confirmerSuppression);
document.getElementById("cancelDelete").addEventListener("click", fermerModal);
document.querySelector(".close").addEventListener("click", fermerModal);






// Modifier l'écouteur d'événement "change" pour les éléments quantity-select
document.querySelectorAll(".quantity-select").forEach(function(selectElement) {
  selectElement.addEventListener("change", function(event) {
    // Vérifier si la valeur sélectionnée est 0
    let index = event.target.dataset.index;
 //   console.log(index);
    var boutonSupprBD = selectElement.closest('.carte').querySelector('.btn-supprBD'); 
    
    let panierBDqte = panierBD[index].quantité;
  //  console.log(panierBDqte);
  

    if (event.target.value != panierBDqte){
      
    }

    if (event.target.value === "0") {
      // Ouvrir le modal de confirmation
      ouvrirModal(boutonSupprBD); 
    }
  });
});



function ouvrirModal(boutonSupprBD) {
  document.getElementById("confirmationModal").style.display = "block";
  // Stocker le bouton Supprimer dans une variable globale pour l'utiliser plus tard
  window.boutonASupprimer = boutonSupprBD;
  
}

// Fonction pour fermer le modal
function fermerModal() {
  document.getElementById("confirmationModal").style.display = "none";
  location.reload();
}

// Fonction pour confirmer la suppression
function confirmerSuppression() {
  // Exécuter la fonction de suppression (remplacez par votre code)
  supprimerBDpanier(window.boutonASupprimer);
  fermerModal();
}











function calculerPrixTotal() {
  let prixTotal = 0;

  for (let i = 0; i < panierBD.length; i++) {

    let sousTotal = parseFloat(document.querySelectorAll('.prix-total')[i].value);
    console.log(sousTotal);
    prixTotal += parseFloat(sousTotal);
  }

  document.getElementById('total-prix').textContent = `Prix total : ${parseFloat(prixTotal).toFixed(2)}€`; 
}




/* Fonction d'ajout d'une nouvelle BD
*
*
*/
function ajouterBDr(nouvelleBD , nouvelleQuantite) {
  let panierBD = JSON.parse(localStorage.getItem("panierBD"));




  panierBD.push(({numero:nouvelleBD,quantité:nouvelleQuantite}));

  console.log(panierBD.numero);

  
  // Mettre à jour la liste dans le localStorage
  localStorage.setItem("panierBD", JSON.stringify(panierBD));
  location.reload();
}


/* /!\/!\/!\/!\/!\/!\/!\ A FAIRE : LA CONFIMRMATION DE SUPPRESSION
* Remet a zero le panierBD 
*
*/
function supprimerTOUTBDPanier() {
  localStorage.setItem("panierBD", JSON.stringify([]));
    location.reload();

}


// test pour le bouton suppr par bd
function supprimerBDpaniear(index){
  localStorage.setItem(panierBD[index]);
  document.getElementById("panier-BD").children[index].remove();
}



// deuxieme test pour le bouton suppr par bd directement depuis le bouton
function supprimerBDpanier(button) {
  let index = button.dataset.index; 
  let panier = localStorage.getItem("panierBD");
  panier = JSON.parse(panier);
  panier.splice(index, 1);
  localStorage.setItem("panierBD", JSON.stringify(panier));
  location.reload(); 
}


function creerNombreAleatoire(){
  let nombreAleatoire = Math.floor(Math.random() * 629) + 1;
  return nombreAleatoire.toString();
}
function creerQuantiteAleatoire(){
  let nombreAleatoire = Math.floor(Math.random() * 5) + 1;
  return nombreAleatoire.toString();
}





