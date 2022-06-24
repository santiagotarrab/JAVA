let i = 0;
let min = 0;
let max = 10;
let apuestaDinero;
let apuestaNumero;
let txtMenu = `BIENVENIDO A LA JAVARULETA!!`;
let id = 0;
let resultadoRuleta;
let pokemones = [];
let pokemones2 = [];
let contBonus = 0;

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
let inputData = document.getElementById("inputData");
let listaApuestas = document.getElementById("apuestas");
let iconoBorrar = document.getElementById("iconoBorrar");
let pokemonesContainer = document.getElementById("pokemones");
let fondoOpaco = document.getElementById("fondoOpaco");

iconoBorrar.onclick = () => {
  apuestaNro = [];
  localStorage.setItem("apuestas", JSON.stringify(apuestaNro));
  mostrarApuestas();
};


main()

function main(){
  inputData.style.display = "none";
  menuBotones.style.display = "flex";
  mensajeTxt.innerHTML = txtMenu;
  creditoTxt.innerHTML = credito;
  crearBotonesMenu()
  initApiPokemon();
}

//SE CREAN LOS BOTONES
function crearBotonesMenu(){
for (el of botonesMenu) {
  crearBotones(menuBotones, el.textoHtml, el.accion);
}

function crearBotones(etiquetaDestino, codigoHtml, accion) {
  let botonNuevo = document.createElement("div");
  botonNuevo.innerHTML = codigoHtml;
  etiquetaDestino.appendChild(botonNuevo);
  botonNuevo.onclick = accion;
}}


function initApiPokemon() {
  cargarApi("https://pokeapi.co/api/v2/pokemon-form/1/");
  cargarApi("https://pokeapi.co/api/v2/pokemon-form/4/");
  cargarApi("https://pokeapi.co/api/v2/pokemon-form/7/");
}

function cargarApi(link) {
  return new Promise((resolve, reject) => {
    fetch(
      link
      /* ,
    {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    } */
    )
      .then((response) => response.json())
      .then((data) => {
        pokemones.push(data);
        resolve(true);
      });
  });
}

function cargarRandomPokemones() {
  //CARGA UN NUEVO PREMIO PARA CADA RONDA BONUS
  pokemones2 = [];
  for (pok of pokemones) {
    let pok2 = { ...pok, bonus: Number(getRandom(0, 2)) };
    pokemones2.push(pok2);
  }
}

function listadoPokemones() {
  //CREA LA ESTRUCTURA DE LA PANTALLA DE BONUS (SIN VISIBILIDAD)
  pokemonesContainer.innerHTML = `<h1>BONUS TRACK!!</h1>
  <h3>ELIJA SU POKEMON PREFERIDO Y OBTENGA UN REGALO ESPECIAL</h3>`;
  for (pok of pokemones2) {
    const divPokemon = document.createElement("div");
    divPokemon.innerHTML = `<h4>${pok.name} </h4>
    <img src='${pok.sprites.front_default}' alt="Paris">`;
    divPokemon.setAttribute("id", pok.id);
    divPokemon.addEventListener("click", showBonus);
    pokemonesContainer.appendChild(divPokemon);
  }
}

function mostrarBonus() {
  //MUESTRA LA PANTALLA BONUS
  pokemonesContainer.setAttribute("style", "display:flex");
  fondoOpaco.setAttribute("style", "display:block");
}

function showBonus(e) {
  //IDENTIFICA EL POKEMON SELECCIONADO Y CARGA EL CREDITO GANADO
  let objetoSel = e.currentTarget;
  let id = objetoSel.id;
  console.log(id);

  const busqueda = pokemones2.find((el) => el.id == id);
  console.log(busqueda);
  objetoSel.innerHTML = `<h4>+  ${busqueda.bonus} </h4>`;
  objetoSel.setAttribute = ("style", "background:green;");
  credito += busqueda.bonus;
  creditoTxt.innerHTML = credito;
  setTimeout(() => {
    pokemonesContainer.setAttribute("style", "display:none");
    fondoOpaco.setAttribute("style","display:none")
    contBonus = 0;
    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,
      title: `SU POKEBONUS ES POR ${busqueda.bonus} CREDITOS!`,
    });
  }, 1000);
}




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
      Swal.fire({
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1000,
        title: "EN CONSOLA SE MUESTRAN LAS APUESTAS",
      });

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
    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,
      title: "INGRESE UN VALOR CORRECTO",
    });

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
    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,

      title: "INGRESE UN VALOR CORRECTO ENTRE " + min + " Y " + max,
    });

    valorBox.value = "";
  }
}

function apostarNumero(min, max) {
  if (Number(valorBox.value) >= min && Number(valorBox.value) <= max) {
    apuestaNumero = valorBox.value;
    girarRuleta().then((res) => {
      resultadoRuleta = res;
      terminarRonda();
    });
  } else {
    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,

      title: "INGRESE UN VALOR CORRECTO",
    });

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
  }
}
function mostrar2(e) {
  const objetoSel = e.currentTarget;
  const id = Number(objetoSel.id);
  Swal.fire({
    showCancelButton: false,
    showConfirmButton: false,
    timer: 1000,
    title: `ID: ${apuestaNro[id - 1].id} 
      APOSTADO: $${apuestaNro[id - 1].apuestaDinero} 
      AL NUMERO: ${apuestaNro[id - 1].apuestaNumero} 
      RESULTADO:${apuestaNro[id - 1].resultadoRuleta}`,
  });
}

function retirarDinero(min, max) {
  let valor = Number(valorBox.value);
  if (valor >= min && valor <= max) {
    credito -= valor;
    creditoTxt.innerHTML = credito;

    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,
      title: "Retirado: $" + valor,
    });

    inputData.style.display = "none";
    menuBotones.style.display = "flex";
    mensajeTxt.innerHTML = txtMenu;
    //menu()
  } else {
    Swal.fire({
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,
      title: "INGRESE UN VALOR CORRECTO",
    });
    valorBox.value = "";
  }
}

const girarRuleta = () => {
  Swal.fire({
    showCancelButton: false,
    showConfirmButton: false,
    title: "GIRANDO RULETA",
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Number(getRandom(1, 10)));
    }, 3000);
  });
};

function terminarRonda() {
  id = apuestaNro.length + 1;
  contBonus++;
  apuestaNro.push(
    new apuesta(id, apuestaDinero, apuestaNumero, resultadoRuleta)
  );

  localStorage.setItem("apuestas", JSON.stringify(apuestaNro));

  if (apuestaNumero == resultadoRuleta) {
    credito += apuestaDinero * 10;
    creditoTxt.innerHTML = credito;

    Swal.fire({
      showCancelButton: false,

      title: `RESULTADO DE LA RONDA:
      APUESTA: $ ${apuestaDinero} ,
      AL NUMERO: ${apuestaNumero}
      RESULTADO DE LA RULETA: ${resultadoRuleta}

      FELICITACIONES!! HA GANADO`,
    });
  } else {
    credito -= apuestaDinero;
    Swal.fire({
      showCancelButton: false,

      title: `RESULTADO DE LA RONDA:
      APUESTA: $ ${apuestaDinero} ,
      AL NUMERO: ${apuestaNumero}
      RESULTADO DE LA RULETA: ${resultadoRuleta}

      EXITOS EN EL PROXIMO INTENTO`,
    });
  }

  mensajeTxt.innerHTML = txtMenu;
  inputData.style.display = "none";
  menuBotones.style.display = "flex";
  creditoTxt.innerHTML = +credito;
  mostrarApuestas();

  if (contBonus == 3) {
    contBonus = 0;
    cargarRandomPokemones();
    listadoPokemones();
    mostrarBonus();
  }
}
