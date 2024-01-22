alert('Boas vindas ao jogo Classificador de Nível de Herói');
let name;
let xp;
let nivel;

name = prompt('Digite o nome do personagem');
xp = prompt('Digite o xp do personagem');

if(xp<1000){
  nivel = "Ferro";    
} else if (xp>1000 && xp<=2000){
  nivel = "Bronze";
}else if (xp>2000 && xp<=5000){
  nivel = "Prata";
}else if (xp>5000 && xp<=7000){
  nivel = "Ouro";
}else if (xp>7000 && xp<=8000){
  nivel = "Platina";
}else if (xp>8000 && xp<=9000){
  nivel = "Ascendente";
}else if (xp>9000 && xp<=10000){
  nivel = "Imortal";
}else{
  nivel = "Radiante";
}
  
alert(`O Herói de nome ${nome} está no nível de ${nivel}.`);
