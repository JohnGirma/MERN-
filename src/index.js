import React , { useState ,useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import Axios from "axios"
import PeopleCard from './components/PeopleCard '

function App() {
  const [peoples, setPeople] = useState([]);

  useEffect(()=>{
      async function go(){
          const response  =await Axios.get("/api/peoples")
          setPeople(response.data)
          console.log(setPeople)
      }
      go()

  },[])
  return(
    <div className="container">
      <p>
        <a href="/">&laquo; Back to public homepage</a>
      </p>
      </div>
  )
}
   
const root = createRoot(document.querySelector('#app'))
root.render(<App />)