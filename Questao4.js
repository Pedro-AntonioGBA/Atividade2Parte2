function formatacao (objeto){
    return `${objeto.rua}, ${objeto.numero} - ${objeto.cidade} - CEP: ${objeto.cep}`
}


const endereco = {
rua: "Av. Paulista",
numero: 1000,
cidade: "São Paulo",
cep: "01310-100"
};

console.log(formatacao(endereco));
