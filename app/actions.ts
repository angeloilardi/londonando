'use server'

import { redirect } from "next/navigation";

// import {Image  } from "next";

// export async function renderImage() {
//     return <Image
//         className="h-[50%]"
//         width={512}
//         height={500}
//         src={tour.pictures?.length ? tour.pictures[0].url : ""}
//         alt={tour.pictures?.length ? tour.pictures[0].alt : ""}
//     />
// }


export async function sendForm(formData: FormData) {
    const price = formData.get('price') as string;
    const currentRoute = formData.get("current-route");
    redirect(`/booking?tour=${currentRoute}&num=${encodeURI(price)}`)

}

export async function submitForm( formData: FormData) {

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

      if (!response.ok) {
        return {message: "An error has occured"}
      }

    } catch (e) {
        throw new Error('Failed to create task')
    }

}

export async function getTours() {
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
  });
  const json = await response.json();
  // console.log(json.data.pages);
  return json.data.pages;
  
}