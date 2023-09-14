'use client';

import {Navbar} from 'flowbite-react';

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
        <Navbar.Link active href="/tours" className="text-lg">
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
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}