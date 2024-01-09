let xphero = 0
let vitorias = 0
let derrotas = 0
let pdl = 500


while (xphero < 10500) { vitorias+=3; pdl -=7;derrotas++
   xphero = (vitorias * pdl)-(derrotas * pdl)
   
let jogos = (vitorias + derrotas)
let winrate = (vitorias / jogos )*100

if(xphero <= 1000){
    console.log("O elo do herói é ferro, com " + xphero +  " pontos com " + winrate + "% de vitórias")
    }else if(1000 < xphero && xphero <= 2000){
    console.log("O elo do herói é Bronze! Melhorou com " + xphero +  " pontos com " + winrate + "% de vitórias")
    }else if(2000 < xphero && xphero <= 5000){
        console.log("O elo do herói é Prata! Boa sorte, muita sorte! Está com " + xphero +  " pontos com " + winrate + "% de vitórias")
    }else if(5000 < xphero && xphero <= 7000){
        console.log("O elo do herói é Ouro! Com " + xphero +  " pontos com " + winrate + "% de vitórias")
    }else if(7000 < xphero && xphero <= 8000){
        console.log("O elo do herói é Platina! Com " + xphero +  " pontos com " + winrate + "% de vitórias")
    }else if(8000 < xphero && xphero <= 9000){
        console.log("O elo do herói é Ascendente! Finalente um elo, com " + xphero +  " pontos com " + winrate + "% de vitórias")
    }else if(9000 < xphero && xphero <= 10000){
        console.log("O elo do herói é Imortal! Meu sonho! Com " + xphero +  " pontos com " + winrate + "% de vitórias")
    }else{
    console.log("O elo do herói é radiante " + xphero + " pontos com " + winrate + "% de vitórias")
    }
}

