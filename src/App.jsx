import "./App.css";
import { useEffect, useState } from "react";
import {asyncFetch,promiseFetch,anonFetch} from "./fetchHelpers/moduleFetch";

function App() {
  const [data, setData] = useState([]);
  const [errorState, setErrorState] = useState(false);

//   async function fetchData() {
//       fetch('https://www.boredapi.com/api/activity/')
//           .then(response => response.json())
//           .then(data => {
//               setData(data)
//               console.log(data)
//           })
//   }

//   async function fetchData() {
//     const response = await fetch("https://www.boredapi.com/api/activity/");
//     const activities = await response.json();
//     setData(activities);
//   }

//   const fetchData=async ()=>{
//       try {
//         const response = await fetch('https://www.boredapi.com/api/activity/');
//         setData(await response.json());
//         console.log("Wahoo, it worked");
//       } catch (error) {
//           console.log("Erm, this went a bit wrong");
//           setErrorState(true);
//       } finally {
//           console.log("The fetch has finished");
//       }
//   }

  useEffect(() => {
    async function myResults(){
        const fetchData=await anonFetch()
        setData(fetchData)
    };
    myResults()
  }, []);

  return (
    <div className="App">
      <div>
        <p>Activity: {data.activity}</p>
        <p>Type: {data.type}</p>
        <p>Participants: {data.participants}</p>
        <p>Price: {data.price}</p>
        <p>Key: {data.key}</p>
        <p>Accessibility: {data.accessibility}</p>
      </div>

      {errorState ? <h1>ERROR OCCURED</h1> : null}
    </div>
  );
}

export default App;
