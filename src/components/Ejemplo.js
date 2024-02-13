import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {

    const [numeroSaludo, setNumeroSaludo] = useState(0);
    const saludosEnCola = useRef(numeroSaludo);

    useEffect(() => {
        saludosEnCola.current = numeroSaludo;
        setTimeout(() => {
            console.log("Mensaejes en Cola: " +saludosEnCola.current);
        }, 2000)
    }, [numeroSaludo])

    const enviarSaludo = e => {
        setNumeroSaludo (numeroSaludo + 1);
    }

  return (
    <div>
        <h1>Ejemplo con useRef</h1>
        <h3>Saludos Enviados: {numeroSaludo}</h3>
        <button onClick={enviarSaludo}>Saludo</button>
        <hr />
    </div>
  )
}
