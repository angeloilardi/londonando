import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { MdOutlineMail} from "react-icons/md"
import { Logo } from "./Logo";

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className="mt-auto">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="py-4 mb-6 text-gray-500">
            <Logo className="fill-gray-500 dark:fill-white" />
            <ul className="text-sm flex flex-col gap-2 dark:text-white">
              <li className="flex gap-3 items-center">
                <BsTelephone size="20px" className="fill-gray-500" />
                <a href="tel:+447437479642">+44 7437 479642</a>
              </li>
              <li className="flex gap-3 items-center">
                <MdOutlineMail size={"20px"} className="fill-gray-500" />
                <a href="mailto:info@londonando.com">info@londonando.com</a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-6 sm:mt-4 sm:gap-10 sm:ml-6">
            <div>
              <Footer.Title title="about" className="!mb-2" />
              <Footer.LinkGroup col className="!space-y-1">
                <Footer.Link href="/#tour">Tour</Footer.Link>
                <Footer.Link href="/#servizi">Servizi</Footer.Link>
                <Footer.Link href="/#chi-sono">Chi sono</Footer.Link>
                <Footer.Link href="/#recensioni">Recensioni</Footer.Link>
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
                <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
                <Footer.Link href="/terms-and-conditions">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
