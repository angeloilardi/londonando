"use client";

import Form from "../../components/FormOther";

export default function Servizi() {
  return (
    <div
      className="mt-24 flex flex-col items-center
    "
    >
      <div className="text-justify max-w-xl mx-4">
        <h1 className="mb-6 text-xl">TRANSFER PRIVATO ALTRE DESTINAZIONI</h1>
        <h2 className="mb-8 text-lg leading-tight">
          Trasferimenti su mezzo privato per escursioni, passeggiate, visite
          fuori Londra con o senza guida/ accompagnatore. L'autista vi
          accompagnerà e sarà a vostra completa disposizione per l'intera durata
          del soggiorno.
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
