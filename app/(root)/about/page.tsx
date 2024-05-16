import React from 'react';


const AboutUsPage = () => {
  return (
    <>
    <section className=" bg-[url('/assets/icons/about-svg11.svg')] py-5 md:py-10">
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  <div className="md:flex items-center"> {/* Use flexbox for layout */}
    <div className="md:pr-12"> {/* Add margin to the right for space */}
      <h1 className="text-6xl font-bold mb-4">About Us</h1>
      <p className="text-xl">
        Event-Hub is a platform dedicated to bringing people together through events. Whether it's organizing conferences, workshops, or social gatherings, we provide the tools and resources to help you plan, promote, and manage successful events.
      </p>
    </div>
  </div>
  <div className="md:flex items-center justify-center"> {/* Use flexbox for layout */}
    <div className='flex justify-center'>
      <img src="/assets/images/about-hero.png" alt="Event-Hub" className="w-80 h-80" />
    </div>
  </div>
</div>
    </div>
    </section>


    <section className=" bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className='flex md:flex items-center justify-center'>
      <img src="/assets/images/about-mission.png" alt="Event-Hub" className="w-80 h-80" />
    </div>


  <div className="md:flex items-center"> {/* Use flexbox for layout */}
    <div className="md:pr-12"> {/* Add margin to the right for space */}
      <h1 className="text-6xl font-bold mb-4">Our Mission</h1>
      <p className="text-xl">
      "At Event Hub, our mission is to empower individuals and organizations to create unforgettable experiences through seamless event planning and execution. We strive to foster connections, spark innovation, and celebrate diversity by providing a comprehensive platform that simplifies the process of organizing and managing events of all scales and types."
      </p>
    </div>
  </div>

</div>
    </div>
    </section>

{/* Testimonials section */}
<section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/assets/images/man1.png" alt="Customer 1" className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">David Nguyen</h3>
              <p className="text-gray-700">"Event-Hub made planning my company's annual conference a breeze! The platform's intuitive interface and comprehensive features saved us time and stress. Our event was a huge success, thanks to Event-Hub!"</p>
            </div>
            {/* Testimonial card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/assets/images/woman.png" alt="Customer 2" className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Emma Parker</h3>
              <p className="text-gray-700">"I've tried many event management platforms, but Event-Hub stands out for its user-friendly design and excellent customer support. From promoting my workshops to managing registrations, Event-Hub exceeded my expectations."</p>
            </div>
            {/* Testimonial card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/assets/images/man2.png" alt="Customer 3" className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Hardik Bhasin</h3>
              <p className="text-gray-700">"As a busy event organizer, Event-Hub has become my go-to tool for seamless event planning. Its robust features, like ticketing and attendee management, streamline the entire process. Thanks to Event-Hub, my events are always a hit!"</p>
            </div>
          </div>
        </div>
      </section>


      <section className=" bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
   
  <div className="md:flex items-center"> {/* Use flexbox for layout */}
    <div className="md:pr-12"> {/* Add margin to the right for space */}
      <h1 className="text-6xl font-bold mb-4">About Developer</h1>
      <p className="text-xl">
      "Rithik Sharma, a fourth-year B.Tech IT student at GGSIPU in Delhi, possesses a robust skill set honed through a dedicated academic journey and practical experiences. Proficient in Data Structures and Algorithms (DSA), Web Development, Database Management Systems (DBMS), and SQL. Rithik has acquired comprehensive knowledge through coursework, projects, and internships.
      </p>
      <p className='text-xl'>
      This diverse exposure has not only fortified his understanding but also sharpened his ability to tackle real-world challenges effectively. With a passion for continuous learning and innovation, Rithik is poised to make significant contributions to the field of technology."
      </p>
      <div className="flex items-center justify-center gap-5 rounded-full p-3 mt-5 bg-white shadow-md hover:shadow-xl transition duration-300">
          <a
            href="https://www.instagram.com/shh_rithik_/"
            target="_blank"
            role="button"
            className="rounded-full transform hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </a>

          {/* Github  */}
          <a
            href="https://github.com/rithik-sharma"
            target="_blank"
            role="button"
            className="rounded-full transform hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </span>
          </a>

          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/rithik-sharma-/"
            target="_blank"
            role="button"
            className="rounded-full transform hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
          </a>

          {/* twitter */}
          <a
            href="https://twitter.com/RithikS725"
            target="_blank"
            role="button"
            className="rounded-full transform hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
          </a>

          <a
            href="https://leetcode.com/u/Rithik-Sharma/"
            target="_blank"
            role="button"
            className="rounded-full transform hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
            <img src="/assets/images/leetcode.png" alt="Feature Icon" className="w-9 h-9" />
            </span>
          </a>

          <a
            href="https://rithik-portfolio.vercel.app/"
            target="_blank"
            role="button"
            className="rounded-full transform hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
            <img src="/assets/images/portfolio.png" alt="Feature Icon" className="w-9 h-8.5" />
            </span>
          </a>
        </div>
    </div>

    
  </div>

  <div className='flex md:flex items-center justify-center'>
      <img src="/assets/images/rithik.jpg" alt="Event-Hub" className="w-80 h-80" />
    </div>

</div>
    </div>
    </section>

    
    </>
  );
};

export default AboutUsPage;