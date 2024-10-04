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

  /* Fonction d'ajout d'une nouvelle BD
*
*
*/
function ajouterBD(key) {
    let panierBD = JSON.parse(localStorage.getItem("panierBD")) || []; // Si panierBD est null, on initialise un tableau vide (premiere ligne est surtout la pour le debogage)
    console.log(panierBD);

    // Verifie si la key existe déjà dans le panierBD
    let index = panierBD.findIndex(item => item.numero === key);

    if (index !== -1) { // Si la clé existe déjà
        panierBD[index].quantité++; // Incrémenter la quantité
    } else { // Si la key n'existe pas
        panierBD.push({ numero: key, quantité: 1 }); // Ajouter la key avec une quantité de 1
    }

    // Met a jour la liste dans le localStorage
    localStorage.setItem("panierBD", JSON.stringify(panierBD));
}
