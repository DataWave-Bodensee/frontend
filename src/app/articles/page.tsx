import Relevant from '@/components/Relevant'
import Link from 'next/link'
import React from 'react'

const page = () => {

  const data = 
  [
    {
      "article_id": 1,
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
      'relevant': false,
      'title': 'Migrant boat capsizes in Mediterranean Sea',
      'summary': 'A boat carrying migrants capsized in the Mediterranean Sea. 20 people died and 10 are missing. 30 people survived.'
    },
    {
      "article_id": 2,
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
      'relevant': false,
      'title': 'Migrant boat capsizes in Mediterranean Sea',
      'summary': 'A boat carrying migrants capsized in the Mediterranean Sea. 20 people died and 10 are missing. 30 people survived.'
    },
    {
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
      'title': 'Migrant boat capsizes in Mediterranean Sea',
      'relevant': true,
      'summary': 'A boat carrying migrants capsized in the Mediterranean Sea. 20 people died and 10 are missing. 30 people survived.'
    }
  ]


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