"use client";
interface Tour {
  title: string;
  slug: string;
  id: string;
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
  const response = await fetch(
    "https://api-eu-west-2.hygraph.com/v2/cljyrgzcu0poz01uk2vye20j2/master",
    {
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
                }   
                pages {
    pictures(first: 1) {
      alt
      url
    }
  }         
            }
        `,
      }),
    }
  );
  const json = await response.json();

  return json.data.pages;
}

export default async function Tours() {
  const tours = await getTours();
  return (
    <main className="prose w-full py-10 px-5 mx-auto mt-5">
      <h1 className="text-3xl font-bold mt-6">SCOPRI TUTTI I TOUR</h1>
      {tours.map((tour: Tour) => {
        return (
          <Card
            key={tour.id}
            className="max-w-lg"
            // imgAlt={tour.pictures[0].alt}
            // imgSrc={tour.pictures[0].url}
          >
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href={`/tours/${tour.slug}`}>{tour.title}</a>{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </Card>
          //   <div key={tour.id}>
          //   <h2 className="text-2xl font-bold">
          //     <a href={`/tours/${tour.slug}`}>{tour.title}</a>{" "}
          //   </h2>
          // </div>
        );
      })}
    </main>
  );
}
