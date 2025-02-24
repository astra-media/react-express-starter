import React from 'react'

const Meta = ({
  title = 'React Express Starter Kit',
  description = 'Starter kit for React and Express.js',
  keywords = 'React, Express, Starter Kit, MERN, Node',
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </>
  )
}

export default Meta
