import React from 'react'

/**
 * Tag to display that the information was extracted by AI
 * In future work this contains interaction to approve the value
 * 
 */

const InfoTag = () => {
  return (
    <span className='cursor-pointer ml-5 px-2 py-1 bg-orange-100  rounded-xl hover:bg-green-100'>AI Extracted</span>
  )
}

export default InfoTag