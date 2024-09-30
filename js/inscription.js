    // fonction pour l'inscription
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

    // déclaration des variables
    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="password"]').value;

    // créer objet mail/mdp
    let identifiant = {
        email: email,
        password: password
    };

    // stocker objet clé localstorage
    localStorage.setItem('identifiant', JSON.stringify(identifiant));
    
    alert('Inscription réussie !');

    // redirection
    window.location.href = './connexion.html'
});

// todo : clé avec plusieurs valeurs, deuxieme clé vérifier si compte deja créée