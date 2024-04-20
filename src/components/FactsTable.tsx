import React from 'react'
import InfoTag from './InfoTag'

export const FactsTable = ({data}:{data:any}) => {
  return (
    <>

      <h2 className='mt-10 mb-2 text-xl'>Origin</h2>
      <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="bg-gray-50">
            <td className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region of origin</td>
            <td className="w-1/4 px-6 py-3 whitespace-nowrap">{data.region_of_origin}</td>
            <td><InfoTag/></td>
          </tr>
          <tr className="bg-white">
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country of origin</td>
            <td className="px-6 py-3 whitespace-nowrap">{data.country_of_origin}</td>
            <td><InfoTag/></td>
          </tr>
        </tbody>
      </table>

      <h2 className='mt-10 mb-2 text-xl'>Incident</h2>
      <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="bg-gray-50">
            <td className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region of Incident</td>
            <td className="w-1/4 px-6 py-3 whitespace-nowrap">{data.region_of_incident}</td>
            <td><InfoTag/></td>
          </tr>
          <tr className="bg-white">
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country of Incident</td>
            <td className="px-6 py-3 whitespace-nowrap">{data.country_of_incident}</td>
            <td><InfoTag/></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location of Incident</td>
            <td className="px-6 py-3 whitespace-nowrap">{data.location_of_incident}</td>
            <td><InfoTag/></td>
          </tr>
        </tbody>
      </table>


      <h2 className='mt-10 mb-2 text-xl'>Outcome</h2>
      <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="bg-gray-50">
            <td className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number Dead</td>
            <td className="w-1/4 px-6 py-3 whitespace-nowrap">{data.number_dead}</td>
            <td ><InfoTag/></td>
          </tr>
          <tr className="bg-white">
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number Missing</td>
            <td className="px-6 py-3 whitespace-nowrap">{data.number_missing}</td>
            <td><InfoTag/></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number Survivors</td>
            <td className="px-6 py-3 whitespace-nowrap">{data.number_survivors}</td>
            <td><InfoTag/></td>
          </tr>
          <tr className="bg-white">
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cause of Death</td>
            <td className="px-6 py-3 whitespace-nowrap">{data.cause_of_death}</td>
            <td><InfoTag/></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
