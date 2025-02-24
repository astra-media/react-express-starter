import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

const HomeScreen = () => {
  return (
    <>
      <Meta title='Home' />
      <h3>Home</h3>
      <Link to={'/features'}>
        <p>Go to Feature Screen</p>
      </Link>
    </>
  )
}

export default HomeScreen
