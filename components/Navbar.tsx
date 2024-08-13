"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
];

function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}

const Navbar = () => {
  const activeSection = useActiveSection(['home', 'services', 'about', 'contact']);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 flex w-full h-16 bg-white items-center justify-between px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-50"
        >
          <Link href="/">
            <Image
              src="/logo/logo.svg"
              width={108}
              height={36}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
          <ul className="flex justify-center items-center gap-9 flex-grow text-lg relative">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <a href={item.href}>{item.name}</a>
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-1 bg-[#FBB040]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;