import { FactsTable } from '@/components/FactsTable'
import Verified from '@/components/Verified'
import Link from 'next/link'
import React from 'react'

/**
 * Detail page for an incident
 * @param id of the incident
 * 
 */

const Incident = async ({ params }: { params: {id:number } }) => {

  const res = await fetch(`https://api-missing-migrants.azurewebsites.net/incidents/${params.id}`, {cache: "no-store"})
  const res_json = await res.json()
  const incident:Incident= res_json.incident[0]
  const articles: [Article] = res_json.articles


  return (
    <>
      <h1 className='text-2xl mb-5'>
        Incident - {incident.title}
        <Verified verified={incident.verified} id={incident.incident_id} />
      </h1>

      <p>Date {incident.date}</p>

      <h2 className='mt-10 text-xl mb-2'>Sources</h2>
      
        {articles.map(article => (
          <Link key={article.article_id} href={`/article/${article.article_id}`}>
            <div className='mb-2'>{article.title} <span className='text-gray-400'>{article.website.length>50?article.website.slice(0,50)+'...':article.website}</span></div>
          </Link>))}
      

      <FactsTable data={incident} />
    </>
  )
}

export default Incident