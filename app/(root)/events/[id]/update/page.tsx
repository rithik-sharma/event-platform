import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.actions"
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <div className="wrapper flex items-center justify-start ml-4"> {/* Flex container to align icon and heading */}
            <img src="/assets/icons/feature-icon.svg" alt="Feature Icon" className="w-10 h-10" /> {/* Small icon */}
            <h3 className=" h3-bold text-left ml-1">Update Event</h3>
            {/* <h3 className="wrapper h3-bold text-center sm:text-left"></h3> */}
        </div>
      </section>

      <div className="wrapper my-8">
        <EventForm 
          type="Update" 
          event={event} 
          eventId={event._id} 
          userId={userId} 
        />
      </div>
    </>
  )
}

export default UpdateEvent