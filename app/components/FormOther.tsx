"use client";

import {
  Button,
  Checkbox,
  Label,
  Select,
    TextInput,
  Textarea
} from "flowbite-react";
import Link from "next/link";

export default function ShadowInputs() {
  return (
    <form className="flex w-[70%] flex-col gap-4 justify-center mx-auto md:max-w-xl lg:max-w-xl p-3">
      <div className="md:grid-cols-2 md:grid md:gap-6">
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Telefono" />
        </div>
        <TextInput id="phone" required shadow type="tel" />
      </div>
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="passengers" value="Numero passeggeri" />
        </div>
        <TextInput
          id="passengers"
          required
          shadow
          type="number"
          min="1"
          max="20"
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-6">
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
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="start" value="Luogo di partenza" />
        </div>
        <Select id="start" required>
          <option>Aeroporto</option>
          <option>Hotel</option>
          <option>Stazione</option>
        </Select>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="airport" value="Aeroporto" />
          </div>
          <Select id="airport" required>
            <option>Gatwick</option>
            <option>Heathrow</option>
            <option>Stansted</option>
            <option>Luton</option>
            <option>London City</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="address" value="Indirizzo hotel" />
          </div>
          <TextInput id="address" required shadow type="text" />
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address" value="Nome stazione" />
        </div>
        <TextInput id="address" required shadow type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="destination" value="Luogo di destinazione" />
        </div>
        <TextInput id="destination" required shadow type="text" />
      </div>
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
  );
}
