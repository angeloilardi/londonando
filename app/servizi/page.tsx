"use client";

import Image from "next/image";
import Accordion from './../components/Accordion'

// import { Accordion } from "flowbite-react";

export default function Servizi() {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1527007622069-3a0241e1cd8c?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover flex h-screen items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-12 w-[85%]">
        <Accordion />
        
      </div>
    </div>
  );
}

{
  /* <AccordionContent
            url="/servizi/airport"
            title="TRANSFER PRIVATO AEROPORTO HOTEL"
            content="Trasferimenti dall'aeroporto all'hotel su mezzo privato in maniera
              comoda, veloce e sicura. Il servizio è disponibile da qualsiasi
              aeroporto (Stansted, Luton, Gatwick, Heathrow e London City) e a
              qualsiasi ora (h24)."
          />
          <AccordionContent
            url="/servizi/escursioni"
            title="TRANSFER PRIVATO ALTRE DESTINAZIONI"
            content="Trasferimenti su mezzo privato per escursioni, passeggiate, visite fuori Londra con o senza guida/accompagnatore. L'autista vi accompagnerà e sarà a vostra completa disposizione per l'intera durata del soggiorno."
          /> */
}
