import React, { Component } from 'react'

import Base from '../layout/base'
import Header from '../components/header'

class Clase extends Component {
  render() {
    return (
      <Base>
        <Header />
        <div className="alert alert-primary">
          <h1>
            Nosotros
          </h1>
        </div>
      </Base>
    )
  }
}

export default Clase