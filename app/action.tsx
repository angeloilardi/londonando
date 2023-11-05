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
    console.log(formData);
    const price = formData.get('price');
    const currentRoute = formData.get("current-route");
    console.log(price);
    console.log(currentRoute);
    redirect(`/booking?tour=${currentRoute}&num=${price}`)

}