class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque genérico";
        break;
    }

    alert(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso
let nome, tipo, idade;
nome = prompt("Digite o nome");
idade = prompt("Digite a idade");
tipo = prompt("Digite o tipo");
const heroi1 = new Heroi(nome, idade, tipo);
heroi1.atacar(); 
