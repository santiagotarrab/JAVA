class apuesta {
    constructor(id,apuestaDinero, apuestaNumero, resultadoRuleta) {
      this.id=id;
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