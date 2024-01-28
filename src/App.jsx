import { useState } from 'react'
import './App.css'
// import Arr from './components/array'
import Cart from './components/shopping'
// import Quiz from './components/quiz'

function App() {
    // const [count, setCount] = useState({
    //   id : 101,
    //   title : "Cell Phone",
    //   price : 40000,
    //   unit : 10
    // })
   
   
    // function increment () {
    //     let cp = {...count}
    //     cp.unit += 1;
    //     setCount (cp) 
    // }
    // function decrement () {
    //     let cp = {...count}
    //     cp.unit -= 1;
  
    //     setCount (cp) 
    // }
  
    return (
      <>
           <h1>React</h1>     
        {/* <button onClick = {increment} disabled = {count.unit === 19 }>increment</button>
        <h2>qty = {count.unit} <br/> price = {count.price}</h2>
        <button onClick = {decrement} disabled = {count.unit === 1} >decrement</button>  */}
         <Cart/> 

         {/* <Arr/> */}
        
         {/* <Quiz/> */}
      </>
    )
  }



export default App

// function App() {
//   const [count, setCount] = useState(0)
//   function increment () {
//       setCount(count + 1)
//   }

//   return (
//     <>
//          <h1>Vite + React</h1>     
//       <button onClick = {increment}>increment</button>
//       <h2>{count}</h2>
//     </>
//   )
// }
