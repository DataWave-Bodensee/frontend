import React from 'react'

const page = ({ params }: { params: { uuid: string } }) => {
  return (
    <>
    <p>{params.uuid}</p>
    </>
  )
}

export default page