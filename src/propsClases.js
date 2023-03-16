import PropTypes from "prop-types";
import React from 'react';

export default class PropsClases extends React.Component {
  render() {
    return (
      <div>{ this.props.apellido }</div>
    )
  }
}

PropsClases.propTypes = {
  apellido: PropTypes.string,
}
