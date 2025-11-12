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
