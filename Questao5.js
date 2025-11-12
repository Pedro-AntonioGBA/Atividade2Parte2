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
