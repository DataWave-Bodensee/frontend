'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import Verified from './Verified'

export const TableRow = ({ incident, index }: { incident: any, index: number }) => {

  const router = useRouter()
  const goTo = () => {
    router.push(`/incident/${incident.incident_id}`)

  }

  return (


    <tr onClick={goTo} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-200 cursor-pointer`}>
      <td className="px-6 py-4 whitespace-nowrap">{incident.title}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.date}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.region_of_origin}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.country_of_origin}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.location_of_incident}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.country_of_incident}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.number_dead}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.number_missing}</td>
      <td className="px-6 py-4 whitespace-nowrap">{incident.number_survivors}</td>
      <td className="px-6 py-4 whitespace-nowrap"><Verified verified={incident.verified} /></td>
    </tr>
  )
}
