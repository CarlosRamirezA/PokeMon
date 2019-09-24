import React, { Component } from 'react'
import Head from 'next/head'


export default class Base extends Component {
  render() {
    return (
      <>
        <Head>
          <link rel="stylesheet" href="../static/boostrap.css" crossOrigin="anonymous" />
        </Head>
        {
          this.props.children
        }
      </>
    )
  }
}

// Api a USAR: https://pokeapi.co/