"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container>
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
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-12">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Tour</Footer.Link>
                <Footer.Link href="#">Servizi</Footer.Link>
                <Footer.Link href="#">Chi sono</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Seguimi" />
              <Footer.LinkGroup col>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <Footer.Icon
                    href="https://www.facebook.com/londonando.mario"
                    icon={BsFacebook}
                  />
                  <Footer.Icon
                    href="https://www.instagram.com/_londonando_"
                    icon={BsInstagram}
                  />
                  <Footer.Icon
                    href="https://www.tripadvisor.it/Attraction_Review-g186338-d24049094-Reviews-Londonando-London_England.html"
                    icon={FaTripadvisor}
                  />
                </div>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
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
