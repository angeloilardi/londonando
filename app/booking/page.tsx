"use client";

import FormBooking from "../components/FormBooking";
import { useSearchParams } from "next/navigation";


export default function Booking() {
  const searchParams = useSearchParams();
  const tour = searchParams.get("tour");
  const attendants = searchParams.get("num");

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 items-center mb-8 pt-20">
        <h1 className="text-2xl">La tua richiesta:</h1>
        <h2 className="text-3xl font-bold">{tour}</h2>
        <p className="text-lg">{attendants}</p>
      </div>
      <FormBooking />
    </div>
  );
}
