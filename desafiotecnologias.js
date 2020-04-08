const usuarios = [
    {nome: "Carlos", tecnologias: ["HTML", 'CSS']},
    {nome: 'Jasmine', tecnologias: ["JavaScript", 'CSS']},
    {nome: 'Tuane', tecnologias: ["HTML", 'Node.js']}
]

function imprimeFrase(usuario){

    for(let i=0; i<usuario.length; i++){
        console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologias[0]}, ${usuario[i].tecnologias[1]}`)
    }
}

imprimeFrase(usuarios);