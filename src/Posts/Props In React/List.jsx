import React, { Component } from 'react'

import ListItem from "./ListItem"

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: [
        "Henry",
        "Julie",
        "Jade"
      ]
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.names.map((eachName) => {
            return <ListItem key={Math.random()} item={eachName} />
          })}
        </ul>
      </div>
    )
  }
}
