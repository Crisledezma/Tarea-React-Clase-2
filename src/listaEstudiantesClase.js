import React, { Component } from 'react';

class ListaEstudiantesClass extends Component {
  render() {
    const { listaEstudiantes } = this.props;

    return (
      <React.Fragment>
        <h1 className="text-center mt-5">Lista de estudiantes Clase.</h1>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Nombre:</th>
              {listaEstudiantes.map((estudiante, index) => (
                <td key={index}>{estudiante.nombre}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">Apellido:</th>
              {listaEstudiantes.map((estudiante, index) => (
                <td key={index}>{estudiante.apellido}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">Edad:</th>
              {listaEstudiantes.map((estudiante, index) => (
                <td key={index}>{estudiante.edad}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ListaEstudiantesClass;
