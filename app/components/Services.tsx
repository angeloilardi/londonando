import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

import { RichText } from "@graphcms/rich-text-react-renderer";

import { RichTextContent } from "@graphcms/rich-text-types";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { UrlObject } from "url";
import Link from "next/link";

interface Service {
  title: string;
  description: {
    json: RichTextContent;
  };
  id: string;
}

function ButtonInfo(props: { url: string | UrlObject }) {
  return (
    <Link href={props.url}>
      <button className="flex items-center gap-3 dark:border-white border-black border p-2 rounded mt-2 ml-auto uppercase">
        Richiedi info
        <BsArrowRightCircleFill />
      </button>
    </Link>
  );
}

async function getServices() {
  const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query servicesList {
  services {
    description {
      json
    }
    title
    id
  }
}`,
    }),
  });
  const data = await res.json();
  return data.data.services;
}

export default async function Services() {
  const services = await getServices();
  return (
    <div
      id="servizi"
      className="bg-[url(https://images.unsplash.com/photo-1530458738063-22ed42fa27c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center justify-start py-1 overflow-auto flex flex-col items-center flex-[1_0_100%] min-h-[900px] md:min-h-screen mobile-landscape:min-h-[700px]"
    >
      <h3 className="text-center text-3xl text-white py-4">SERVIZI</h3>
      <Accordion
        collapseAll
        className="bg-primary max-w-[80%] my-6 md:w-[60%] hover:text-primary dark:bg-gray-900 opacity-90 mx-auto"
      >
        {services.map((service: Service) => {
          return (
            <AccordionPanel key={service.id} className="text-white">
              <AccordionTitle
                theme={{
                  open: {
                    off: "text-accent hover:text-accent-light dark:hover:text-white",
                    on: "hover:text-accent-light text-accent dark:hover:text-white dark:text-white",
                  },
                }}
              >
                {service.title}
              </AccordionTitle>
              <AccordionContent className="text-accent dark:text-primary">
                <RichText
                  content={service.description?.json}
                  renderers={{
                    ul: ({ children }) => (
                      <ul className="list-disc">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="my-2 ml-2">{children}</li>
                    ),
                  }}
                />
                {service.title.includes("AEROPORTO") ? (
                  <ButtonInfo url={"?request=hotel&#contacts"} />
                ) : service.title.includes("ALTRE") ? (
                  <ButtonInfo url={"?request=other&#contacts"} />
                ) : (
                  ""
                )}
              </AccordionContent>
            </AccordionPanel>
          );
        })}
      </Accordion>
    </div>
  );
}
