'use client'
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import FormLayout from "./FormLayout";

import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Form() {
  return 
}


export default function FormBooking() {
  const [formShown, setFormShown] = useState(false);

  const {slug} = useParams()
  return (
    <>
      <Button
        onClick={() => setFormShown(true)}
        className="w-full md:w-[50%] group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2 bg-accent my-4"
      >
        {" "}
        Richiedi informazioni
      </Button>
      {formShown && (
        <FormLayout>
          {/* Date and number of kids */}
          {slug && <input type="text" hidden name="tour" value={slug} />}

          <div className="md:grid-cols-2 md:grid md:gap-6">
            {/* Number of adults */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="kids" value="Numero di partecipanti adulti (16+)" />
              </div>
              <TextInput
                id="kids"
                name="kids"
                required
                shadow
                type="number"
                min="1"
                max="20"
              />
            </div>
            {/* Number of kids */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="kids" value="Numero di minori (0-15 anni)" />
              </div>
              <TextInput
                id="kids"
                name="kids"
                required
                shadow
                type="number"
                min="1"
                max="20"
              />
            </div>
          </div>
          {/* Date */}
          <div className="mb-4 md:mb-0">
            <div className="mb-2 block">
              <Label htmlFor="date" value="Data" />
            </div>
            <TextInput
              id="date"
              name="date"
              required
              shadow
              type="date"
              min={new Date().toLocaleDateString("fr-ca")}
            />
          </div>
          {/* First and last name */}
          <div className="md:grid-cols-2 md:grid md:gap-6">
            <div className="mb-4 md:mb-0">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Nome" />
              </div>
              <TextInput id="name" required shadow type="text" name="name" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="surname" value="Cognome" />
              </div>
              <TextInput
                id="surname"
                required
                shadow
                type="text"
                name="surname"
              />
            </div>
          </div>

          {/* Phone and email */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Telefono" />
            </div>
            <TextInput id="phone" name="phone" required shadow type="tel" />
          </div>
          {/* Email and confirm email */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Indirizzo email" />
            </div>
            <TextInput id="email" name="email" required shadow type="email" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email-confirm" value="Conferma email" />
            </div>
            <TextInput
              id="email-confirm"
              name="email-confirm"
              required
              shadow
              type="email"
            />
          </div>
          {/* Notes */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="notes" value="Note" />
            </div>
            <Textarea id="notes" name="notes" required shadow rows={3} />
          </div>
        </FormLayout>
      )}
    </>
  );
}
