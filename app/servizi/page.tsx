
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

import Link from "next/link";
// import { BsArrowRightCircleFill } from "react-icons/bs";
// import { UrlObject } from "url";

interface Service {
  title: string;
  description: string;
  id: string;
}

// function ButtonInfo(props: { url: string | UrlObject; }) {
//     return (
//       <Link href={props.url}>
//         <button className="flex items-center gap-3 dark:border-white border-black border p-2 rounded mt-">
//           Richiedi info
//           <BsArrowRightCircleFill />
//         </button>
//       </Link>
//     );
// }

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
    title
    description
    id
  }
}`,
    }),
  });
  const data = await res.json();
  return data.data.services;
}

export default async function Services() {
  const services = await getServices()
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1527007622069-3a0241e1cd8c?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover items-center flex min-h-screen justify-center">
      <Accordion
        collapseAll
        flush
        className="bg-white grow-0 max-w-[80%] md:w-[60%] dark:bg-gray-900 mt-16 max-h-[80%]"
      >
        {services.map((service: Service) => {
          return (
            <AccordionPanel key={service.id}>
              <AccordionTitle>{service.title}</AccordionTitle>
              <AccordionContent>
                <p>{service.description}</p>
              </AccordionContent>
            </AccordionPanel>
          );
        })}
      </Accordion>
    </div>
  );
}
