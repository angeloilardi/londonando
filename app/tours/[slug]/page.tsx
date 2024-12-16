import { type CustomFlowbiteTheme } from "flowbite-react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import FormBooking from "@/app/components/Forms/FormBooking";

// custom theme to fix scroll not working on Chrome
const customTheme: CustomFlowbiteTheme["carousel"] = {
  scrollContainer: {
    base: "flex h-full !overflow-x-scroll snap-mandatory overflow-x-scroll scroll-smooth rounded-lg !overflow-y-hidden",
  },
};

async function getTour(slug: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
    body: JSON.stringify({
      query: `
        query MyQuery($slug: String = "slug") {
  page(where: {slug: $slug}) {
    slug
    id
    title
    price
    content {
      json
    }
    pictures {
        id
      url 
      alt
    }
  }
}`,
      variables: {
        slug: slug,
      },
    }),
  });
  const data = await res.json();
  return data.data.page;
}

export default async function Tour({ params }: { params: { slug: string } }) {
  const tourData = await getTour(params.slug);
  return (
    <div className="prose w-full py-6 px-5 mx-auto bg-off-white dark:bg-gray-600">
      <Link href="/#tours">
        <p className="text-xs p-3">
          <BiArrowBack className="inline-block mr-2" />
          Torna indietro
        </p>
      </Link>
      <h1 className="text-3xl mb-5 text-center text-accent dark:text-white">
        {tourData.title}
      </h1>
      <div className="w-90 max-w-xl my-16 mobile-landscape:my-4 mx-auto aspect-[3/2] mobile-landscape:h-[200px] mobile-landscape:w-auto">
        <Carousel theme={customTheme}>
          {tourData.pictures.length !== 0 ? (
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
            )
          ) : (
            <Image
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
              width={300}
              height={300}
            />
          )}
        </Carousel>
      </div>

      <div className="max-w-3xl text-justify mx-auto">
        {tourData.content && (
          <RichText
            content={tourData?.content?.json}
            renderers={{
              p: ({ children }) => (
                <p className="mb-5 text-accent dark:text-indigo-50">
                  {children}
                </p>
              ),
            }}
          />
        )}
        <FormBooking />
      </div>
    </div>
  );
}
