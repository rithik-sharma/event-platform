
"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mjvnzaar");

  if (state.succeeded) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mx-auto max-w-sm mt-6">
        <p className="text-center">Thanks for joining!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
        >
            <div className="flex items-center gap-2"> {/* Flex container to align icon and heading */}
         <img src="/assets/icons/submit-icon.svg" alt="Feature Icon" className="w-10 h-10" /> {/* Small icon */}
         <h6 className="h6-bold">Submit</h6>
        </div>
          
        </button>

      </div>
      <p className='mt-4'>Want to contribute <span className='text-red-600'>?</span> <a className='hover:text-blue-400'target='_blank' href="https://github.com/rithik-sharma">Github</a></p>

    </form>
  );
}

function ContactSection() {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper justify-center content-center ">
       <div className="flex items-center justify-center gap-2 mb-4"> {/* Flex container to align icon and heading */}
         <img src="/assets/icons/contact.svg" alt="Feature Icon" className="w-10 h-10" /> {/* Small icon */}
         <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
