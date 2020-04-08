const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
const soma = idade + contribuicao;

if( (sexo == "F" && contribuicao>=30) || (sexo == "M" && contribuicao >= 35)){
    if( (sexo == "F" && soma >= 85) || (sexo == "M" && soma >= 95)){
        console.log(`${nome}, você pode se aposentar!`)
    }else{
        console.log(`${nome}, você não pode se aposentar!`)
    }

}else{
    console.log(`${nome}, você não pode se aposentar!`)
}
