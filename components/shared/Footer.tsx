"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.png"
            alt="logo"
            width={134}
            height={38}
          />
        </Link>

        <p>© {currentYear} EventHub. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer