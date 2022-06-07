let credito = 0;
let i = 0;
let j = 0;
let min = 0;
let max = 10;
let apuestaDinero
let apuestaNumero
let apuestaNro = [];
let lista = "";
let elemento= document.body



/* 
let btnToogle2=document.getElementById("btnToogle")
btnToogle2.addEventListener("click", cambiarFondo)

localStorage.setItem (1,"prueba")
localStorage.setItem (2," de")
localStorage.setItem (3," storage")
const producto1=[{id:1,producto:"harina"},{id:2,producto:"arroz"}]
const enJSON = JSON.stringify(producto1)

let listaLocalStorage = ""

for (i=0; i<localStorage.length;i++) {
listaLocalStorage+=localStorage.key(i)

}
alert(listaLocalStorage)


console.log(enJSON)
console.log(typeof enJSON)
console.log(typeof producto1)

localStorage.setItem("producto2",enJSON)




function cambiarFondo(e){
  e.preventDefault()

  elemento.classList.toggle("fondoAzul")

  alert("cambia")
} */


//



let txtMenu = `INGRESE LA OPERACION QUE QUIERA REALIZAR:<br>
1-CARGAR DINERO<br>
2-JUGAR<br>
3-RETIRAR DINERO<br>
4-MOSTRAR APUESTAS<br>
5-VER RESULTADOS RULETA<br>
6-MOSTRAR RESULTADOS EN PANTALLA<br>`;

class apuesta {
  constructor(apuestaDinero, apuestaNumero, resultadoRuleta) {
    this.apuestaDinero = apuestaDinero;
    this.apuestaNumero = apuestaNumero;
    this.resultadoRuleta = resultadoRuleta;
    this.gananciaRonda = this.ganancia();
  }
  mostrarResultado() {
    return (
      "$" +
      this.apuestaDinero +
      "; AL " +
      this.apuestaNumero +
      "; RESULTADO:" +
      this.resultadoRuleta +
      "; GANANCIA: " +
      this.gananciaRonda
    );
  }
  ganancia() {
    if (this.apuestaNumero == this.resultadoRuleta) {
      return this.apuestaDinero * 9;
    } else {
      return -apuestaDinero;
    }
  }
}

let valorBox = document.getElementById("textoForm");
let mensajeTxt = document.getElementById("mensaje");
let creditoTxt = document.querySelector("#credito");
let btnAceptar = document.getElementById("btnAceptar");
btnAceptar.addEventListener("click", menu);

mensajeTxt.innerHTML = txtMenu;

function menu() {
  
  mensajeTxt.innerHTML=txtMenu
  creditoTxt.innerHTML="$" + credito
    alert("MENU")
  
  switch (valorBox.value) {
    case "1":
      min = 1;
      max = 1000;
      btnAceptar.removeEventListener("click", menu);
      btnAceptar.addEventListener("click", ingresarDinero);
      mensajeTxt.innerHTML = "INGRESE VALOR A CARGAR";

      break;

    case "2":
      mensajeTxt.innerHTML = "INGRESE DINERO A APOSTAR";
      min = 1;
      max = 10;
      btnAceptar.removeEventListener("click", menu);
      btnAceptar.addEventListener("click", apostarDinero);
     
      break;

    case "3":
      alert("ingresado 3");
      break;

    case "4":
      alert("ingresado 4");
      break;

    case "5":
      alert("ingresado 5");
      break;

    case "6":
      alert("ingresado 6");
      break;
    default:
      alert("ingrese un valor correcto");
      break;
  }
}

function cargaCredito() {
    alert("CARGAR DINERDO")
  //credito+=solicitarValor(1,1000,"INGRESE LA CANTIDAD DE DINERO A CARGAR (1-1000)"
}

function ingresarDinero(e) {
    alert("INGRESAR DINERDO")
  

  if (Number(valorBox.value) >= min && Number(valorBox.value) <= max) {
    credito += Number(valorBox.value);
    creditoTxt.innerHTML = "CREDITO:  $" + credito;
    btnAceptar.removeEventListener("click", ingresarDinero);
    btnAceptar.addEventListener("click",menu);
    mensajeTxt.innerHTML = txtMenu;
    
  } else {
    alert("INGRESE UN VALOR CORRECTO");
    valorBox.value = "";
  }
}

function apostarDinero(e) {
    
    
  if ((valorBox.value>=min) &&(valorBox.value<=max)) {

    apuestaDinero=valorBox.value

    valorBox.value=""
    mensajeTxt.innerHTML = "INGRESE A QUE NUMERO APOSTAR (1 - 10)";
    min=1
    max=credito


    ///
    btnAceptar.removeEventListener("click", apostarDinero);
    btnAceptar.addEventListener("click", apostarNumero);
    
  } else {
    alert("INGRESE UN VALOR CORRECTO" + "min:" + min + ", max:" + max);
    valorBox.value = "";
  }
}

function apostarNumero(e) {
    
    alert("APOSTARNUMERO")
    
 
  if (Number(valorBox.value) >= min && Number(valorBox.value) <= max) {
    apuestaNumero= valorBox.value
    alert("apostado al " + apuestaNumero)


    resultadoRuleta=Number(getRandom(1,10))
    apuestaNro[i] = new apuesta(apuestaDinero,apuestaNumero,resultadoRuleta)
    console.log("APUESTA "+ i)
    console.log (apuestaNro[i])
    // alert(apuestaNro[i].mostrarResultado())
    saldarRonda()
    //
    i+=1

    min=1
    max=6
    alert("fin ronda, ahora a menu")
    btnAceptar.removeEventListener("click", apostarNumero);
    btnAceptar.addEventListener("click", menu);
    menu()

  } else {
    alert("INGRESE UN VALOR CORRECTO");
    valorBox.value = "";
  }
}

function saldarRonda(){
  credito-=apuestaNro[i].apuestaDinero
  if(apuestaNro[i].apuestaNumero==apuestaNro[i].resultadoRuleta){
    credito+=apuestaNro[i].apuestaDinero*10
  }
}

function getRandom(min,max){
  return Math.round(Math.random() *(max-min)+min);
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
