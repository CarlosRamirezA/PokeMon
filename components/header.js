import React, { Component } from 'react'
import Link from 'next/link'

function Header(props) {
  return (
    <nav className="navbar navbar-light" style={{"background-color": "#e3f2fd"}}>
      <Link href="/">
        <a className="nav-item nav-link active">Home</a>
      </Link>
      <Link href="/clase">
        <a className="nav-item nav-link">Clases</a>
      </Link>
      <Link href="/nosotros">
        <a className="nav-item nav-link">Nosotros</a>
      </Link>
    </nav>
  )
}

export default Header