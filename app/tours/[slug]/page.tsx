import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
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
      url
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
      <h1 className="text-3xl font-bold mb-5 text-center mt-6">{tourData.title}</h1>

      {tourData.pictures.length !== 0 && (
        <Image
          src={tourData.pictures[0].url}
          alt="mm"
          width={400}
          height={300}
          className="mb-5"
        />
      )}

      {tourData.content && (
        <RichText
          content={tourData?.content?.json}
          renderers={{
            p: ({ children }) => <p className="mb-5">{children}</p>,
          }}
        />
      )}
    </main>
  );
}
