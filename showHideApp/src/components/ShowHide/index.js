// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isfristName: false,
    islastName: false,
  }

  onClickEvent = () => {
    this.setState(prevState => ({
      isfristName: !prevState.isfristName,
    }))
  }

  onClickEventU = () => {
    this.setState(prevState => ({
      islastName: !prevState.islastName,
    }))
  }

  render() {
    const {islastName, isfristName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <button onClick={this.onClickEvent} className="button" type="button">
            show/hide
          </button>
          {isfristName && <p className="name">joe</p>}
        </div>
        <div className="card-container">
          <button onClick={this.onClickEventU} type="button" className="button">
            show/hide
          </button>
          {islastName && <p className="name">joe</p>}
        </div>
      </div>
    )
  }
}

export default ShowHide
