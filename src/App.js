import './App.css'

function App() {
  return (
    <div className='App'>
      <h2>Lena Diary</h2>
      <div className="body">
        <input className="writer" />
        <textarea className="diary-content"></textarea>
        <select className="emotion">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className='line'></div>
    </div>
  )
}

export default App
