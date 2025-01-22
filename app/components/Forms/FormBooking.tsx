"use client";
import TextInput from "./components/TextInput";
import SelectInput from "./components/SelectInput";
import TextAreaInput from "./components/TextAreaInput";
import FormLayout from "./components/FormLayout";

import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Form() {
  return;
}

export default function FormBooking() {
  const [formShown, setFormShown] = useState(false);

  const { slug } = useParams();
  return (
    <>
      <button
        onClick={() => setFormShown(true)}
        className="w-full md:w-[50%] group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2 bg-accent my-8"
      >
        {" "}
        Richiedi informazioni
      </button>
      {formShown && (
        <FormLayout>
          {/* Date and number of kids */}
          {slug && <input type="text" hidden name="tour" value={slug} />}

          <div className="md:grid-cols-2 md:grid md:gap-6">
            {/* Number of adults */}
            <TextInput
              name="adults"
              type="number"
              min={1}
              max={20}
              label="Numero di partecipanti adulti (16+)"
              error="Inserire il numero di partecipanti adulti"
            />
            {/* Number of kids */}
            <TextInput
              name="kids"
              type="number"
              required={false}
              max={20}
              label="Numero di minori (0-15 anni)"
              error="Inserire il numero dei partecipanti sotto i 15 anni"
            />
          </div>
          {/* Date */}
          <div className="md:grid-cols-2 md:grid md:gap-6">
            <TextInput
              name="date"
              type="date"
              min={new Date().toLocaleDateString("fr-ca")}
              label="Data di arrivo"
              error="Inserire una data valida"
              defaultValue={new Date().toLocaleDateString("fr-ca")}
            />
            {/* First and last name */}
            <TextInput
              name="name"
              label="Nome e Cognome"
              error="Inserieci il tuo nome"
            />
          </div>

          {/* Phone and email */}
          <div className="md:grid-cols-2 md:grid md:gap-6">
            <TextInput
              name="email"
              label="Indrizzo email"
              error="Inserisci un indirizzo email valido"
              type="email"
            />
            <TextInput
              name="confirm-email"
              label="Conferma indirizzo email"
              error="Inserisci un indirizzo email valido"
              type="email"
            />
          </div>
          <TextInput
            name="number"
            label="Numero di telefono"
            error="Inserisci un numero di telefono valido"
            type="tel"
            pattern="^\+?[0-9]{10,14}$"
          />
          {/* Notes */}
          <TextAreaInput required label="Note" name="notes" error="Ricorda di inserire un messaggio" placeholder=""/>
        </FormLayout>
      )}
    </>
  );
}
