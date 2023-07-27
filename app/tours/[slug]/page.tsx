import { RichText } from "@graphcms/rich-text-react-renderer";

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
  page(where: {slug: $slug}) {
    id
    content {
      json
    }
    
    title
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
    <div className="grid-cols-[minmax(200px,250px)_minmax(40ch,_1fr)] grid gap-4">
      <aside className="shadow-md bg-white px-1">
        <h1 className="text-2xl py-4 px-6 font-bold">Course nav</h1>
      </aside>
      <main className="prose w-full py-10 px-5 mx-auto">
        <h1 className="text-3xl font-bold mb-5">{tourData.title}</h1>

        {tourData.content && (
          <RichText
            content={tourData?.content?.json}
            renderers={{
              p: ({ children }) => (
                <p className="mb-5">{children}</p>
              ),
            }}
          />
        )}
      </main>
    </div>
  );
}
