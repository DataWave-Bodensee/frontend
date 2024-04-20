import Link from 'next/link'
import React from 'react'

const page = () => {

  const data = [{uuid:'asd', title:"article1", content:"content1"}, {uuid:'asdasd', title:"article2", content:"content2"}]

  return (
    <>
    <h1 className='text-2xl mb-5'>Articles</h1>

    {data.map((article) => (
        <Link href={`/article/${article.uuid}`} key={article.uuid}>
        <div className='mb-5 hover:bg-gray-200 rounded-xl p-5'>
            <h2 className='text-xl'>{article.title}</h2>
            <p>{article.content}</p>
        </div>
        </Link>
        ))}


    </>
  )
}

export default page