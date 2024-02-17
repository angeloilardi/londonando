"use client";

import Form from "../../components/FormOther";

export default function Servizi() {
  return (
    <div className="py-6 flex flex-col items-center">
      <div className="flex flex-col gap-4 max-w-2xl text-dodger_blue-400 my-6 mx-4">
        <h1 className="text-3xl">TRANSFER PRIVATO ALTRE DESTINAZIONI</h1>
        <h2 className="text-lgleading-tight">
          Trasferimenti su mezzo privato per escursioni, passeggiate, visite
          fuori Londra con o senza guida/accompagnatore. L'autista vi
          accompagnerà e sarà a vostra completa disposizione per l'intera durata
          del soggiorno.
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
