class Bd {

    #titre = "";
    #numero = -0;
    #idSerie = "";
    #idAuteur = "";
    #prix = -0;

    /**
     * Informations sur la BD.
     * @param {string} titre 
     * @param {number} numero 
     * @param {number} idSerie 
     * @param {number} idAuteur 
     * @param {number} prix 
     */

    constructor(titre, numero, idSerie, idAuteur, prix){
        this.#setTitre(titre);
        this.#setNumero(numero);
        this.#setidSerie(idSerie);
        this.#setidAuteur(idAuteur);
        this.#setPrix(prix);
    }


   // ------ Getter & Setter ------ //

    #setTitre(titre){
        if (!titre) throw new Error("Erreur : champ 'titre' obligatoire.");
        if (titre.length < 3) throw new Error("Erreur : champ 'titre' doit contenir au moins 3 caractères.");
        if (typeof(titre) != "string") throw new Error("Erreur : champ 'titre' doit contenir une chaine.");
        this.#titre = titre;
    }

    getTitre(){
        return this.#titre;
    }

    #setNumero(numero){
        if (!numero) throw new Error("Erreur : champ 'numero' obligatoire.");
        if (numero <= 0) throw new Error("Erreur : champ 'numero' doit être superieur à 0.");
        if (typeof(numero) != "number") throw new Error("Erreur : champ 'numero' doit contenir un nombre.");
        this.#numero = numero;
    }

    getTitre() {
        return this.#titre;
    }

    #setidSerie(idSerie) {
        if (!idSerie) throw new Error("Erreur : champ 'idSerie' obligatoire.");
        if (idSerie <= 0) throw new Error("Erreur : champ 'idSerie' doit être superieur à 0.");
        if (typeof(idSerie) != "number") throw new Error("Erreur : champ 'idSerie' doit contenir un nombre.");
        this.#idSerie = idSerie;
    }

    getidSerie() {
        return this.#idSerie;
    }

    #setidAuteur(idAuteur) {
        if (!idAuteur) throw new Error("Erreur : champ 'idAuteur' obligatoire.");
        if (idAuteur <= 0) throw new Error("Erreur : champ 'idAuteur' doit être superieur à 0.");
        if (typeof(idAuteur) != "number") throw new Error("Erreur : champ 'idAuteur' doit contenir un nombre.");
        this.#idAuteur = idAuteur;
    }

    getidAuteur() {
        return this.#idAuteur;
    }

    #setPrix(prix) {
        if (!prix) throw new Error("Erreur : champ 'prix' obligatoire.");
        if (prix <= 0) throw new Error("Erreur : champ 'prix' doit être superieur à 0.");
        if (typeof(prix) != "number") throw new Error("Erreur : champ 'prix' doit contenir un nombre.");
        this.#prix = prix;
    }

    getPrix() {
        return this.#prix;
    }

    // ------ Méthodes Applicatives ------ //

    afficher() {
        console.log(this.toString);
    }

    toString() {
        return ("titre : " + this.#titre + "Numéro : " + this.#numero + "idSerie : " + this.#idSerie + "idAuteur : " + this.#idAuteur + "Prix : " + this.#prix);
    }

}