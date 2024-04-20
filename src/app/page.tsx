import SimpleMap from "@/components/Map";
import { TableRow } from "@/components/TableRow";
import dynamic from "next/dynamic";
import Link from "next/link";


export default function Home() {

  const Map = dynamic(() => import('@/components/Map'), {
    loading: () => <p>loading...</p>,
    ssr: false
  })

  const data =
    [
      {
        "incident_id": 1,
        "verified": true,
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
        'summary': 'A boat carrying migrants capsized in the Mediterranean Sea. 20 people died and 10 are missing. 30 people survived.'
      },
      {
        "incident_id": 2,
        "verified": false,
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
        'summary': 'A boat carrying migrants capsized in the Mediterranean Sea. 20 people died and 10 are missing. 30 people survived'
      },
      {
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
        'summary': 'A boat carrying migrants capsized in the Mediterranean Sea. 20 people died and 10 are missing. 30 people survived.'
      }
    ]

  return (
    <>
      <h1 className="text-2xl mb-5">Incidents</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region of Origin</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country of Origin</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location of Incident</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country of Incident</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number Dead</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number Missing</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number Survivors</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verified</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((incident, index) => (
            <TableRow key={incident.incident_id} incident={incident} index={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}
