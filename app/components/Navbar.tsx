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

export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      className="bg-white z-30 absolute top-0 left-0 w-full justify-end"
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
        {navLinks.map(link => { {
        }
          return (
            <Navbar.Link
              key={link.route}
              href={`/${link.route}`}
              className="text-lg"
              active={
                usePathname() === `/${link.route}`
                  ? true
                  : false
              }
            >
              {link.name}
            </Navbar.Link>
          );
            })
          }
      </Navbar.Collapse>
    </Navbar>
  );
}