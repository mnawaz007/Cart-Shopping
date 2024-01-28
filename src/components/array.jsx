import { useState } from 'react'
export default function Arr(){
    let [arr, setArr] = useState([1, 2, 3, 4, 5] ) ;

    // function check(index, dx){
    //       let newArr = [...arr];
    //       newArr[index] += dx;
    //       setArr(newArr);   }  
              return (
        <>
        <h2>Array Methods</h2>
        <h3>Aim</h3>
        <p>arr=[1, 2, 3, 4, 5],, <br/>
        take this array and seprate each element and add button of increment and decrement and make these buttons functional ..
        </p>
        <ul>

            { 
                arr.map((x, index) => (
                    <li key={index}> <button onClick={() => {
                         let newArr = [...arr];
                         newArr[index] ++;
                         setArr(newArr);

                    }}> + </button>
                        { x } <button onClick = {()=>{
                             let newArr = [...arr];
                             newArr[index] -- ;
                             setArr(newArr);
                        }}> - </button>
                        </li>
                ))
            } 
         </ul>
        
        </>
    )
} 

    
  // dx is differental parameter ,, ie if we give it + value it will add and if we give it - value it will decrement..
//    function increment1 (index, dx){
//     let cpA = [...arr];
//         cpA[index] += dx;
//         setArr(cpA)
//    }

   // if we do not pass differental parameter then we can write functions eperately ...
//    function decrement1 (index){
//     let cpA = [...arr];
//         cpA[index] += dx;
//         setArr(cpA)
//    }

//     return(
//         <>
//         <h2>Marks calc </h2>
//         <ul style={{listStyle: 'none'}}>
//             {
//                 arr.map((x,i) => ( 
                
//                 <li key = {i} style={{margin: '10px'}}>
//                   <button onClick ={() => increment1(i, 1)  } disabled = {x === 20 } > + </button> 
//                      {x}
//                   <button onClick ={() => increment1(i, -1) } disabled = {x === 0 } > - </button>
                
//                 </li>

//                 ))
//             }
//         </ul>
//         </>
//     )
// }