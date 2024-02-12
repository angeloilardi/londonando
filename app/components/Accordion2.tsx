// import { Accordion } from "flowbite-react";
// import Link from "next/link";
// import { BsArrowRightCircleFill } from "react-icons/bs";
// import { UrlObject } from "url";

// export default function AccordionContent(props: { url: string | UrlObject, title:string, content: string }) {
//     return (
//       <Accordion.Panel>
//         <Accordion.Title className="text-2xl md:text-4xl">
//           {props.title}
//         </Accordion.Title>
//         <Accordion.Content>
//                 {props.content }
//           <Link href={props.url}>
//             <button className="flex items-center gap-3 dark:border-white border-black border p-2 rounded mt-4">
//               Richiedi info
//               <BsArrowRightCircleFill />
//             </button>
//           </Link>
//         </Accordion.Content>
//       </Accordion.Panel>
//     );
// }

// export default function Component(Children: ReactElement<AccordionPanelProps, string | JSXElementConstructor<any>> | ReactElement<AccordionPanelProps, string | JSXElementConstructor<any>>[]) {
//   return (
//     <Accordion collapseAll className="bg-white">
//       {Children}
//     </Accordion>
//   );
// }
