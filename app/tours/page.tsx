"use client";

interface Tour {
  title: string;
  slug: string;
  id: string;
  subtitle: string;
  pictures?: [
    {
      url: string;
      alt: string;
      id: string;
    }
  ];
}
import { Card } from "flowbite-react";

async function getTours() {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Tours {
            pages {
                slug
                title
                id
                subtitle
                }   
                pages {
    pictures(first: 1) {
      alt
      url (
        transformation: {
        image: { resize: { width: 400, height: 300, fit: clip } }
      }

      )
      id
    }
  }         
            }
        `,
    }),
  });
  const json = await response.json();

  return json.data.pages;
}

export default async function Tours() {
  const tours = await getTours();
  return (
    <main className="prose w-full py-10 px-5 mx-auto mt-5">
      <h1 className="text-3xl font-bold mt-6 text-center">
        SCOPRI TUTTI I TOUR
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap my-16">
        {tours.map((tour: Tour) => {
          return (
            <Card
              href={`/tours/${tour.slug}`}
              key={tour.id}
              className="max-w-lg mx-auto gap-3 mb-4"
              imgSrc={tour.pictures?.length ? tour.pictures[0].url : ""}
              imgAlt={tour.pictures?.length ? tour.pictures[0].alt : ""}
            >
              <div className="p-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {tour.title}{" "}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 mt-3">
                  {tour.subtitle}{" "}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
