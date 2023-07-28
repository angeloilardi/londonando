
interface Tour {
  title: string,
  slug: string,
  content: {
    html: string
  }
  id: string
  
}


async function getTours() {
  const response = await fetch('https://api-eu-west-2.hygraph.com/v2/cljyrgzcu0poz01uk2vye20j2/master', {
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
                content {
                    html
                    }
                    id
                }                  
            }
        `,
    }),
  });
  const json = await response.json();

  return json.data.pages;

};

export default async function Tours() {
  const tours = await getTours();
console.log(tours);
  return (
    <main className="prose w-full py-10 px-5 mx-auto mt-5">
      <h1 className="text-3xl font-bold mt-6">SCOPRI TUTTI I TOUR</h1>
      {tours.map((tour: Tour) => {
        return (
            <div key={tour.id}>
            <h2 className="text-2xl font-bold">
              <a href={`/tours/${tour.slug}`}>{tour.title}</a>{" "}
            </h2>
            {/* <div>{tour.content.html}</div> */}
          </div>
        );
      })}
    </main>
  );
}
