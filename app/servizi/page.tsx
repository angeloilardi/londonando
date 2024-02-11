
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

interface Service {
  title: string;
  description: string;
  id: string;
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

export default async function Component() {
  const services = await getServices()
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1527007622069-3a0241e1cd8c?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover flex h-screen items-center justify-center">
      <Accordion
        collapseAll
        className="bg-white grow-0 max-w-[80%] md:w-[60%] dark:bg-gray-900"
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
