import React from 'react'

const CardTitle = ({title, userCount}) => {
  return (
    <>
    <h1>{userCount} {title}</h1>
    </>
  )
}

export default CardTitle