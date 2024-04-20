"use client"
import React, { use } from 'react'

const Relevant = ({ id, relevant }: { id?: number, relevant: boolean }) => {

    
    const toggle = async () => { }
    const readonly = id === undefined


    return (
        <span 
            onClick={readonly?toggle:()=>{}} 
            className={`${readonly?'':'cursor-pointer hover:bg-gray-200'} ml-5 text-sm text-${relevant ? 'green' : 'red'}-800 rounded-xl bg-${relevant?'green':'red'}-300 px-2 py-1`}> {relevant ? "" : "Not "}Relevant</span>
    )
}

export default Relevant