import { FactsTable } from '@/components/FactsTable'
import Relevant from '@/components/Relevant'
import React from 'react'

const page = async ({ params }: { params: { uuid: string } }) => {

  const res = await fetch(`https://api-missing-migrants.azurewebsites.net/articles/${params.uuid}`, {cache: "no-store"})
  const res_json = await res.json()
  const data:any = res_json.articles[0]
  
  return (
    <>
      <h1 className='text-2xl mb-5'>
        Article - {data.title}
        <Relevant id={data.article_id} relevant={data.relevant} />

      </h1>
      <p>Date {data.date}  {data.keywords.map(k =>
        <span key={k} className='ml-2 px-2 py-1 bg-gray-200 rounded-xl'>{k}</span>
      )}

        <span className='ml-10'>Source: <a target='blank' className='underline' href={data.website}>{data.website.length>50?data.website.slice(0,50)+'...':data.website}</a></span>
      </p>

      <h2 className='mt-10 text-xl'>Summary</h2>
      <p>{data.summary}</p>

      <FactsTable data={data} />

      <h2 className='mt-10 text-xl'>Original Content</h2>
      <p>{data.content}</p>

    </>
  )
}

export default page