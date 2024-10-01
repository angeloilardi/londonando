import { RichText } from "@graphcms/rich-text-react-renderer";

export default async function TermsAndConditions() {
  async function getprivacyPolicy() {
    const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
      method: "POST",
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
       query Privacy {
  doc (where: {id: "cm1qn7ef36lvd07l25iy7dmow"}) {
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
      <div className="p-8 md:p-16 bg-background-light dark:bg-accent">
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
