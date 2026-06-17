// // function App() {
// //   let name = "CSE16";
// //   let year = 2026;
// //   return (
// //     <div >
      
// //       <h1> My Favourite Nature Gallery</h1>
// //       <img src="https://render.pixels.com/images/rendered/medium/metal-print/6/8/break/images-medium-5/awesome-solitude-bess-hamiti.jpg"></img>
// //       <img src="https://render.pixels.com/images/rendered/search/print/8/5.5/break/images/artworkimages/medium/2/rocky-mountain-morning-estes-park-colorado-gregory-ballos.jpg"></img>
// //     </div>
// //   );
// // }
// //   export default App;
// import StudentCard from"./StudentCard"
// function App()
// {
//   return(
//     <div className="App">
//       <StudentCard name ="john" age="20" marks="185"
//       <StudentCard name ="johwn" age="120" marks="815"
//       <StudentCard name ="jowhn" age="202" marks="8115"
//     </div>
//   )
// }
// ]
import {useState} from'react';
function App() {
  const [ score ,setScore]=useState(0);//YAAD KR LENA ISKO YHN 0 INITIAL VALUE HAI
  return(
    <div>
      <h1> Welcome to the Game Zone</h1>
      <h2>Current Score:{score}</h2>
      <button onClick={()=>setScore(score+1)}>
        Increase Score</button>
        <button onClick={()=>setScore(score-1)}></button>
        Decrease score</button>
      </div>
  )
};
         