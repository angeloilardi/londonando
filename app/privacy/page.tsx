import { RichText } from "@graphcms/rich-text-react-renderer";

export default async function PrivacyPolicy() {
  async function getprivacyPolicy() {
    const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
      // cache: 'no-store',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
       query Privacy {
  doc (where: {id: "cm0seyekmk05a07mis0oxnp4o"}) {
    content{
      json
    }
  }
}`,
      }),
    });
    const data = await res.json();
    return data.data.doc;
  }

  const PrivacyPolicy = await getprivacyPolicy();
    return (
      <div className="p-10 bg-background-light dark:bg-accent">
        <RichText
          content={PrivacyPolicy?.content?.json}
          renderers={{
            p: ({ children }) => (
              <p className="mb-5 text-accent dark:text-indigo-50">{children}</p>
            ),
            h1: ({ children }) => <h1 className="text-3xl">{children}</h1>,
            li: ({ children }) => (
              <li className="list-disc ext-accent dark:text-indigo-50">
                {children}
              </li>
            ),
            ul: ({ children }) => <ul className="py-3">{children}</ul>,
          }}
        />
      </div>
    );
}
