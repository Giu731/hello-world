const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}


function createTransaction(newTransaction){
    user.transactions.push(newTransaction)

    if( newTransaction.type == "credit"){
        user.balance = user.balance + newTransaction.value 
    }
    if( newTransaction.type == "debit"){
        user.balance = user.balance - newTransaction.value
    }
    return user.balance

}


function getHigherTransactionByType(type){
    let higher = 0;
    for( let transaction of user.transactions){
        if(transaction.type == type && transaction.value > higher){
            higher = transaction.value
        }
    }
    console.log(`{ type: '${type}', value: '${higher}' }`)
}


function getAverageTransactionValue(){
    let transactionsSum = 0
    let transactionsNumber = 0

    for(let transaction of user.transactions){
        transactionsSum = transactionsSum + transaction.value
        transactionsNumber++
    }

    const average = transactionsSum / transactionsNumber
    console.log(average)
}

function getTransactionsCount(){
    let creditSum = 0
    let debitSum = 0;

    for(let transaction of user.transactions){
        if(transaction.type == "credit"){
            creditSum++
        }
        if(transaction.type == "debit"){
            debitSum++
        }

    }

    const transactionCount = {
        credit: creditSum,
        debit: debitSum
    }

    console.log(transactionCount)
}


createTransaction({ type: "credit", value: 50})
createTransaction({ type: "credit", value: 120})
createTransaction({ type: "debit", value: 80})
createTransaction({ type: "debit", value: 30})

console.log(user.balance)

getHigherTransactionByType("debit");
getHigherTransactionByType("credit"); 

getAverageTransactionValue(); 

getTransactionsCount(); 
