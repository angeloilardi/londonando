"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export default function Servizi() {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1527007622069-3a0241e1cd8c?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover">
      {/* <Image src="https://images.unsplash.com/photo-1527007622069-3a0241e1cd8c?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} height={500} alt=""></Image> */}
      <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-8">
        <Card className="max-w-[40%]" href="/servizi/airport">
          <h1 className="mb-6 text-xl">TRANSFER PRIVATO AEROPORTO HOTEL</h1>
        </Card>
        <Card className="max-w-[40%]" href="/servizi/escursioni">
          <h1 className="mb-6 text-xl">TRANSFER PRIVATO ALTRE DESTINAZIONI</h1>
        </Card>
      </div>
    </div>
  );
}
