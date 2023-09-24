import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: true}

  onClickEvent = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you ! Happy learn</p>
        {status ? (
          <button onClick={this.onClickEvent} className="button" type="button">
            subscribe
          </button>
        ) : (
          <button onClick={this.onClickEvent} className="button" type="button">
            subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
