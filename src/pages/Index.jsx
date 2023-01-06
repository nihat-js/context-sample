import React from 'react'
import Counter from '../components/Counter'

import './Index.css'

export default function Index() {
  return (
    <div className='index-page'>
       <h2 className='heading'> Index Page</h2> 
      <Counter/>
    </div>
  )
}
