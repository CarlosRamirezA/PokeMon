import React, { Component } from 'react'
import Link from 'next/link'

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link href="/">
        <a className="nav-link active">Home</a>
      </Link>
      <Link href="/clase">
        <a className="nav-link">Clases</a>
      </Link>
      <Link href="/nosotros">
        <a className="nav-link">Nosotros</a>
      </Link>
    </nav>
  )
}

export default Header