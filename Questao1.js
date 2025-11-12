const usuario = {
  nome: 'Ana Silva',
  idade: 30,
  habilidades: ['JavaScript', 'React', 'Node.js'],
  ativo: true,
};

let usuario1 = JSON.stringify(usuario);
console.log(usuario1);

usuario1 = JSON.parse(usuario1);
console.log(usuario1);
