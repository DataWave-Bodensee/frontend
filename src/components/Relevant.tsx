"use client"
import React, { use } from 'react'

const Relevant = ({ id, relevant }: { id?: number, relevant: boolean }) => {


    const toggle = async () => { }
    const readonly = id === undefined


    return (
        <span
            onClick={readonly ? toggle : () => { }}
            className={`
                ${readonly ? '' : 'cursor-pointer'}
                ${!readonly && relevant ? 'hover:bg-red-200 hover:text-red-800' : ''}
                ${!readonly && !relevant ? 'hover:bg-green-200 hover:text-green-800' : ''}
                ${relevant ? 'text-green-800' : 'text-red-800'}
                ${relevant ? 'bg-green-200' : 'bg-red-200'}
                px-2 py-1 ml-5 text-sm rounded-xl `}> {relevant ? "" : "Not "}
            Relevant
        </span>

    )
}

export default Relevant