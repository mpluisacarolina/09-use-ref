import React, { useRef } from 'react'

export const Formulario = () => {

  const nombreInput = useRef("");
  const telefonoInput = useRef("");
  const emailInput = useRef("");
  const miCaja = useRef("");

  const mostrar = e => {
    e.preventDefault();
    console.log(nombreInput.current.value);
    console.log(telefonoInput.current.value);
    console.log(emailInput.current.value);

    let { current: caja } = miCaja;
    caja.classList.add("fondoVerde");
    caja.innerHTML = "Contacto Guardado";
  }

  return (
    <div>
      <h2>AGENDA TELEFÓNICA</h2>

      <div ref={miCaja} className="miCaja">
        <h3> Pruebas con useRef </h3>

      </div>

      <form onSubmit={mostrar}>
        <h4>Nombres y Apellidos: <input type="text" ref={nombreInput} /> </h4>
        <h4>Teléfono: <input type="text" ref={telefonoInput} /> </h4>
        <h4>Correo Electrónico: <input type="email" ref={emailInput} /> </h4>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  )
}
