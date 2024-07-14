let numero2 = Number(prompt("Ingrese un numero un numero entre el 1 y el 50"))
let numero3 = Number(prompt("Ingrese un numero un numero entre el 1 y el 50"))

let j =1
while(j<=50){
    if(j==numero2 || j == numero3){
        console.log("Loteria")
    }
    else{
        console.log(j)
    }
    j++
}