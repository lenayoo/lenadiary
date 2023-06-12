import './App.css'
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  function inputHandler(e) {
    setTitle(e.target.value)
    console.log(e.target.value)
  }

  function textareaHandler(e) {
    setText(e.target.value)
    console.log(e.target.value)
  }

  function submitHandler() {}

  return (
    <div className="App">
      <h1>Lena Diary</h1>
      <form className="body">
        <input className="writer" onChange={inputHandler} value={title} />
        <textarea
          className="diary-content"
          onChange={textareaHandler}
          value={text}
        ></textarea>
        <select className="emotion">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button type="submit" onSubmit={submitHandler}>
          submit
        </button>
      </form>
      <div className="line"></div>
    </div>
  )
}

export default App
