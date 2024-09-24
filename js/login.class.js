class Login {
    #prenom = "";
    #nom = "";
    #email = "";

    constructor(prenom, nom, email) {
        this.#setNom(nom);
        this.#setPrenom(prenom);
        this.#setEmail(email);
    }

    // ---------------- Getter & Setter ---------------- // 

    getPrenom() {
        return this.#prenom;
    }

    #setPrenom(prenom) {
        if (!prenom) throw new Error("Erreur : 'prénom' est incorrect");
        if (typeof(prenom) !== "string") throw new Error("Erreur : 'prénom' doit être une chaîne");
        if (prenom.length < 2) throw new Error("Erreur : Le prénom doit contenir plus de 2 caractères");
        this.#prenom = prenom; // Correction ici
    }

    getNom() {
        return this.#nom;
    }

    #setNom(nom) {
        if (!nom) throw new Error("Erreur : 'nom' est incorrect");
        if (typeof(nom) !== "string") throw new Error("Erreur : 'nom' doit être une chaîne");
        if (nom.length < 2) throw new Error("Erreur : 'nom' doit comporter au moins 2 caractères");
        this.#nom = nom; // Correction ici
    }

    getEmail() {
        return this.#email;
    }

    #setEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            throw new Error("Erreur : 'email' invalide");
        }
        this.#email = email;
    }

    // ---------------- Méthodes Applicatives ---------------- // 

    afficher() {
        console.log(this.toString);
    }

    toString() {
        return ("Nom : " + this.#nom + " Prénom : " + " E-mail : "+this.#email)
    }

    
}
