"use client";

import { Suspense } from "react";
import FormBooking from "../components/FormBooking";
import { useSearchParams } from "next/navigation";


export default function Booking() {
  const searchParams = useSearchParams();
  const tour = searchParams.get("tour") ?? null;
  const attendants = searchParams.get("num") ?? null;

  return (
    <div className="pt-24 flex flex-col items-center">
      <div className="flex flex-col gap-4 max-w-2xl text-dodger_blue-400 my-6 mx-4 justify-center">
        <h1 className="text-2xl">La tua richiesta:</h1>
          <h2 className="text-3xl font-bold">{tour}</h2>
          <p className="text-lg">{attendants}</p>
      </div>
      <FormBooking />
    </div>
  );
}
