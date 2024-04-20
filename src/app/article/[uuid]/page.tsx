import { FactsTable } from '@/components/FactsTable'
import InfoTag from '@/components/InfoTag'
import Relevant from '@/components/Relevant'
import ToggleRelevant from '@/components/Relevant'
import { table } from 'console'
import React from 'react'

const page = ({ params }: { params: { uuid: string } }) => {


  const data = {

    "article_id": 3,
    "website": "https://www.bbc.com/news/world-africa-57033012",
    "content": "The content of the article",
    "keywords": [
      "migrant",
      "drown",
      "boat"
    ],
    "date": "2021-05-06",
    "number_dead": 20,
    "number_missing": 10,
    "number_survivors": 30,
    "country_of_origin": "Libya",
    "region_of_origin": "North Africa",
    "cause_of_death": "Drowning",
    "region_of_incident": "Mediterranean",
    "country_of_incident": "Italy",
    "location_of_incident": "Mediterranean Sea",
    "latitude": 41.9028,
    "longitude": 12.4964,

    "relevant": true,
    "title": "Migrant boat capsizes in Mediterranean Sea",
    "summary": "A boat carrying migrants capsized in the Mediterranean Sea. 20 people died and 10 are missing. 30 people survived.",

  }


  return (
    <>
      <h1 className='text-2xl mb-5'>
        Article - {data.title}
        <Relevant id={data.article_id} relevant={data.relevant} />

      </h1>
      <p>Date {data.date}  {data.keywords.map(k =>
        <span key={k} className='ml-2 px-2 py-1 bg-gray-200 rounded-xl'>{k}</span>
      )}

        <span className='ml-10'>Source: <a target='blank' className='underline' href={data.website}>{data.website}</a></span>
      </p>

      <h2 className='mt-10 text-xl'>Summary</h2>
      <p>{data.summary}</p>

      <h2 className='mt-10 text-xl'>Content</h2>
      <p>{data.content}</p>

      <FactsTable data={data} />
    </>
  )
}

export default page