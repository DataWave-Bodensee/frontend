import SimpleMap from "@/components/Map";
import dynamic from "next/dynamic";
import Link from "next/link";


export default function Home() {

  const Map = dynamic(() => import('@/components/Map'), {
    loading: () => <p>loading...</p>,
    ssr: false
  })

  const data =     [{
    "uuid":"abc",
    "title":"incident 1",
    "num_articles": 5,
    "date": "2024-01-01",
    "num_missing": 3,
    "num_death": 2,
    "region": "North America",
    "number_dead": 2,
    "number_missing" : 5,
    "number_survivors": 1,
    "country_of_origin": "Mexico",
    "region_of_origin": "Central America",
    "cause_of_death": "Drowning",
    "country_of_incident": "USA",
    "location_of_incident": "USA",
    "longitude": 31.650259,
    "latitude": -110.366453,
    "verified": "True"
}, 
{
    "uuid":"def",
    "title":"incident 2",
    "num_articles": 5,
    "date": "2024-01-01",
    "num_missing": 3,
    "num_death": 2,
    "region": "North America",
    "number_dead": 2,
    "number_missing" : 5,
    "number_survivors": 1,
    "country_of_origin": "Mexico",
    "region_of_origin": "Central America",
    "cause_of_death": "Drowning",
    "country_of_incident": "USA",
    "location_of_incident": "USA",
    "longitude": 31.650259,
    "latitude": -110.366453,
    "verified": "True"}
  
  
]

  return (
    <>
    <h1 className="text-2xl">Incidents</h1>

    {data.map((incident) => (
      <Link href={`incident/${incident.uuid}`} key={incident.uuid} >
        <div className="flex justify-between rounded-xl hover:bg-gray-200 p-5">
          <div className="">
              <h2>{incident.title}</h2>
              <p>Date {incident.date}</p>
              <p>Number of articles {incident.num_articles}</p>
              <p>Number missing {incident.num_missing}</p>
              <p>Number death {incident.num_death}</p>
          </div>
          <div>
            MAP
          </div>
        </div>
  </Link>
  
    ))}


      
    </>
  );
}
