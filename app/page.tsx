import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { events } from "@/lib/constants"

function page() {

  return (
    <section>
      <h1 className="text-center">The hub for every Dev <br/> Event You Can't Miss. </h1>
      <p className="text-center mt-5">Hackathons, Meetups, Conferences, Workshops, and more.</p>
      <ExploreBtn/>
      <div className="space-y-7 mt-20">
        <h3>Featured Events</h3>
        <ol className="events">
        {events.map((events) => (
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