import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isValid: false}

  onClickSubscribe = () => {
    this.setState(prevState => ({isValid: !prevState.isValid}))
  }

  getButtonText = () => {
    const {isValid} = this.state
    const buttonText = isValid ? 'Subscribed' : 'Subscribe'
    return buttonText
  }

  render() {
    const {heading, paragraph} = this.props
    const displayButtonText = this.getButtonText()

    return (
      <div className="card-container">
        <h1 className="heading-style">{heading}</h1>
        <p className="paragraph-style">{paragraph}</p>
        <button
          className="button-style"
          type="button"
          onClick={this.onClickSubscribe}
        >
          {displayButtonText}
        </button>
      </div>
    )
  }
}

export default Welcome
