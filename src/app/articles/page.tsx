import Relevant from '@/components/Relevant'
import Link from 'next/link'
import React from 'react'

const page = async () => {

  const res = await fetch('https://api-missing-migrants.azurewebsites.net/articles', {cache: "no-store"}) 
  const data:[any] = (await res.json()).articles
  
  return (
    <>
      <h1 className='text-2xl mb-5'>Articles</h1>

      {data.map((article) => (
        <Link href={`/article/${article.article_id}`} key={article.article_id}>
          <div className='mb-5 hover:bg-gray-200 rounded-xl p-5'>
            <h2 className='text-xl'>
              {article.title} <span className='ml-5'>{article.date}</span>
              <Relevant relevant={article.relevant} />
            </h2>
            <p>{article.region_of_origin}, {article.country_of_origin} to {article.region_of_incident}, {article.country_of_incident} </p>
            <p className='mt-2'>{article.summary}</p>
          </div>
        </Link>
      ))}

    </>
  )
}

export default page