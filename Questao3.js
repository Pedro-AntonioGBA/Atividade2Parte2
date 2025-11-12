function precificacao(){
    let sacola = JSON.parse(produtosJSON);
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

let sacola = JSON.parse(produtosJSON);

console.log(precificacao(sacola))
