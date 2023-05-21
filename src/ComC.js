import React,{useContext} from 'react'
import { dataLayer } from './App'
import CardComponent from './CardComponent'

export default function ComC() {
    let name = useContext(dataLayer)
    console.log("Data layer= ",name.users)
  return (
    <div>Hello my name is {name.data}
    <br/>
    
    <button
        onClick={(e) => {
          name.changeValue(e)
        }}
      >
        Change Name in Component C
      </button>
      {name.users?name.users.map(elem=>{
        return <CardComponent data={elem}/>
    }):null}
    </div>
  )
}
