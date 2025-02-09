import Image from "next/image";

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
import { Card } from "flowbite-react";


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
next: { revalidate: 60 }
    });
    const json = await response.json();

    return json.data.pages;
  }

  const tours = await getTours();
  return (
    <div
      className="w-full p-5 mx-auto bg-primary-light dark:bg-gray-600 min-h-max flex flex-col justify-center gap-6"
      id="tour"
    >
      <h2 className="text-3xl md:py-16 text-center text-accent dark:text-white mobile-landscape:mt-2">
        SCOPRI TUTTI I TOUR
      </h2>
      <div className="flex gap-4 relative overflow-scroll snap-x snap-mandatory">
        {tours.map((tour: Tour) => {
          return (
            <Card
              renderImage={() => (
                <Image
                  className="aspect-[4/3] w-full object-cover"
                  width={512}
                  height={500}
                  src={tour.pictures?.length ? tour.pictures[0].url : ""}
                  alt={tour.pictures?.length ? tour.pictures[0].alt : ""}
                />
              )}
              href={`/tours/${tour.slug}`}
              key={tour.id}
              className="min-w-[85%] mx-auto gap-3 mb-4 snap-center md:min-w-[400px] mobile-landscape:min-w-[250px] min-h-fit"
              theme={{
                root: {
                  children: " p-6 mobile-landscape:p-2",
                },
              }}
            >
              <h3 className="text-2xl tracking-tight text-accent dark:text-white mobile-landscape:text-sm overflow-hidden">
                {tour.title}{" "}
              </h3>
              <p className="font-normal text-accent-light dark:text-gray-100 mt-3 mobile-landscape:hidden">
                {tour.subtitle}{" "}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
