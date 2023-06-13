import React from 'react'

const Header=({title})=> {

  return (
    <header >
    <h1>{title}</h1>
    </header>
  )
}

//Props
Header.defaultProps = {
  title: "My Daily Activities"
}

export default Header
