import { Suspense } from 'react';
import './App.css'
import Batter from './Batter'
import User from './User';


function App() {

  const userDataPromise = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  }
  // function handleButtonClick() {
  //   alert('button clicked!')
  // }

  return (
    <>

    <Suspense fallback={<p>User Loading....</p>}>
    <User userDataPromise={userDataPromise()}></User>
    </Suspense>
      {/* <button onlclick='handleButtonClick()'>Click old style</button>
      <button onClick={handleButtonClick}>Click me</button>
      <p>---------------</p>

      <Batter></Batter> */}


    </>
  )
}

export default App;
