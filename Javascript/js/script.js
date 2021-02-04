function sayme(num){
    if(num>0){
        alert('El numero es positivo')
    }else if(num<0){
        alert('El numero es negativo')
    }else if(num===0){
        alert('El numero es cero')
    }else if(num === undefined){
        alert(num)
        alert('Valor vacío')
    }else{
        alert('El valor es nulo')
    }
}
function hervirAgua(){
    
    let unidad = " Grados";
    for( var temperatura=0; temperatura<=100;temperatura++){
        console.log(temperatura + unidad)
        if(temperatura===100){
            alert('El agua ya esta hervida')
        }
    }
}