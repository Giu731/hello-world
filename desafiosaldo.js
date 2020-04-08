const users = [
    {
        name: "Salvio",
        earns: [115.3, 48.7, 98.3, 14.5],
        spends: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        earns: [24.6, 214.3, 45.3],
        spends: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        earns: [9.8, 120.3, 340.2, 45.3],
        spends: [450.2, 29.9]
    }
]


for(let i = 0; i<users.length; i++){
    let saldo = calculaSaldo(users[i].earns, users[i].spends)
    if(saldo>=0){
        console.log(`${users[i].name} possui saldo POSITIVO de ${saldo}`)
    }else{
        console.log(`${users[i].name} possui saldo NEGATIVO de ${saldo}`)
    }
}



function calculaSaldo(receita, despesa){
    const saldo = somaNumeros(receita) - somaNumeros(despesa);
    return saldo;
}




function somaNumeros(numeros){
    let soma=0;
    for( let i=0; i<numeros.length; i++){
        soma = soma + numeros[i];
    }
    return soma;
    console.log(`A soma é de ${soma}`);
}



