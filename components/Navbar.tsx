'use client'

import React, { useEffect, useState, JSX } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from 'react-icons/fa'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const iconMap: Record<string, JSX.Element> = {
  Home: <FaHome />,
  About: <FaUser />,
  Skills: <FaCode />,
  Projects: <FaBriefcase />,
  Contact: <FaEnvelope />,
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className={`
          z-50 left-1/2 -translate-x-1/2
          w-fit px-8 py-3 rounded-full border shadow-lg
          fixed
          ${menuOpen ? '-translate-y-24 opacity-0' : ''}
          ${scrolled
            ? 'top-2 scale-95 bg-[#00202f]/90 border-[#3a86ff] backdrop-blur-md'
            : 'top-6 bg-[#00202f] border-[#3a86ff]'}
          transition-all duration-500 ease-in-out
          hidden md:flex items-center space-x-6
        `}
      >
        {!scrolled && (
          <span className="text-[#ffe6c7] font-semibold mr-6">
            Abhijeet Acharya
          </span>
        )}

        <ul className="flex space-x-8 text-[#ffe6c7]">
          {links.map(({ href, label }) => (
            <li key={href} className="relative group cursor-pointer">
              <a href={href} className="transition-colors duration-300">
                {label}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ffe6c7] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= MOBILE TOP BAR ================= */}
      <div
        className={`
          z-50 left-4 right-4 px-6 py-3 rounded-xl border shadow-lg
          fixed
          ${menuOpen ? '-translate-y-24 opacity-0' : ''}
          ${scrolled
            ? 'top-2 scale-95 bg-[#00202f]/90 border-[#3a86ff] backdrop-blur-md'
            : 'top-6 bg-[#00202f] border-[#3a86ff]'}
          transition-all duration-500 ease-in-out
          flex justify-between items-center md:hidden
        `}
      >
        <span className="text-[#ffe6c7] text-xl font-bold">
          Abhijeet Acharya
        </span>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-[#ffe6c7] text-2xl transition-transform duration-300 hover:rotate-90"
        >
          <FaBars />
        </button>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72
          bg-[#00202f]/90 backdrop-blur-lg
          text-[#ffe6c7] shadow-xl z-50
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl hover:rotate-90 transition-transform"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center mt-14 px-6">
          <div className="w-24 h-24 rounded-full border-4 border-[#3a86ff] bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] flex items-center justify-center overflow-hidden shadow-lg">
            <img 
              src="/avatar.jpg?v=2" 
              alt="Abhijeet Acharya" 
              className="w-full h-full object-cover object-top scale-110 mt-1"
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold">
            Abhijeet Acharya
          </h2>
          <p className="text-sm text-gray-400 mt-1">Full Stack AI Engineer</p>
        </div>

        <div className="my-8 h-px bg-white/10 mx-6" />

        <nav className="flex flex-col gap-6 px-8">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 text-lg text-[#ffe6c7]/90 hover:text-[#3a86ff] transition-all duration-200 hover:translate-x-1"
            >
              <span className="text-2xl text-[#ffe6c7]">
                {iconMap[label]}
              </span>
              {label}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}
    </>
  )
}
