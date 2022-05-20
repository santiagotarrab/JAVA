
let credito=0;
let i=0;
let j=0;
let apuestaNro=[];
let lista="";

class apuesta{
    constructor(apuestaDinero,apuestaNumero,resultadoRuleta)
    {
        this.apuestaDinero=apuestaDinero
        this.apuestaNumero=apuestaNumero
        this.resultadoRuleta=resultadoRuleta
        
    }
    mostrarResultado(){
        alert("HOLA" + this.apuestaDinero + " " + this.apuestaNumero)
    }

}



do{
operacion=solicitarValor(1,5,`BIENVENIDO A LA JAVARULETA
    
    SU CREDITO ACTUAL ES : $`+ credito +`
    
    INGRESE LA OPERACION QUE QUIERA REALIZAR:
    1-CARGAR DINERO
    2-JUGAR
    3-RETIRAR DINERO
    4-MOSTRAR APUESTAS
    5-SALIR`)

    switch(operacion){
        case 1:
        credito+=solicitarValor(1,1000,"INGRESE LA CANTIDAD DE DINERO A CARGAR (1-1000)."+`
        PARA VOLVER AL MENU INGRESE M`)
        break;

        case 2:
        jugar()
        break;

        case 3:
        retiro=solicitarValor(1,credito,"INGRESE LA CANTIDAD DE DINERO A RETIRAR. DISPONIBLE: $"+credito+`

PARA VOLVER AL MENU INGRESE M`)    
        credito-=retiro
        alert("USTED RETIRO $"+ retiro)
        break;

        case 4:
            lista=""
            j=0

            for(j=0;j<i;j++){
                lista+="APUESTA " + [j] + ": $" + apuestaNro[j].apuestaDinero + "; AL " + apuestaNro[j].apuestaNumero+ "; RESULTADO:" + apuestaNro[j].resultadoRuleta +`
`     
                
            }
            alert(lista)
            break;
    }


}while(operacion!="5")


function jugar(){
    apuestaDinero=solicitarValor(1,credito,`INGRESE EL DINERO A APOSTAR:
    DISPONIBLE: $` + credito+`

    PARA VOLVER AL MENU INGRESE M`)
    
    if(apuestaDinero!=0){
    
    apuestaNumero=solicitarValor(1,10,`INGRESE A QUE NUMERO APOSTAR (1 al 10)`+`

    PARA VOLVER AL MENU INGRESE M`)
    resultadoRuleta=Number(getRandom(1,10))

apuestaNro[i] = new apuesta(apuestaDinero,apuestaNumero,resultadoRuleta)
i+=1;
    
    if(apuestaNumero===resultadoRuleta){
        alert(`EL RESULTADO DE LA RULETA ES `+ resultadoRuleta +`
        FELICIDADES! HA GANADO $`+apuestaDinero*10)
        credito+=apuestaDinero*10
    } else{
        alert(`EL RESULTADO DE LA RULETA ES `+ resultadoRuleta +`
        SUERTE EN EL PROXIMO INTENTO!`)
        credito-=apuestaDinero
    }
    }

}

function getRandom(min,max){
    return Math.round(Math.random() *(max-min)+min);
}

function solicitarValor(min,max,text){
    let minV = Number(min)
    let maxV = Number(max)

    do{
    valorIngresado=prompt(text)
    }while(((Number(valorIngresado)>maxV || Number(valorIngresado)<minV)|| isNaN(valorIngresado)  ) && (!(valorIngresado=="M"))) 
    
    if(valorIngresado=="M"|| isNaN(valorIngresado)){
        valorIngresado=0;
    }
    return Number(valorIngresado)
}
