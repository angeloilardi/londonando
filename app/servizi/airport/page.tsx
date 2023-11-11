"use client";

import Form from "../../components/FormAirport";

export default function Servizi() {
  return (
    <div
      className="mt-24 flex flex-col items-center
    "
    >
      <div className="text-justify max-w-2xl mx-4">
        <h1 className="mb-6 text-xl">TRANSFER PRIVATO AEROPORTO HOTEL</h1>
        <h2 className="mb-8 text-lg leading-tight">
          Trasferimenti dall'aeroporto all'hotel su mezzo privato in maniera
          comoda, veloce e sicura. Il servizio è disponibile da qualsiasi
          aeroporto (Stansted, Luton, Gatwick, Heathrow e London City) e a
          qualsiasi ora (h24).
        </h2>
        <h3 className="text-md mb-8">
          Si prega di compilare il modulo sottostante. Sarete ricontattati a
          breve per ogni chiarimento riguardo modalità, tariffe, e tutte le
          indicazioni necessarie.
        </h3>
      </div>
      <Form />
    </div>
  );
}
