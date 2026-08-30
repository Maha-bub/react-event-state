import './App.css'

function App() {
  function handleButtonClick() {
    alert('button clicked!')
  }

  return (
    <>
      <button onlclick='handleButtonClick()'>Click old style</button>
      <button onClick={handleButtonClick}>Click me</button>


    </>
  )
}

export default App
