import React from 'react'

const incident = ({params}:{params:{uuid:string}}) => {
  return (
    <div>{params.uuid}</div>
  )
}

export default incident