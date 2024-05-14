import React from 'react';

const Technology = () => {
  return (
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <div className="flex items-center gap-2"> {/* Flex container to align icon and heading */}
         <img src="/assets/icons/feature-icon.svg" alt="Feature Icon" className="w-10 h-10" /> {/* Small icon */}
         <h2 className="h2-bold">Technologies Used</h2>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/next.svg" alt="Technology Icon 1" className="w-10 h-10" />
          <strong>Next.js</strong><p>React framework for building SSR applications.</p>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/react.svg" alt="Technology Icon 1" className="w-10 h-10" />
          <strong>React.js</strong><p>Is used to create dynamic User Interfaces (UI).</p>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/tailwind.svg" alt="Technology Icon 2" className="w-10 h-10" />
          <strong>Tailwind CSS</strong><p>use to design web pages directly in your markup.</p>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/shadcn.svg" alt="Technology Icon 1" className="w-10 h-10" />
          <strong>Shadcn</strong><p>React components that you can use to build web app.</p>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/clerk.svg" alt="Technology Icon 1" className="w-10 h-10" />
          <strong>Clerk</strong><p>Platform used for Authentication and user management.</p>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/Zod.svg" alt="Technology Icon 1" className="w-10 h-10" />
          <strong>Zod</strong><p>TypeScript library used to define schema for their data.</p>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/stripe.svg" alt="Technology Icon 1" className="w-10 h-10" />
          <strong>Stripe</strong><p>facilitate payments and pay out sellers globally.</p>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/node.svg" alt="Technology Icon 1" className="w-10 h-10" />
          <strong>Node.js</strong><p>Node. js is used to create server-side web applications</p>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/mongodb.svg" alt="Technology Icon 1" className="w-10 h-10" />
          <strong>MongoDB</strong><p>NoSQL database used for storing and managing data.</p>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
          <img src="/assets/icons/uploadthing.svg" alt="Technology Icon 1" className="w-10 h-10" />
          <strong>uploadthing</strong><p>Custom file upload solution for handling file uploads.</p>
        </div>
      
      </div>
    </section>
  );
};

export default Technology;
