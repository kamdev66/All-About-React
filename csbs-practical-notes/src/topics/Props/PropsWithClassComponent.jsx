import React, { Component } from 'react'

export default class PropsWithClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Students:-</h1>
        <h3>
            Name:- {this.props.name}<br/>
            College:- {this.props.college}<br/>
            City:- {this.props.city}
        </h3>
      </div>
    )
  }
}
