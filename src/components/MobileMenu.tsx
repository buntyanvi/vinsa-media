"use client"

import Link from "next/link"
import { useState } from "react"
import { useUser } from "@clerk/nextjs" // Clerk hook to get user data

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { user } = useUser()
  const username = user?.username

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const handleLinkClick = () => setIsOpen(false) // Close menu when a link is clicked

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          {/* Profile link that dynamically uses username */}
          {username && (
            <Link href={`/profile/${username}`} onClick={handleLinkClick}>
              <button className="cursor-pointer">Profile</button>
            </Link>
          )}
          <Link href="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/" onClick={handleLinkClick}>
            Friends
          </Link>
          <Link href="/" onClick={handleLinkClick}>
            Groups
          </Link>
          <Link href="/" onClick={handleLinkClick}>
            Stories
          </Link>
          <Link href="/login" onClick={handleLinkClick}>
            Login
          </Link>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
