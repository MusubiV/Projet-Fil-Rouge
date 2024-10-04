if (!localStorage.getItem("panierBD"))localStorage.setItem("panierBD", JSON.stringify([]));
const boutons = document.querySelectorAll(".btn-ajoutbd");

boutons.forEach(bouton => { // Boucle sur chaque bouton
    bouton.addEventListener("click", function() { // Ajoute l'événement "click"
      // Code à exécuter lorsque le bouton est cliqué
    console.log(this.value);
      console.log("yo");
        ajouterBD(this.value)
        


    });
  });


let texte = localStorage.getItem("panierBD");
let panierBD = JSON.parse(texte);
let i = 0;


let panierBDi = JSON.parse(localStorage.getItem("panierBD"))

const container = document.getElementById("carte-container");

// Clear the existing content of the container
container.innerHTML = ''; 


for (const item of panierBD) {
  let album = albums.get(item.numero);

  if (album) {
    let divAlbum = document.createElement("div");
    divAlbum.classList.add("carte"); // Ajoute la classe "carte" pour le style

    let serie = series.get(album.idSerie);
    let auteur = auteurs.get(album.idAuteur);
    let imgBD = serie.nom + "-" + album.numero + "-" + album.titre + ".jpg";

    // Image
    let imgElement = document.createElement("img");
    imgElement.src = `albumsMini/${serie.nom.replace(/'|!|\?|\.|"|:|\$/g, "")}-${album.numero}-${album.titre.replace(/'|!|\?|\.|"|:|\$/g, "")}.jpg`;
    imgElement.classList.add("panierImg");
    imgElement.alt = album.titre;

    // Croix pour supprimer la carte
    let closeButton = document.createElement("span");
    closeButton.classList.add("close-button");
    closeButton.textContent = "X"; // Utilisez un "X" pour la croix
    closeButton.dataset.index = i; // Stocker l'index dans un attribut de données

    // Titre
    let titleElement = document.createElement("h3");
    titleElement.textContent = album.titre + " x" + panierBD[i].quantité;

    // Prix
    let prixElement = document.createElement("h5");
    let sousTotal = album.prix * panierBD[i].quantité 
    prixElement.textContent = "Sous-total: " + parseFloat(sousTotal).toFixed(2) + "€";

    // Fonction pour supprimer la carte et l'élément du panierBD
    closeButton.addEventListener("click", () => {
      // Supprimer la carte de la page
      //divAlbum.remove();

      // Récupérer l'index à partir de l'attribut de données
      const index = parseInt(closeButton.dataset.index, 10);

      // Supprimer l'album du panierBD
      panierBD.splice(index, 1);
      location.reload();
      // Mettre à jour le localStorage
      localStorage.setItem("panierBD", JSON.stringify(panierBD));
    });

    // Ajout des éléments à la carte
    divAlbum.appendChild(closeButton);
    divAlbum.appendChild(imgElement);
    divAlbum.appendChild(titleElement);
    divAlbum.appendChild(prixElement);
   

    i++;

    // Ajout de la carte au container
    container.appendChild(divAlbum);
  }
}

  
   










function supprimerBDpanier(button) {
    let index = button.dataset.index; 
    let panier = localStorage.getItem("panierBD");
    panier = JSON.parse(panier);
    panier.splice(index, 1);
    localStorage.setItem("panierBD", JSON.stringify(panier));
    location.reload(); 
  }
  














     /* Fonction d'ajout d'une nouvelle BD
*
*
*/
function ajouterBD(key) {
    let panierBD = JSON.parse(localStorage.getItem("panierBD")) || []; // Si panierBD est null, on initialise un tableau vide (premiere ligne est surtout la pour le debogage)
    console.log(panierBD);

    // Verifie si la key existe déjà dans le panierBD
    let index = panierBD.findIndex(item => item.numero === key);

    if (index !== -1) { // Si la key existe déjà
        panierBD[index].quantité++; // Incrémenter la quantité
    } else { // Si la key n'existe pas
        panierBD.push({ numero: key, quantité: 1 }); // Ajouter la key avec une quantité de 1
    }
    location.reload();
    // Met a jour la liste dans le localStorage
    localStorage.setItem("panierBD", JSON.stringify(panierBD));
}
