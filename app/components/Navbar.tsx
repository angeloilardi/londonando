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
          console.log(usePathname())
           console.log(link.route);
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
        {/* <Navbar.Link
          active={usePathname() === "/tours" ? true : false}
          href="/tours"
          className="text-lg"
        >
          Tour
        </Navbar.Link>
        <Navbar.Link href="/servizi" className="text-lg">
          Servizi
        </Navbar.Link>
        <Navbar.Link href="/aboutme" className="text-lg">
          Chi sono
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          Contatti
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}