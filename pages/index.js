import React, { Component } from 'react'

import Base from '../layout/base'


class Index extends Component {
  render() {
    return (
      <Base>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
          </div>
        </div>
        <div>
          hola
        </div>
        <div>
          bais
        </div>
      </Base>
    )
  }
}

export default Index