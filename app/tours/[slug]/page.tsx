"use client";

import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Carousel } from "flowbite-react";

async function getTour(slug: string) {
  const res = await fetch(
    "https://api-eu-west-2.hygraph.com/v2/cljyrgzcu0poz01uk2vye20j2/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query MyQuery($slug: String = "slug") {
  pages {
    id
  }
  page(where: {slug: $slug}) {
    id
    title
    content {
      json
    }
    pictures {
        id
      url (
        transformation: {
        image: { resize: { width: 400, height: 300, fit: clip } }
      }

      )
      alt
    }
  }
}`,
        variables: {
          slug: slug,
        },
      }),
    }
  );
  const data = await res.json();
  return data.data.page;
}

export default async function Tour({ params }: { params: { slug: string } }) {
  const tourData = await getTour(params.slug);
  console.log(tourData);
  return (
    <main className="prose w-full py-10 px-5 mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-5 text-center mt-6">
        {tourData.title}
      </h1>

      <div className="w-90 max-w-xl my-16 mx-auto aspect-[3/2]">
        <Carousel>
          {tourData.pictures.length !== 0 &&
            tourData.pictures.map(
              (picture: { url: string; alt: string; id: string }) => {
                return (
                  <Image
                    key={picture.id}
                    src={picture.url}
                    alt={picture.alt}
                    width={500}
                    height={350}
                    className="mb-5"
                  />
                );
              }
            )}
        </Carousel>
      </div>

      <div className="max-w-3xl text-justify mx-auto">
        {tourData.content && (
          <RichText
            content={tourData?.content?.json}
            renderers={{
              p: ({ children }) => <p className="mb-5">{children}</p>,
            }}
          />
        )}
      </div>
    </main>
  );
}
