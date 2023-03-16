import React from "react";
import PropsClases from "./propsClases";

export default class Clases extends React.Component {
  constructor(props) {
    super();
    this.state = {
      nombre: "Cristian",
      apellido: "Ledezma"
    };
  }
  handleChangeNombre(e) { this.setState({ nombre: e.target.value })}
  handleChangeApellido(e) {this.setState({apellido: e.target.value})}
  componentDidMount() {
    setTimeout(() => { this.setState({ nombre: 'Mario', apellido: 'Bros' }) }, 3000);
  }
  render() {
    return (
      <div className="mt-5">
        <label class="form-label">Hola, mi nombre es {this.state.nombre} {this.state.apellido}</label>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            value={this.state.nombre}
            onChange={this.handleChangeNombre.bind(this)}>
          </input>
          <input
            className="form-control"
            type="text"
            value={this.state.apellido}
            onChange={this.handleChangeApellido.bind(this)}>
          </input>
        </div>
        <PropsClases apellido={this.state.apellido} />
      </div>
    )
  }
}