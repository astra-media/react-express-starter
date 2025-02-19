import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <>
      <h3>HomeScreen</h3>
      <Link to={'/features'}>
        <p>Go to Feature Screen</p>
      </Link>
    </>
  )
}

export default HomeScreen
