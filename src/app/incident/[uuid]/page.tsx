import { FactsTable } from '@/components/FactsTable'
import Verified from '@/components/Verified'
import Link from 'next/link'
import React from 'react'

const incident = async ({ params }: { params: { uuid: string } }) => {

  const res = await fetch(`https://api-missing-migrants.azurewebsites.net/incidents/${params.uuid}`, {cache: "no-store"})
  const json_data = await res.json()
  const data = json_data.incident[0]
  const articles: [any] = json_data.articles


  return (
    <>
      <h1 className='text-2xl mb-5'>
        Incident - {data.title}
        <Verified verified={data.verified} id={data.incident_id} />
      </h1>

      <p>Date {data.date}</p>

      <h2 className='mt-10 text-xl mb-2'>Sources</h2>
      
        {articles.map(article => (
          <Link key={article.article_id} href={`/article/${article.article_id}`}>
            <div className='mb-2'>{article.title} <span className='text-gray-400'>{article.website.length>50?article.website.slice(0,50)+'...':article.website}</span></div>
          </Link>))}
      

      <FactsTable data={data} />
    </>
  )
}

export default incident