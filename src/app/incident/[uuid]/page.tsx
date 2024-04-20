import { FactsTable } from '@/components/FactsTable'
import Verified from '@/components/Verified'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const incident = ({ params }: { params: { uuid: string } }) => {

  const data = {
    "incident_id": 3,
    "verified": true,
    "date": "2021-05-06",
    "number_dead": 20,
    "number_missing": 10,
    "number_survivors": 30,
    "country_of_origin": "Libya",
    "region_of_origin": "North Africa",
    "cause_of_death": "Drowning",
    "region_of_incident": "Mediterranean",
    "country_of_incident": "Spain",
    "location_of_incident": "Mediterranean Sea",
    "latitude": 41.9028,
    "longitude": 12.4964,

    'title': 'Migrant boat capsizes in Mediterranean Sea',
  }

  const articles = [{ website: 'https://www.bbc.com/news/world-africa-57033012', id: 1, title: 'Migrant boat capsizes in Mediterranean Sea' }]


  return (
    <>
      <h1 className='text-2xl mb-5'>
        Incident - {data.title}
        <Verified verified={data.verified} id={data.incident_id} />
      </h1>

      <p>Date {data.date}</p>

      <h2 className='mt-10 text-xl'>Sources</h2>
      <p>
        {articles.map(article => (
          <Link key={article.id} href={`/article/${article.id}`}>
            {article.title} <span className='text-gray-400'>{article.website}</span>
          </Link>))}
      </p>

      <FactsTable data={data} />
    </>
  )
}

export default incident