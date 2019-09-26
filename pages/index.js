import React, { Component } from 'react' 
import fetch from 'isomorphic-unfetch'

import Base from '../layout/base'
import Header from '../components/header'


class Index extends Component {
  state = {
    cards: []
  }

  async componentDidMount() {
    const res = await fetch('https://api.pokemontcg.io/v1/cards')
    const data = await res.json()
    this.setState({ cards: data.cards })
  }


  render() {
    const { cards } = this.state
    console.log(cards)
    return (
      <Base>
        <Header />
        {
          cards.map(item => {
            return (
              <div className="card" style={{"width": "18rem"}} key={item.id}>
                <img src={item.imageUrl} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5>
                    { item.name }
                  </h5>
                </div>
              </div>
            )
          })
        }
      </Base>
    )
  }
}

export default Index