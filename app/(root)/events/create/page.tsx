import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <div className="wrapper flex items-center justify-start ml-4"> {/* Flex container to align icon and heading */}
            <img src="/assets/icons/feature-icon.svg" alt="Feature Icon" className="w-10 h-10" /> {/* Small icon */}
            <h3 className=" h3-bold text-left ml-1">Create Event</h3>
        </div>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent