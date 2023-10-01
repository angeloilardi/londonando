'use client';

import { Navbar } from 'flowbite-react';
import { NavbarLink } from 'flowbite-react/lib/esm/components/Navbar/NavbarLink';
import { usePathname } from 'next/navigation';
const navLinks = [
  {
    name: "Tour",
    route: "tours",
  },
  {
    name: "Servizi",
    route: "servizi",
  },
  {
    name: "Chi sono",
    route: "aboutme",
  },
  {
    name: "Contatti",
    route: "contacts",
  },
];

const customTheme = {
  active: {
    on: "text-french_blue underline dark:text-white md:bg-transparent md:text-cyan-700 ",
    off: "border-b border-gray-100  text-dodger_blue hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
  },
};

export default function NavbarWithCTAButton() {
  const currentRoute = usePathname();
  return (
    <Navbar
      fluid
      className="bg-alice_blue z-30 absolute top-0 left-0 w-full justify-end"
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          LONDONANDO
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-auto p-3">
        {navLinks.map((link) => {
          {
          }
          return (
            <Navbar.Link
              theme={customTheme}
              key={link.route}
              href={`/${link.route}`}
              className="text-lg"
              active={currentRoute === `/${link.route}` ? true : false}
            >
              {link.name}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}