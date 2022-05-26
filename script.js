
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
        this.gananciaRonda = this.ganancia()
    }
    mostrarResultado(){
        return "$" + this.apuestaDinero + "; AL " + this.apuestaNumero+ "; RESULTADO:" + this.resultadoRuleta + "; GANANCIA: " + this.gananciaRonda
    }
    ganancia(){
        if(this.apuestaNumero===this.resultadoRuleta){
            return (this.apuestaNumero*10-1)
        } else{
            return -1
        }
    }
}



do{
operacion=solicitarValor(1,6,`BIENVENIDO A LA JAVARULETA
    
    SU CREDITO ACTUAL ES : $`+ credito +`
    
    INGRESE LA OPERACION QUE QUIERA REALIZAR:
    1-CARGAR DINERO
    2-JUGAR
    3-RETIRAR DINERO
    4-MOSTRAR APUESTAS
    5-VER RESULTADOS RULETA
    6-SALIR`)

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
            lista+="APUESTA " + j + ": " + apuestaNro[j].mostrarResultado() +`
`                 
            }
   
            alert(lista)
            break;
        
        case 5:
            resultadosTxt=`LISTA DE RESULTADOS
            
`

            const resultadosRuleta= apuestaNro.map (function (el){
                return {
                    result:el.resultadoRuleta,
                    }
             
            }
            )


            for (const el of resultadosRuleta){
                resultadosTxt+=("RESULTADO: " + el.result)+`
`
            }
            alert(resultadosTxt)
            // for(const el of resultadosRuleta){
            //     alert( el.resultadoRuleta)
            // }
 
        break;
    }
}while(operacion!="6")


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
