import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { IEvent } from "@/database";
import { events } from "@/lib/constants"
import { cacheLife } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
async function page() {
  'use cache';
  cacheLife('minutes'); 


  const res = await fetch(`${BASE_URL}/api/events`);
  const { events } = await res.json();
  return (
    <section>
      <h1 className="text-center">The hub for every Dev <br/> Event You Can't Miss. </h1>
      <p className="text-center mt-5">Hackathons, Meetups, Conferences, Workshops, and more.</p>
      <ExploreBtn/>
      <div className="space-y-7 mt-20">
        <h3>Featured Events</h3>
        <ol className="events">
        {events && events.length > 0 && events.map((events: IEvent) => (
          <li key={events.title}>
            <EventCard {...events}/>
          </li>
        ))}
        </ol>
      </div>
    </section>
  )
}

export default page