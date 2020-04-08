const usuarios = [
    {nome: "Carlos", tecnologias: ["HTML", "CSS"]},
    {nome: 'Jasmine', tecnologias: ["JavaScript", 'CSS']},
    {nome: 'Tuane', tecnologias: ["HTML", 'Node.js']}
]

function checaSeUsuarioUsaCSS(usuario) {
    for( let tecnologia of usuario.tecnologias){
        if( tecnologia == "CSS"){
            return true
        }
    }
    return false

}

for (let usuario of usuarios){
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS (usuario)

    if(usuarioTrabalhaComCSS){
        console.log(`${usuario.nome} trabalha com CSS`)
    }
}
