"use client";

import Form from "../../components/FormAirport";

export default function Servizi() {
  return (
    <div className="pt-24 flex flex-col items-center">
      <div className="flex flex-col gap-4 max-w-2xl text-dodger_blue-400 my-6 mx-4">
        <h1 className="text-3xl text-center">TRANSFER PRIVATO AEROPORTO HOTEL</h1>
        <h2 className="text-lgleading-tight">
          Trasferimenti dall'aeroporto all'hotel su mezzo privato in maniera
          comoda, veloce e sicura. Il servizio è disponibile da qualsiasi
          aeroporto (Stansted, Luton, Gatwick, Heathrow e London City) e a
          qualsiasi ora (h24).
        </h2>
        <h3 className="text-md">
          Si prega di compilare il modulo sottostante. Sarete ricontattati a
          breve per ogni chiarimento riguardo modalità, tariffe, e tutte le
          indicazioni necessarie.
        </h3>
      </div>
      <Form />
    </div>
  );
}
