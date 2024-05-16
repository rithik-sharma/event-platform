"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  };

  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={134}
            height={38}
          />
        </Link>

        <div className="flex justify-between items-center">
          <p>© {currentYear} EventHub. All Rights reserved.</p>
          {/* Move to Top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 ml-2 hover:text-gray-400 animate-bounce"
          >
            {/* SVG icon for move to top */}
            <img
              src="/assets/icons/up-arrow.png"
              alt="Feature Icon"
              className="w-8 h-8"
            />{" "}
            {/* Small icon */}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer