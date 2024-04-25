import Link from 'next/link'
import React from 'react'

/**
 * Simple navbar component to navigate between incidents and articles
 * 
 */

export const Navbar = () => {

    const links = [
        {href: '/', text: 'incidents'},
        {href: '/articles', text: 'articles'}
    ]

  return (
    <div className='mt-5'>

        {links.map((link) => (
            <Link className="mr-5 py-1 px-3 rounded-xl bg-gray-200 text-red-700 hover:bg-gray-400 hover:text-red-900" href={link.href} key={link.href}>
                    {link.text}
            </Link>
        ))}

    </div>
  )
}
export default Navbar
