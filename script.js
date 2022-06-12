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
      return this.apuestaDinero * 10;
    } else {
      return -apuestaDinero;
    }
  }
}

let valorBox = document.getElementById("textoForm");
let mensajeTxt = document.getElementById("mensaje");
let creditoTxt = document.querySelector("#credito");
let btnAceptar = document.getElementById("btnAceptar");
//btnAceptar.onclick = ()=>{menu()}
let menuBotones= document.getElementById("botones")
let codigo= "<h2>HOLA</h2>"


function crearBotones(etiquetaDestino,codigoHtml,accion){
let botonNuevo = document.createElement("div")
botonNuevo.innerHTML= codigoHtml
etiquetaDestino.appendChild(botonNuevo)
botonNuevo.onclick= accion
}


crearBotones(menuBotones,"<h2>CARGAR DINERO</h2>",()=>menu2("1"))
crearBotones(menuBotones,"<h2>JUGAR</h2>",()=>menu2("2"))
crearBotones(menuBotones,"<h2>RETIRAR DINERO</h2>", ()=>menu2("3"))
crearBotones(menuBotones,"<h2>MOSTRAR APUESTAS</h2>", ()=>menu2("4"))

mensajeTxt.innerHTML = txtMenu;


function menu2(opcion){
  mensajeTxt.innerHTML=txtMenu
  creditoTxt.innerHTML="$" + credito
  
  switch (opcion) {
    case "1":
      mensajeTxt.innerHTML = "INGRESE VALOR A CARGAR";
      btnAceptar.onclick = ()=>{ingresarDinero(1,1000)}
      break;

    case "2":
      mensajeTxt.innerHTML = "INGRESE DINERO A APOSTAR";
      btnAceptar.onclick = ()=>{apostarDinero(1,credito)}
      break;

    case "3":
      mensajeTxt.innerHTML = "INGRESE EL DINERO A RETIRAR";
      btnAceptar.onclick = ()=>{retirarDinero(1,credito)}
      break;

    case "4":
      alert("EN CONSOLA SE MUESTRAN LAS APUESTAS")
      mostrarApuestas()
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

function menu() {
  mensajeTxt.innerHTML=txtMenu
  creditoTxt.innerHTML="$" + credito
  
  switch (valorBox.value) {
    case "1":
      btnAceptar.onclick = ()=>{ingresarDinero(1,1000)}
      mensajeTxt.innerHTML = "INGRESE VALOR A CARGAR";
      break;

    case "2":
      mensajeTxt.innerHTML = "INGRESE DINERO A APOSTAR";
      btnAceptar.onclick = ()=>{apostarDinero(1,credito)}
      break;

    case "3":
      mensajeTxt.innerHTML = "INGRESE EL DINERO A RETIRAR";
      btnAceptar.onclick = ()=>{retirarDinero(1,credito)}
      break;

    case "4":
      alert("EN CONSOLA SE MUESTRAN LAS APUESTAS")
      mostrarApuestas()
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

function ingresarDinero(min,max) {
  if (Number(valorBox.value) >= min && Number(valorBox.value) <= max) {
    credito += Number(valorBox.value);
    creditoTxt.innerHTML = "CREDITO:  $" + credito;
    btnAceptar.onclick = ()=>{menu()}
    mensajeTxt.innerHTML = txtMenu;
  } else {
    alert("INGRESE UN VALOR CORRECTO");
    valorBox.value = "";
  }
}

function apostarDinero(min,max) {
  if ((valorBox.value>=min) &&(valorBox.value<=max)) {
    apuestaDinero=valorBox.value
    valorBox.value=""
    mensajeTxt.innerHTML = "INGRESE A QUE NUMERO APOSTAR (1 - 10)";
    btnAceptar.onclick = ()=>{apostarNumero(1,10)}
  } else {
    alert("INGRESE UN VALOR CORRECTO" + "min:" + min + ", max:" + max);
    valorBox.value = "";
  }
}

function apostarNumero(min,max) {
  if (Number(valorBox.value) >= min && Number(valorBox.value) <= max) {
    apuestaNumero= valorBox.value
    resultadoRuleta=Number(getRandom(1,10))
    apuestaNro[i] = new apuesta(apuestaDinero,apuestaNumero,resultadoRuleta)
    console.log("APUESTA "+ i)
    console.log (apuestaNro[i])
    alert(apuestaNro[i].mostrarResultado())
    saldarRonda()
    alert("ronda saldada")
    i+=1
    btnAceptar.onclick= ()=>{menu()}
    mensajeTxt.innerHTML=txtMenu
    creditoTxt.innerHTML="$" + credito
  } else {
    alert("INGRESE UN VALOR CORRECTO");
    valorBox.value = "";
  }
}

function saldarRonda(){
  if(apuestaNro[i].apuestaNumero==apuestaNro[i].resultadoRuleta){
    credito+=apuestaNro[i].apuestaDinero*10
    creditoTxt.innerHTML="$" + credito
  }else{
    credito-=apuestaNro[i].apuestaDinero
  }
}

function getRandom(min,max){
  return Math.round(Math.random() *(max-min)+min);
}

function mostrarApuestas(){
  for(ap of apuestaNro) {
    console.log(ap)
  }
}

function retirarDinero(min, max){
  let valor=Number(valorBox.value)
  if (valor >= min && valor <= max) {
    credito -= valor
    creditoTxt.innerHTML = "CREDITO:  $" + credito

    alert("HOLA")
    alert("Retirado: $"+ valor)
    btnAceptar.onclick = ()=>{menu()}
    

    mensajeTxt.innerHTML = txtMenu;
    //menu()

  } else {
    alert("INGRESE UN VALOR CORRECTO");
    valorBox.value = "";
  }

}