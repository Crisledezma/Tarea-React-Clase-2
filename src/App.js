import ListaEstudiantesFuncion from "./listaEstudiantesFuncion";
import ListaEstudiantesClase from "./listaEstudiantesClase";
import PokemonComponent from "./PokemonComponent";

const listaEstudiantes = [
  {nombre: 'John', apellido: 'Smith', edad: 24}, 
  {nombre: 'Sara', apellido: 'Jones', edad: 32}, 
  {nombre: 'Tim', apellido: 'Brown', edad: 19}, 
  {nombre: 'Alice', apellido: 'Williams', edad: 28}, 
  {nombre: 'David', apellido: 'Miller', edad: 22}, 
  {nombre: 'Kate', apellido:'Wilson', edad: 26}
];

function App() {
  return (
    <div className="container">
      <ListaEstudiantesFuncion listaEstudiantes={listaEstudiantes} />
      <ListaEstudiantesClase listaEstudiantes={listaEstudiantes} />
      <PokemonComponent />
    </div>
  )
}

export default App;
