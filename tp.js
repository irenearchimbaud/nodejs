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
        words += 
    }
}

function rendreMonnaie(montant) {

    const billetMax = 50;

    const billets = [500, 200, 100, 50, 20, 10, 5]

    const billetsValables = []

    const 

    for (const i of billets) {
        if(billetMax < i) {
            return
        } else {
            billetsValables.push(i)
        }
    }


    
}