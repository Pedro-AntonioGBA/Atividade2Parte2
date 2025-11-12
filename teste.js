/*
let x = 132e10
console.log(x);
console.log("Olá mundo");
*/

/*function posicao(nome, busca){
    let i = 0;
    for (let letra in nome){
        if (busca === nome[letra]){
            return i+1
        }
        i++
    }
    return "-1" 
}

let letra = posicao("maria","i")
console.log("A letra está na posição",letra)

var myDate = "19" + "67";
console.log(typeof(myDate));*/

/*const usuario = {
  nome: 'Ana Silva',
  idade: 30,
  habilidades: ['JavaScript', 'React', 'Node.js'],
  ativo: true,
};

let usuario1 = JSON.stringify(usuario);
console.log(usuario1);

usuario1 = JSON.parse(usuario1);
console.log(usuario1);

const jsonString = `{
  "usuarios": [
  {"nome": "Carlos", "email": "carlos@email.com"},
  {"nome": "Maria", "email": "maria@email.com"},
  {"nome": "João", "email": "joao@email.com"}
  ]
  }`;

let pessoas = JSON.parse(jsonString);

let string = ""

for (i of pessoas.usuarios){
    if (string != ""){
        string += ", "
    }
    string += i.email
}

console.log(string);*/

function precificacao(json){
    let sacola = JSON.parse(json);
    let string = ""
    
    for (i of sacola.produtos){

        if (i.preco > 50){
            if (string != ""){
            string += ", "
            }   
            string += i.nome;
        }
    }
    return string
}


const produtosJSON = `{
  "produtos": [
  {"nome": "Mouse", "preco": 25.90},
  {"nome": "Teclado", "preco": 89.90},
  {"nome": "Monitor", "preco": 450.00},
  {"nome": "Cabo USB", "preco": 15.00}
  ]
  }`;

console.log(precificacao(produtosJSON))

/*function formatacao (objeto){
    return `${objeto.rua}, ${objeto.numero} - ${objeto.cidade} - CEP: ${objeto.cep}`
}


const endereco = {
rua: "Av. Paulista",
numero: 1000,
cidade: "São Paulo",
cep: "01310-100"
};

console.log(formatacao(endereco));*/

function resumo(objeto){
    let entregues = 0
    let processando = 0
    let valorTotal = 0
    for (i of objeto.pedidos){
        valorTotal += i.total;
        if (i.status == "entregue"){
            entregues += 1;
        }else{
            processando += 1;
        }
    }
    return `${entregues} pedido(s) entregue(s), ${processando} pedido(s) em processamento. Valor total ${valorTotal} `
}

const pedidosJSON = `{
"pedidos": [
{"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
{"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
{"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
]
}`;

pedidos = JSON.parse(pedidosJSON);

console.log(resumo(pedidos));

function parseJSONSafe(jsonString) {
    try{
        return JSON.parse(jsonString);
    }catch{
        return null;
    }
}
// Teste com JSON inválido
const jsonInvalido = '{nome: "João", "idade": 30}'; // Falta aspas em "nome"

console.log(parseJSONSafe(jsonInvalido)); // Deve retornar null ou mensagem de erro