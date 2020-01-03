import React, { Component } from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'

class App extends Component {
  render() {
    return (
      <>
        <LinkList />
        <br />
        <CreateLink />
      </>
    )
  }
}

export default App