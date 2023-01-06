import React, { createContext , useState } from 'react'


export const Context = createContext()
export default function mainContext(props) {

   const [count, setCount] = useState(0)


  return (
    <Context.Provider value={{count ,setCount }} >{props.children}</Context.Provider>
  )
}
