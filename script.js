
let credito=0;
let i=0;
let j=0;
let min=0;
let max=10;

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

let valorBox=document.getElementById("textoForm")
let mensajeTxt=document.getElementById("mensaje")
let creditoTxt=document.getElementById("credito")
let btnAceptar=document.getElementById("btnAceptar")
btnAceptar.addEventListener("click", menu)


mensajeTxt.innerHTML=
    `SU CREDITO ACTUAL ES : $`+ credito +`
    
    INGRESE LA OPERACION QUE QUIERA REALIZAR:
    1-CARGAR DINERO
    2-JUGAR
    3-RETIRAR DINERO
    4-MOSTRAR APUESTAS
    5-VER RESULTADOS RULETA
    6-MOSTRAR RESULTADOS EN PANTALLA`


function menu(e){
   e.preventDefault()
    alert("estoy en menu")
    switch(valorBox.value){
        case "1":
            alert("ingresado1")
            btnAceptar.removeEventListener("click",menu)
            btnAceptar.addEventListener("click",ingresarDinero)
            ingresarDinero()        
        break
       
        case "2":
            alert ("ingresado 2")
        break

        case "3":
            alert ("ingresado 3")
        break

        case "4":
            alert ("ingresado 4")
        break

        case "5":
            alert ("ingresado 5")
        break

        case "6":
            alert ("ingresado 6")
        break
        default:
            alert("ingrese un valor correcto")
            break
        
    }
}

function cargaCredito(){


    //credito+=solicitarValor(1,1000,"INGRESE LA CANTIDAD DE DINERO A CARGAR (1-1000)"
}

function validar(e){
    e.preventDefault()
    alert("estoy en validar")
    
    if(Number(valorBox.value)>=min && Number(valorBox.value)<=max){
       
    }else{
        alert("fuera de rango")
    }
}

function ingresarDinero(){
valorBox.value=""
mensajeTxt.innerHTML="INGRESE VALOR A CARGAR"
alert("estoy en Ingresar DInero")


}


 //do{



//     switch(operacion){
//         case 1:
//         credito+=solicitarValor(1,1000,"INGRESE LA CANTIDAD DE DINERO A CARGAR (1-1000)."+`
//         PARA VOLVER AL MENU INGRESE M`)
//         break;

//         case 2:
//         jugar()
//         break;

//         case 3:
//         retiro=solicitarValor(1,credito,"INGRESE LA CANTIDAD DE DINERO A RETIRAR. DISPONIBLE: $"+credito+`

// PARA VOLVER AL MENU INGRESE M`)    
//         credito-=retiro
//         alert("USTED RETIRO $"+ retiro)
//         break;

//         case 4:
//             lista=""
//             j=0

//             for(j=0;j<i;j++){
//             lista+="APUESTA " + j + ": " + apuestaNro[j].mostrarResultado() +`
// `                 
//             }
   
//             alert(lista)
//             break;
        
//         case 5:
//             resultadosTxt=`LISTA DE RESULTADOS
            
// `

//             const resultadosRuleta= apuestaNro.map (function (el){
//                 return {
//                     result:el.resultadoRuleta,
//                     }
             
//             }
//             )


//             for (const el of resultadosRuleta){
//                 resultadosTxt+=("RESULTADO: " + el.result)+`
// `
//             }
//             alert(resultadosTxt)
//             // for(const el of resultadosRuleta){
//             //     alert( el.resultadoRuleta)
//             // }
 
//         break;
//     }
// }while(operacion!="6")


// function jugar(){
//     apuestaDinero=solicitarValor(1,credito,`INGRESE EL DINERO A APOSTAR:
//     DISPONIBLE: $` + credito+`

//     PARA VOLVER AL MENU INGRESE M`)
    
//     if(apuestaDinero!=0){
    
//     apuestaNumero=solicitarValor(1,10,`INGRESE A QUE NUMERO APOSTAR (1 al 10)`+`

//     PARA VOLVER AL MENU INGRESE M`)
//     resultadoRuleta=Number(getRandom(1,10))

// apuestaNro[i] = new apuesta(apuestaDinero,apuestaNumero,resultadoRuleta)

//  let tabla=document.querySelector("#listaResultados")


//  let trow = document.createElement("tr")
//  trow.setAttribute("class","apuesta"+i)
//  tabla.appendChild(trow)

//   let tcol1 = document.createElement("td")
//   tcol1.innerHTML = "$" + apuestaNro[i].apuestaDinero
//   trow.appendChild(tcol1)

//   let tcol2 = document.createElement("td")
//   tcol2.innerHTML = apuestaNro[i].apuestaNumero
//   trow.appendChild(tcol2)

//   let tcol3 = document.createElement("td")
//   tcol3.innerHTML = apuestaNro[i].resultadoRuleta
//   trow.appendChild(tcol3)

//     cont.innerHTML= `<p> DINERO APOSTADO: ${apuestaNro[i].apuestaDinero}<br>
//  AL NUMERO ${apuestaNro[i].apuestaNumero}<br>
//  RESULTADO ${apuestaNro[i].resultadoRuleta}</p>`

// document.body.appendChild(cont)

// i+=1;
    
//     if(apuestaNumero===resultadoRuleta){
//         alert(`EL RESULTADO DE LA RULETA ES `+ resultadoRuleta +`
//         FELICIDADES! HA GANADO $`+apuestaDinero*10)
//         credito+=apuestaDinero*10
//     } else{
//         alert(`EL RESULTADO DE LA RULETA ES `+ resultadoRuleta +`
//         SUERTE EN EL PROXIMO INTENTO!`)
//         credito-=apuestaDinero
//     }
//     }

// }

// function getRandom(min,max){
//     return Math.round(Math.random() *(max-min)+min);
// }

// function solicitarValor(min,max,text){
//     let minV = Number(min)
//     let maxV = Number(max)

//     do{
//     valorIngresado=prompt(text)
//     }while(((Number(valorIngresado)>maxV || Number(valorIngresado)<minV)|| isNaN(valorIngresado)  ) && (!(valorIngresado=="M"))) 
    
//     if(valorIngresado=="M"|| isNaN(valorIngresado)){
//         valorIngresado=0;
//     }
//     return Number(valorIngresado)
// }

