import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button'
import ContactSection from '@/components/ui/ContactSection';
import FeatureSection from '@/components/ui/FeatureSection';
import Technology from '@/components/ui/Technology';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      <section className=" bg-[url('/assets/icons/hero-pattern.svg')] py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
              <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
           
            
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
              <div className="flex items-center gap-2"> {/* Flex container to align icon and heading */}
              <img src="/assets/images/moon.png" alt="Feature Icon" className="w-10 h-10" /> {/* Small icon */}
              Explore Now
            </div>
                
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      
      <FeatureSection />

      <section id="events" className="bg-[url('/assets/icons/card-pattern.svg')] py-2 md:py-10 ">
        <div className='wrapper my-2 flex flex-col gap-8 md:gap-12'>

      
         <div className="flex items-center gap-2"> {/* Flex container to align icon and heading */}
           <img src="/assets/icons/feature-icon.svg" alt="Feature Icon" className="w-10 h-10" /> {/* Small icon */}
            <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>
         </div>
  
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
        </div>
      </section>

      <Technology />

      <ContactSection />
    </>
  )
}
