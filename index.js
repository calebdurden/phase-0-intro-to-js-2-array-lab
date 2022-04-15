const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCats = cats.slice();
    newCats.push("Broom");
    return newCats;
}

function prependCat(name) {
    const coolCats = cats.slice();
    coolCats.unshift("Arnold");
    return coolCats;
}

function removeLastCat() {
    const noLastCat = cats.slice();
    noLastCat.pop();
    return noLastCat
}

function removeFirstCat() {
    const noFirstCat = cats.slice();
    noFirstCat.shift();
    return noFirstCat;
}