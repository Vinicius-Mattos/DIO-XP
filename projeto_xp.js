let nomeHeroi = "Goku"
let nivel = 15000

if(nivel <= 1000) {
    nivel = "Ferro"
}else if(nivel > 1000 && nivel <= 2000){
    nivel = "Bronze"
}else if(nivel > 2000 && nivel <= 5000){
    nivel = "Prata"
}else if(nivel > 5000 && nivel <= 7000){
    nivel = "Ouro"
}else if(nivel > 7000 && nivel <= 8000){
    nivel = "Platina"
}else if(nivel > 8000 && nivel <= 9000){
    nivel = "Ascendente"
}else if(nivel > 9000 && nivel <= 10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel)