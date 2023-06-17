import './App.css'
import { useState } from 'react'

function App() {
  const [diaries, setDiaries] = useState([])
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
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log(diary)
    setDiaries([...diaries, diary])
    setDiary({ title: '', text: '', emotion: 1 })
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
          <option>매우좋음</option>
          <option>완전 좋음</option>
          <option>꽤 좋음</option>
          <option>Perfect</option>
          <option>성장의 날</option>
        </select>
        <button type="submit">submit</button>
      </form>
      <div className="line"></div>
      {diaries.map((diary, index) => (
        <div key={index} className="diary-list">
          <h2 className="diary-title">{diary.title}</h2>
          <div className="diary-line"></div>
          <p className="diary-content">{diary.text}</p>
          <p className="diary-emotion">{diary.emotion}</p>
        </div>
      ))}
    </div>
  )
}

export default App
