function addition(a, b) {
    return a + b;
}

function arrayNumber(array) {
    if (array.length === 0 && !Array.isArray(array) && !arr.every(num => typeof num === 'number')) {
        return null;
    }

    return Math.max(...array);
}

function transformNumberToString(number) {
    const united = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
    const numberDizaines = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    const dizaines = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"];

    if (n === 0) return "zéro";
    
    let words = "";

    if(number >= 1000) {
        const arrondi = Math.floor(number / 1000);
        words += 1
    }

}

function rendreMonnaie(montant, billetMax) {

    const billets = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    
    const billetsValables = billets.filter(billet => billet <= billetMax);
    
    const rendu = {};

    if (!(/^\d+(\.\d{1,2})?$/.test(montant) && billets.includes(billetMax))) {
        console.log("montant ou billet max invalides")
        return;
    }
    
    for (const billet of billetsValables) {
        if (montant >= billet) {
            const nombre = Math.floor(montant / billet);
            rendu[billet] = nombre;
            montant = (montant - nombre * billet).toFixed(2);
        }
    }

    for (const [key, value] of Object.entries(rendu)) {

        unite = ""

        if (key >= 5) {
            unite = value > 1 ? "billets" : "billet";
        } else {
            unite = value > 1 ? "pièces" : "pièce";
        }
        console.log(`${value} ${unite} de ${key}`);
      }
}

function testObject() {
    const original = {
        a : 1,
        b: {c: 2}
    }

    const clone = {
        ...original
    }

    const clone2 = {
        ...original,
    }

    clone2.b.c = 5

    console.log(clone, clone2)
}

function chargerDonnees(id, callback) {
    console.log("chargement des données");

    
}