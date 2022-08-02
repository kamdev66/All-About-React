import React, { Component } from 'react'
import ComponentA from './ComponentA'
import { UserProvider } from './userContext'

class Starting extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Kamdev">
        <ComponentA/>
        </UserProvider>
      </div>
    )
  }
}

export default Starting