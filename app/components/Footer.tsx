"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className="mt-auto">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Logo"
              href="https://flowbite.com"
              name="Londonando"
              src="#"
            />
          </div>
          <div className="grid grid-cols-3 gap-6 sm:mt-4 sm:gap-10">
            <div>
              <Footer.Title title="about" className="!mb-2" />
              <Footer.LinkGroup col className="!space-y-1">
                <Footer.Link href="/tours">Tour</Footer.Link>
                <Footer.Link href="/servizi">Servizi</Footer.Link>
                <Footer.Link href="/aboutme">Chi sono</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Social" className="!mb-2" />
              <Footer.LinkGroup col className="!space-y-1">
                <div className="mt-2 flex space-x-4">
                  <Footer.Icon
                    href="https://www.facebook.com/londonando.mario"
                    icon={BsFacebook}
                    target="_blank"
                  />
                  <Footer.Icon
                    href="https://www.instagram.com/_londonando_"
                    icon={BsInstagram}
                    target="_blank"
                  />
                  <Footer.Icon
                    href="https://www.tripadvisor.it/Attraction_Review-g186338-d24049094-Reviews-Londonando-London_England.html"
                    icon={FaTripadvisor}
                    target="_blank"
                  />
                </div>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="!mb-2" />
              <Footer.LinkGroup col className="!space-y-1">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
