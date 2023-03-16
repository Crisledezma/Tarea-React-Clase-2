import React from "react";
import PropsFunciones from "./propsFunciones";

export default function Funciones() {
  const [nombre, setNombre] = React.useState("Cristian");
  const [apellido, setApellido] = React.useState("Ledezma");
  const handleChangeNombre = (e) => setNombre(e.target.value)
  const handleChangeApellido = (e) => setApellido(e.target.value)
  React.useEffect(() => {
    setTimeout(() => {
      setNombre('Mario');
      setApellido('Bros');
    }, 3000)
  });
  
  return (
    <div class="mt-5">
      <label className="form-label">Hola, mi nombre es {nombre} {apellido}</label>
      <div className="input-group">
        <input
          class="form-control"
          type="text"
          value={nombre}
          onChange={handleChangeNombre}>
        </input>
        <input
          class="form-control"
          type="text"
          value={apellido}
          onChange={handleChangeApellido}>
        </input>
      </div>
      <PropsFunciones apellido={apellido} edad={29} />
    </div>
  )
}