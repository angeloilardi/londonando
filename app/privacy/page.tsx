// import { RichText } from "@graphcms/rich-text-react-renderer";

// export default async function PrivacyPolicy() {
//   async function getprivacyPolicy() {
//     const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
//       // cache: 'no-store',
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query: `
//         query Privacy {
//   docs {
//     content{html}
//   }
// }`,
//       }),
//     });
//     const data = await res.json();
//     console.log(data.data.docs.content);
//     return data;
//   }

//   const PrivacyPolicy = await getprivacyPolicy();
//     return (
//       <div>
//         <RichText
//           content={PrivacyPolicy?.content}
//           renderers={{
//             p: ({ children }) => (
//               <p className="mb-5 text-accent/60 dark:text-indigo-50">
//                 {children}
//               </p>
//             ),
//           }}
//         />
//       </div>
//     );
// }
