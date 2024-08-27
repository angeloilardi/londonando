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
      <button className="flex items-center gap-3 dark:border-white border-black border p-1 rounded mt-2 ml-auto">
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
    <div className="bg-[url(https://images.unsplash.com/photo-1530458738063-22ed42fa27c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center items-center flex min-h-max justify-center sm:min-h-full">
      <Accordion
        collapseAll
        
        className="bg-primary grow-0 max-w-[80%] my-6 md:w-[60%] hover:text-primary dark:bg-gray-900 opacity-90"
      >
        {services.map((service: Service) => {
          return (
            <AccordionPanel key={service.id} className="text-white">
              <AccordionTitle
                theme={{
                  open: {
                    off: "text-white hover:text-primary dark:hover:text-white",
                    on: "hover:text-primary text-white dark:hover:text-white dark:text-white",
                  },
                }}
              >
                {service.title}
              </AccordionTitle>
              <AccordionContent className="text-white">
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
                  <ButtonInfo url={"/servizi/airport"} />
                ) : service.title.includes("ALTRE") ? (
                  <ButtonInfo url={"/servizi/escursioni"} />
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
