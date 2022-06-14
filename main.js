let i = 0;
let min = 0;
let max = 10;
let apuestaDinero;
let apuestaNumero;
let txtMenu = `BIENVENIDO A LA JAVARULETA!!`;
let id = 0;

//DEFINO BOTONES DE MENU
botonesMenu = [
  { id: 1, textoHtml: "<h3>INGRESAR DINERO</h3>", accion: () => menu2("1") },
  { id: 2, textoHtml: "<h3>JUGAR</h3>", accion: () => menu2("2") },
  { id: 3, textoHtml: "<h3>RETIRAR DINERO</h3>", accion: () => menu2("3") },
];

//SETEO PARAMETROS INICIALES
//tomo credito de LS, o lo crea si no lo encuentra
let credito = JSON.parse(localStorage.getItem("credito")) || 0;
let apuestaNro = JSON.parse(localStorage.getItem("apuestas")) || [];

let valorBox = document.getElementById("textoForm");
let mensajeTxt = document.getElementById("mensaje");
let creditoTxt = document.querySelector("#credito");
let btnAceptar = document.getElementById("btnAceptar");
let menuBotones = document.getElementById("botones");
let textoForm = document.getElementById("textoForm");
let inputData = document.getElementById("inputData");
let listaApuestas = document.getElementById("apuestas");

inputData.style.display = "none";
menuBotones.style.display = "flex";
mensajeTxt.innerHTML = txtMenu;
creditoTxt.innerHTML = credito;

///

//SE CREAN LOS BOTONES
for (el of botonesMenu) {
  crearBotones(menuBotones, el.textoHtml, el.accion);
}
function crearBotones(etiquetaDestino, codigoHtml, accion) {
  let botonNuevo = document.createElement("div");
  botonNuevo.innerHTML = codigoHtml;
  etiquetaDestino.appendChild(botonNuevo);
  botonNuevo.onclick = accion;
}
//

mostrarApuestas();
function menu2(opcion) {
  mensajeTxt.innerHTML = txtMenu;
  creditoTxt.innerHTML = credito;

  switch (opcion) {
    case "1":
      inputData.style.display = "block";
      valorBox.value = "";
      menuBotones.style.display = "none";
      mensajeTxt.innerHTML = "INGRESE VALOR A CARGAR";

      btnAceptar.onclick = () => {
        ingresarDinero(1, 1000);
      };
      break;

    case "2":
      mensajeTxt.innerHTML = "INGRESE DINERO A APOSTAR";
      inputData.style.display = "block";
      valorBox.value = "";
      menuBotones.style.display = "none";
      btnAceptar.onclick = () => {
        apostarDinero(1, credito);
      };
      break;

    case "3":
      mensajeTxt.innerHTML = "INGRESE EL DINERO A RETIRAR";
      inputData.style.display = "flex";
      valorBox.value = "";
      menuBotones.style.display = "none";
      btnAceptar.onclick = () => {
        retirarDinero(1, credito);
      };
      break;

    case "4":
      alert("EN CONSOLA SE MUESTRAN LAS APUESTAS");
      mostrarApuestas();
      break;
  }
}

function ingresarDinero(min, max) {
  if (Number(valorBox.value) >= min && Number(valorBox.value) <= max) {
    credito += Number(valorBox.value);
    localStorage.setItem("credito", JSON.stringify(credito));
    creditoTxt.innerHTML = credito;
    inputData.style.display = "none";
    menuBotones.style.display = "flex";
    mensajeTxt.innerHTML = txtMenu;
  } else {
    alert("INGRESE UN VALOR CORRECTO");
    valorBox.value = "";
  }
}

function apostarDinero(min, max) {
  if (valorBox.value >= min && valorBox.value <= max) {
    apuestaDinero = valorBox.value;
    valorBox.value = "";
    mensajeTxt.innerHTML = "INGRESE A QUE NUMERO APOSTAR (1 - 10)";
    btnAceptar.onclick = () => {
      apostarNumero(1, 10);
    };
  } else {
    alert("INGRESE UN VALOR CORRECTO" + "min:" + min + ", max:" + max);
    valorBox.value = "";
  }
}

function apostarNumero(min, max) {
  if (Number(valorBox.value) >= min && Number(valorBox.value) <= max) {
    apuestaNumero = valorBox.value;
    resultadoRuleta = Number(getRandom(1, 10));
    id = apuestaNro.length + 1;
    apuestaNro.push(
      new apuesta(id, apuestaDinero, apuestaNumero, resultadoRuleta)
    );
    localStorage.setItem("apuestas", JSON.stringify(apuestaNro));

    if (apuestaNumero == resultadoRuleta) {
      credito += apuestaDinero * 10;
      creditoTxt.innerHTML = credito;
      alert(
        `RESULTADO DE LA RONDA:
      APUESTA: $ ${apuestaDinero} , 
      AL NUMERO: ${apuestaNumero} 
      RESULTADO DE LA RULETA: ${resultadoRuleta}
      
      FELICITACIONES!! HA GANADO`
      );
    } else {
      credito -= apuestaDinero;
      alert(`RESULTADO DE LA RONDA:
      APUESTA: $ ${apuestaDinero} , 
      AL NUMERO: ${apuestaNumero} 
      RESULTADO DE LA RULETA: ${resultadoRuleta}
      
      EXITOS EN EL PROXIMO INTENTO`);
    }

    mensajeTxt.innerHTML = txtMenu;
    inputData.style.display = "none";
    menuBotones.style.display = "flex";
    creditoTxt.innerHTML = +credito;
    mostrarApuestas();
  } else {
    alert("INGRESE UN VALOR CORRECTO");
    valorBox.value = "";
  }
}

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function mostrarApuestas() {
  listaApuestas.innerHTML = "";
  for (ap of apuestaNro) {
    console.log(ap);
    const muestraApuesta = document.createElement("div");
    muestraApuesta.setAttribute("id", `${ap.id}`);
    muestraApuesta.innerHTML = `${ap.resultadoRuleta}`;
    muestraApuesta.addEventListener("click", mostrar2);
    listaApuestas.appendChild(muestraApuesta);
  }}
  function mostrar2(e) {
    const objetoSel = e.currentTarget;
    const id = Number(objetoSel.id);
    alert(
      `ID: ${apuestaNro[id - 1].id} APOSTADO: $${
        apuestaNro[id - 1].apuestaDinero
      } AL NUMERO ${apuestaNro[id - 1].apuestaNumero}. RESULTADO:${
        apuestaNro[id - 1].resultadoRuleta
      }`
    );
  }


function retirarDinero(min, max) {
  let valor = Number(valorBox.value);
  if (valor >= min && valor <= max) {
    credito -= valor;
    creditoTxt.innerHTML = credito;
    alert("Retirado: $" + valor);

    inputData.style.display = "none";
    menuBotones.style.display = "flex";
    mensajeTxt.innerHTML = txtMenu;
    //menu()
  } else {
    alert("INGRESE UN VALOR CORRECTO");
    valorBox.value = "";
  }
}
