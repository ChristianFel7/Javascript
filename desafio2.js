function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  alert(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

let x;
let y;
x = prompt("Digite o numero de vitorias");

y = prompt("Digite o numero de derrotas");

calcularNivel(x, y);
