import React from 'react'

interface Props {

}

interface State {
  bitOState: string
}

export default class TSComponent extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props) 
    this.state = {
      bitOState: 'Hello!'
    }
  }
  componentDidMount() {
    console.log('TSComponent initialized!')
  }

  componentWillReceiveProps() {
    console.log('TSComponent received new props')
    this.test()
  }

  test = () => {
    const {bitOState} = this.state
    this.setState({bitOState: bitOState[bitOState.length - 1] + bitOState.slice(0, bitOState.length - 1)})
  }

  render() {
    console.log('TSComponent rendered');
    const {bitOState} = this.state

    return(
      <div>
        <p>I'm a TS Component... Debug me!</p>
        <b>{bitOState}</b>
      </div>
    )
  }
}