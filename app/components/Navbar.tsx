"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
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
    name: "Recensioni",
    route: "recensioni",
  },
  {
    name: "Contatti",
    route: "contacts",
  },
];

const customTheme = {
  active: {
    on: "text-accent underline dark:text-white md:bg-transparent md:text-cyan-700",
    off: "text-accent hover:bg-accent dark:border-gray-700 dark:text-gray-400 hover:text-accent-light dark:hover:bg-gray-700 dark:hover:text-white  md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white",
  },
};

export default function NavbarWithCTAButton() {
  const currentRoute = usePathname();
  return (
    <Navbar
      fluid
      className="bg-primary z-30 top-0 left-0 w-full justify-end sticky"
    >
      <NavbarBrand href="/">
        <Logo className="dark:fill-white fill-accent" />
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavbarToggle className="text-accent-light dark:text-primary" />
      </div>
      <NavbarCollapse className="ml-auto p-3 z-30 text-accent-light">
        {navLinks.map((link) => {
          {
          }
          return (
            <NavbarLink
              theme={customTheme}
              key={link.route}
              href={`/#${link.route}`}
              className="rounded-lg"
              active={currentRoute.includes(`/${link.route}`) ? true : false}
            >
              {link.name.toUpperCase()}
            </NavbarLink>
          );
        })}
      </NavbarCollapse>
    </Navbar>
  );
}
