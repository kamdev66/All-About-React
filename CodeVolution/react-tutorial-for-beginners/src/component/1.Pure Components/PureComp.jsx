import React, { PureComponent } from 'react'//Here,instead of importing from Component we will import PureComponent.

export class PureComp extends PureComponent {
  render() {
    console.log('Pure Component');
    return (
      <div>PureComp {this.props.name}</div>
    )
  }
}

export default PureComp