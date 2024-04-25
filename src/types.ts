// In this file, we define the types that we will use in our application.

// Shared attributes between articles and incidents
type Base = {
    title: string;
    date: string;
    region_of_incident: string;
    country_of_incident: string;
    region_of_origin: string;
    country_of_origin: string;
    keywords: string[];
};


type Article = Base & {
    article_id: number;
    summary: string;
    content: string;
    website: string;
    relevant: boolean;
};


type Incident = Base & {
    incident_id: number;
    verified: boolean;
    summary: string;
    number_dead: number;
    number_missing: number;
    number_survivors: number;
    location_of_incident: string;
};