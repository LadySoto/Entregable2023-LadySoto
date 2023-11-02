import Error from "./Error";
import React from "react";
import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (nombre.trim <= 2 || pais <= 5) {
      <Error />;
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre {" "}</label>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            nombre={setNombre}
          />
        </div>

        <div>
          <label htmlFor="pais">País preferido {" "}</label>
          <input
            type="text"
            placeholder="Escribe tu pais preferido"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            pais={setPais}
          />
        </div>

        <input type="submit" value="Enviar formulario" />
      </form>
    </>
  );
};

export default Formulario;
