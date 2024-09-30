    // fonction connexion
    document.querySelector('#form').addEventListener('submit', function(event) {
        event.preventDefault();

    // récuperer données
    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="password"]').value;
    let id = localStorage.getItem('identifiant');

    // vérification données
    if (id) {
        let identifiant = JSON.parse(id); 

        // vérification mail/mdp
        if (email === identifiant.email && password === identifiant.password) {
            alert('Connexion réussie !');
            window.location.href = './index.html';
        } else {
            alert('Email ou mot de passe incorrect.');
        }
    } else {
        alert('Aucun utilisateur enregistré.');
    }
});

// todo : popup pour connexion et garder connexion sur toutes les pages avec deuxieme clé qui vérifie le localstorage 
