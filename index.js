// Definindo o nome e a quantidade de experiência (XP) do herói
const nomeDoHeroi = "Herói";
const xpDoHeroi = 7500;

// Função para determinar o nível do herói com base na quantidade de XP
function determinarNivel(xp) {
    let nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    return nivel;
}

// Determinando o nível do herói com base na XP
const nivelDoHeroi = determinarNivel(xpDoHeroi);

// Exibindo a mensagem com base no nível do herói
console.log(`${nomeDoHeroi} possui ${xpDoHeroi} XP e é ${nivelDoHeroi}.`);



