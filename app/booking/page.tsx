"use client";

import { Suspense } from "react";
import FormBooking from "../components/FormBooking";
import { useSearchParams } from "next/navigation";


function GetParams() {
   const searchParams = useSearchParams();
  const tour = searchParams.get("tour");
  const attendants = searchParams.get("num");
  return (
    <><h2 className="text-3xl font-bold">{tour}</h2>
      <p className="text-lg">{attendants}</p></>
  )
  
}

export default function Booking() {


  return (
    <div className="py-6 flex flex-col items-center bg-off-white">
      <div className="flex flex-col gap-4 max-w-2xl justify-center w-[90%]">
        <div className="text-info">
          <h1 className="text-2xl">La tua richiesta:</h1>
          <Suspense>
            <GetParams />
          </Suspense>
        </div>
      </div>

      <FormBooking />
    </div>
  );
}
