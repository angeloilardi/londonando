"use client";

import { useState } from "react";

import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ShadowInputs() {
    const searchParams = useSearchParams();
    const tour = searchParams.get("tour");
    const attendants = searchParams.get("num");
    return (
      <>
        <div className="mt-24">
            <div className="flex flex-col gap-3 items-center mb-8">
              <h1>La tua richiesta:</h1>
              <p>{tour}</p>
              <p>{attendants}</p>
            </div>
            <form className="flex w-[70%] flex-col gap-4 justify-center mx-auto md:max-w-xl lg:max-w-xl p-3">
              <div className="md:grid-cols-2 md:grid md:gap-6">
                {/* Date */}
               
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="date" value="Data" />
                    </div>
                    <TextInput
                      id="date"
                      required
                      shadow
                      type="date"
                      min={new Date().toLocaleDateString("fr-ca")}
                    />
             
                </div>
                {/* Number of kids */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="kids" value="Numero di minori (0-15 anni)" />
                  </div>
                  <TextInput
                    id="kids"
                    required
                    shadow
                    type="number"
                    min="1"
                    max="20"
                  />
                </div>
                {/* First and last name */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Nome" />
                  </div>
                  <TextInput id="name" required shadow type="text" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="surname" value="Cognome" />
                  </div>
                  <TextInput id="surname" required shadow type="text" />
                </div>
              </div>
              {/* Phone and email */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Telefono" />
                </div>
                <TextInput id="phone" required shadow type="tel" />
              </div>
              {/* Email and confirm email */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Indirizzo email" />
                </div>
                <TextInput id="email" required shadow type="email" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email-confirm" value="Conferma email" />
                </div>
                <TextInput id="email-confirm" required shadow type="email" />
              </div>
              {/* Notes */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Note" />
                </div>
                <Textarea id="notes" required shadow rows={3} />
              </div>
              <Button type="submit" className="bg-cobalt_blue my-4">
                Invia richiesta
              </Button>
            </form>
        </div>
      </>
    );
}
