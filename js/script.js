document.addEventListener('DOMContentLoaded', function() {
    // verif login
    function checkLogin() {
        let loginText = document.getElementById('loginText');
        if (localStorage.getItem('statutConnexion') === 'true') {
            loginText.textContent = "Se déconnecter";
        } else {
            loginText.textContent = "Se connecter";
        }
    }

    // connecté / déconnecté
    window.toggleLogin = function() { 
        let statutConnexion = localStorage.getItem('statutConnexion') === 'true';
        if (statutConnexion) {
            alert('Déconnexion réussie !');
            localStorage.removeItem('statutConnexion');
            checkLogin();
        } else {
            openModal();
        }
    };

    // ouvrir popup
    function openModal() {
        let modal = document.getElementById("myModal");
        modal.classList.add("visible");
    }

    // fermer popup
    window.closeModal = function() {
        let modal = document.getElementById("myModal");
        modal.classList.remove("visible");
    }

    document.querySelector('#form').addEventListener('submit', function(event) {
        event.preventDefault();

        let email = document.querySelector('input[name="email"]').value;
        let password = document.querySelector('input[name="password"]').value;
        let users = JSON.parse(localStorage.getItem('identifiants')) || [];
        let user = users.find(u => u.email === email && u.password === password);

        // verif identifiants
        if (user) {
            alert('Connexion réussie !');
            localStorage.setItem('statutConnexion', 'true');
            closeModal();
            checkLogin();
        } else {
            alert('Email ou mot de passe incorrect.');
        }
    });
    checkLogin();
});

    document.querySelector('#form-inscription')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="password"]').value;

    // recup identifiants
    let users = JSON.parse(localStorage.getItem('identifiants')) || [];

    // verif email existant
    if (users.some(user => user.email === email)) {
        alert('Cet email est déjà utilisé. Veuillez en choisir un autre.');
        return;
    }

    // créer id
    let identifiant = {
        email: email,
        password: password
    };

    // ajouter id
    users.push(identifiant);

    // stocker id dans localstorage
    localStorage.setItem('identifiants', JSON.stringify(users));
    
    alert('Inscription réussie !');
    window.location.href = './index.html';
});
