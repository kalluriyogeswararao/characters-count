import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import './App.css'

class App extends Component {
  state = {wordsList: [], inputText: ''}

  onChangeTextInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickAddWords = () => {
    const {inputText} = this.state
    const newWord = {
      id: uuidV4(),
      word: inputText,
      count: inputText.length,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newWord],
      inputText: '',
    }))
  }

  onRenderAllWordsList = wordsList => (
    <ul className="all-words">
      {wordsList.map(each => (
        <li className="each-word" key={each.id}>
          <p className="word">{each.word}:</p>
          <p className="count">{each.count}</p>
        </li>
      ))}
    </ul>
  )

  onRenderEmptyWordsList = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="no-inputs"
      />
    </div>
  )

  onRenderWordsList = () => {
    const {wordsList} = this.state

    if (wordsList.length > 0) {
      return this.onRenderAllWordsList(wordsList)
    }
    return this.onRenderEmptyWordsList()
  }

  render() {
    const {inputText} = this.state
    return (
      <div className="bg-container">
        <div className="results-display-container">
          <div className="card-container">
            <h1 className="main-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          {this.onRenderWordsList()}
        </div>
        <div className="input-container">
          <h1 className="heading">Character Counter</h1>
          <form className="input-btn-container" onSubmit={this.onClickAddWords}>
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              onChange={this.onChangeTextInput}
              value={inputText}
            />
            <button className="button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
