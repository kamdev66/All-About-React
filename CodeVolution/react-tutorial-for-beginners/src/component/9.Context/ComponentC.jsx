import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentC extends Component {
  render() {
    return (
      <div>
        <h1>ComponentC</h1>
        <UserConsumer>
            {
                (username)=>{
                    return <h2>Hello {username}</h2>
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentC