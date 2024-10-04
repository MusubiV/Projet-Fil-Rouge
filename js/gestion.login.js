let inputNom = document.getElementById("id_nom");
let inputPrenom = document.getElementById("id_prenom");
let inputMail = document.getElementById("id_mail");
let btnSubmit = document.getElementById("submit-id");
let liste = document.getElementById("affichage-id");
let erreur = document.getElementById("err-id");

// Abonner les boutons
btnSubmit.addEventListener("click", recupChamps);

var logList = localStorage.getItem("liste_des_login");
if (logList) {
    let tLog = logList.split(";");
    liste.innerHTML = "";
    for (let i in tLog) {
        var logJSON = JSON.parse(tLog[i]);
        var log = new Login(logJSON.Nom, logJSON.Prenom, logJSON.Email);
        liste.innerHTML += log.toString() + "<br>";
    }
}

function recupChamps(event) {
    event.preventDefault();

    var nom = inputNom.value;
    var prenom = inputPrenom.value;
    var email = inputMail.value;

    if (!nom || !prenom || !email) {
        erreur.innerText = "Tous les champs doivent être remplis.";
        return;
    }

    try {
        let utilisateur = new Login(nom, prenom, email);
        utilisateur.afficher();

        liste.innerHTML += utilisateur.toString() + "<br>";

        var serialUtilisateur = '{"Nom": "' + nom + '","Prenom": "' + prenom + '","Email": "' + email + '"}';
        var logList = localStorage.getItem("liste_des_login");
        if (logList) logList += ";" + serialUtilisateur;
        else logList = serialUtilisateur;
        localStorage.setItem("liste_des_login", logList);

        window.location.href = "index.html";

    } catch (err) {
        erreur.innerText = err.message;
    }
}
