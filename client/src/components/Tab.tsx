import React from 'react'

const Tab = ({tab, handleClick}) => {
  return (
    <div onClick={handleClick}>{tab.name}</div>
  )
}

export default Tab