'use server'

import {Image  } from "next";

export async function renderImage() {
    return <Image
        className="h-[50%]"
        width={512}
        height={500}
        src={tour.pictures?.length ? tour.pictures[0].url : ""}
        alt={tour.pictures?.length ? tour.pictures[0].alt : ""}
    />
}