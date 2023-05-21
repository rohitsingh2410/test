import React, { createContext, useEffect, useState } from "react";
import ComA from "./ComA";

const dataLayer = createContext();

function App() {
  const [data, setData] = useState("Rohit Singh");
  const [users,setUsers]=useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const changeValue=(e)=>{
    console.log("Function in App.js is called.")
    data === "Rohit Singh"
            ? setData("Darklooter")
            : setData("Rohit Singh");
  }
  return (
    <dataLayer.Provider value={{data,changeValue,users}}>
      <div className="App">
        <ComA />
      </div>
      
    </dataLayer.Provider>
  );
}

export default App;
export { dataLayer };
