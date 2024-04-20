"use client"
import React, { use } from 'react'

const Verified = ({ id, verified }: { id?: number, verified: boolean }) => {

    
    const toggle = async () => { }
    const readonly = id === undefined

    const color = verified ? 'green' : 'red'


    return (
        <span 
            onClick={readonly?toggle:()=>{}} 
            className={`${readonly?'':'cursor-pointer hover:bg-gray-200'} ml-5 text-sm text-${verified ? 'green' : 'orange'}-800 rounded-xl bg-${verified?'green':'red'}-300 px-2 py-1`}> {verified ? "" : "Not "}
            Verified
        </span>
    )
}

export default Verified