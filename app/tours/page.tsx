
import Image from "next/image";

// import { renderImage } from "../action";

interface Tour {
  title: string;
  slug: string;
  id: string;
  subtitle: string;
  pictures: [
    {
      url: string;
      alt: string;
      id: string;
    }
  ];
}
import {Card} from 'flowbite-react'



// eslint-disable-next-line @next/next/no-async-client-component
export default async function Tours() {

  async function getTours() {
    const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query Tours {
            pages (orderBy: order_ASC) {
                slug
                title
                id
                subtitle
              order
                
    pictures(first: 1) {
      alt
      url 
      id
    }       
     }            
  }`,
      }),
    });
    const json = await response.json();

    return json.data.pages;
  }
  
  const tours = await getTours();
  return (
    <main className="prose w-full px-5 mx-auto bg-off-white dark:bg-gray-600">
      <h1 className="text-3xl font-bold mt-12 text-center text-primary dark:text-white">
        SCOPRI TUTTI I TOUR
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap my-16 gap-4 relative content-center">
        {tours.map((tour: Tour) => {
          return (
            <Card
              renderImage={() => (
                <Image
                  className="h-[50%]"
                  width={512}
                  height={500}
                  src={tour.pictures?.length ? tour.pictures[0].url : ""}
                  alt={tour.pictures?.length ? tour.pictures[0].alt : ""}
                />
              )}
              href={`/tours/${tour.slug}`}
              key={tour.id}
              className="max-w-lg mx-auto gap-3 mb-4"
              // imgSrc={tour.pictures?.length ? tour.pictures[0].url : ""}
              // imgAlt={tour.pictures?.length ? tour.pictures[0].alt : ""}
            >
              <div className="p-4">
                <h5 className="text-2xl font-bold tracking-tight text-primary dark:text-white">
                  {tour.title}{" "}
                </h5>
                <p className="font-normal text-primary-light dark:text-gray-100 mt-3">
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
