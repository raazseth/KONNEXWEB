import React from 'react'
import Header from './Header'

const index = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default index