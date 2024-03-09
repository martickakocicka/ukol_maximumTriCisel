//Napište funkci max3, která vrátí největší ze tří zadaných čísel.
//Opět se vyhněte použití funkce Math.max.


const max3 = (cislo1, cislo2, cislo3) => {
    let vysledek1Kola
    
    if (cislo1>cislo2) {
        vysledek1Kola = cislo1
    } else {
        vysledek1Kola = cislo2
    }

    if (vysledek1Kola>cislo3) {
        console.log("vitez je "+vysledek1Kola)
        return vysledek1Kola

    } else {
        console.log("vitez je "+cislo3)
        return cislo3
    }
}

console.log(max3(10, 20, 78))
console.log(max3(78, 20, 10))
console.log(max3(10, 78, 30))