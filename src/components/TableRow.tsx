'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Verified from './Verified'

/**
 * Row to display an incident in the table
 * @param incident the incident to be inserted in the table
 * @param index the index of the incident in the table
 * 
 */

export const TableRow = ({ incident, index }: { incident: Incident, index: number }) => {

  const router = useRouter()
  const goTo = () => {
    router.push(`/incident/${incident.incident_id}`)
  }

  // Function to limit the length of the text
  // otherwise the table will be too wide
  const limit = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text
  }

  return (
    <tr onClick={goTo} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-200 cursor-pointer`}>
      <td className="px-6 py-4 whitespace-nowrap">{limit(incident.title, 40)}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.date}</td>
      <td className="px-6 py-4 whitespace-nowrap">{limit(incident.region_of_origin, 20)}</td>
      <td className="px-6 py-4 whitespace-nowrap">{limit(incident.country_of_origin, 20)}</td>
      <td className="px-6 py-4 whitespace-nowrap">{limit(incident.location_of_incident, 20)}</td>
      <td className="px-6 py-4 whitespace-nowrap">{limit(incident.country_of_incident, 20)}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.number_dead}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.number_missing}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.number_survivors}</td>
      <td className="px-6 py-4 whitespace-nowrap"><Verified verified={incident.verified} /></td>
    </tr>
  )
}
