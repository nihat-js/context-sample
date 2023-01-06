import React, { useContext } from 'react'
import { Context } from '../context/mainContext'

export default function Counter() {
   const methods = useContext(Context)
   console.log(methods)
  return (
    <div className='counter'>
      <p className="text"> I am {methods.count} </p> 
      <div className="action">
      <button onClick={ () => methods.setCount(methods.count+19) } > + 19 </button>
      </div>
    </div>
  )
}
