import React from 'react'

export default class JSComponent extends React.Component{
  componentDidMount() {
    console.log('JSComponent initialized!')
    this.startupFunction();
  }

  startupFunction() {
    console.log("Something else to breakpoint on"); 
  }

  render() {
    console.log('JSComponent rendered');

    return(
      <div>
        <p>I'm a JS Component... Debug me!</p>
      </div>
    )
  }
}