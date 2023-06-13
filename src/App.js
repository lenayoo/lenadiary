import './App.css'
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [emotion, setEmotion] = useState(3)
  const [diary, setDiary] = useState({
    title: '',
    text: '',
    emotion: 3,
  })

  function inputHandler(e) {
    setTitle(e.target.value)
    console.log(e.target.value)
  }

  function textareaHandler(e) {
    setText(e.target.value)
    console.log(e.target.value)
  }

  function selectHandler(e) {
    setEmotion(e.target.value)
    console.log(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    setDiary({ title: setTitle, text: setText, emotion: setEmotion })
    console.log(setDiary)
  }

  return (
    <div className="App">
      <h1>Lena Diary</h1>
      <form className="body" onSubmit={submitHandler}>
        <label>what happened</label>
        <input className="writer" onChange={inputHandler} value={title} />
        <label>In details</label>
        <textarea
          className="diary-content"
          onChange={textareaHandler}
          value={text}
        ></textarea>
        <label>check today's rate</label>
        <select className="emotion" onChange={selectHandler} value={emotion}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button type="submit">submit</button>
      </form>
      <div className="line"></div>
    </div>
  )
}

export default App
