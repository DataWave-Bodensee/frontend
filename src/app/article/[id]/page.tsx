import { FactsTable } from '@/components/FactsTable'
import Relevant from '@/components/Relevant'
import React from 'react'

/**
 * Detail page for an article
 * @param id of the article
 * 
 */

const page = async ({ params }: { params: { id:number } }) => {

  const res = await fetch(`https://api-missing-migrants.azurewebsites.net/articles/${params.id}`, {cache: "no-store"})
  const res_json = await res.json()
  
  const article:Article = res_json.articles[0]
  
  return (
    <>
      <h1 className='text-2xl mb-5'>
        Article - {article.title}
        <Relevant id={article.article_id} relevant={article.relevant} />

      </h1>
      <p>Date {article.date}  {article.keywords.map(k =>
        <span key={k} className='ml-2 px-2 py-1 bg-gray-200 rounded-xl'>{k}</span>
      )}

        <span className='ml-10'>Source: <a target='blank' className='underline' href={article.website}>{article.website.length>50?article.website.slice(0,50)+'...':article.website}</a></span>
      </p>

      <h2 className='mt-10 text-xl'>Summary</h2>
      <p>{article.summary}</p>

      <FactsTable data={article} />

      <h2 className='mt-10 text-xl'>Original Content</h2>
      <p>{article.content}</p>

    </>
  )
}

export default page