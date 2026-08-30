import './App.css'
import Batter from './Batter'

function App() {
  function handleButtonClick() {
    alert('button clicked!')
  }

  return (
    <>
      <button onlclick='handleButtonClick()'>Click old style</button>
      <button onClick={handleButtonClick}>Click me</button>
      <p>---------------</p>

      <Batter></Batter>


    </>
  )
}

export default App
