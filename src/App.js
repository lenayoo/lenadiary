import './App.css'
import { useState } from 'react'

function App() {
  const [diary, setDiary] = useState({
    title: '',
    text: '',
    emotion: 3,
  })

  function onChangeHandler(e) {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    })

    console.log(e.target.name)
    console.log(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log(diary)
    alert('오늘의 일기를 저장했습니다.')
  }

  return (
    <div className="App">
      <h1>Lena Diary</h1>
      <form className="body" onSubmit={submitHandler}>
        <label>제목</label>
        <input
          className="writer"
          onChange={onChangeHandler}
          name="title"
          value={diary.title}
        />
        <label>내용</label>
        <textarea
          className="diary-content"
          onChange={onChangeHandler}
          name="text"
          value={diary.text}
        />
        <label>감정점수</label>
        <select
          className="emotion"
          onChange={onChangeHandler}
          name="emotion"
          value={diary.emotion}
        >
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
