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

console.log(string);
