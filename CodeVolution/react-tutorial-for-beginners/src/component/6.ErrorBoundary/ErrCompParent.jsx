import React, { Component } from 'react'
import ErrComp from './ErrComp'
import ErrorBoundary from './ErrorBoundary'

class ErrCompParent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
        <ErrComp heroName='Batman'/>
        <ErrComp heroName='Superman'/>
        <ErrComp heroName='Joker'/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default ErrCompParent