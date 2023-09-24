import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {text: true}

  onClickEvent = () => {
    this.setState(prevState => ({
      text: !prevState.text,
    }))
  }

  changeText = () => {
    const {text} = this.state
    return text ? 'light Mode' : 'Dark Mode'
  }

  render() {
    const buttonText = changeText()

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.onClickEvent} className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
