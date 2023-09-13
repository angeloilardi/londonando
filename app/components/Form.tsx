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
    <form className="flex max-w-md flex-col gap-4">
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
          min="10"
          max="100"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="date" value="Data di arrivo" />
        </div>
        <TextInput
          id="date"
          required
          shadow
          type="date"
          min={new Date().toLocaleDateString("fr-ca")}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="airport" value="Aeroporto" />
        </div>
        <Select id="airport" required>
          <option>Gatwick</option>
          <option>Heathrow</option>
          <option>Stansted</option>
          <option>Luton</option>
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flight" value="Codice volo" />
        </div>
        <TextInput id="flight" required shadow type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="arrival" value="Orario di arrivo" />
        </div>
        <TextInput id="arrival" required shadow type="time" step={900} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="destination" value="Hotel/Destinazione" />
        </div>
        <TextInput id="destination" required shadow type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address" value="Indirizzo" />
        </div>
        <TextInput id="address" required shadow type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="city" value="Città" />
        </div>
        <TextInput id="postcode" required shadow type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="postcode" value="Postcode" />
        </div>
        <TextInput id="city" required shadow type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Note" />
        </div>
        <Textarea id="notes" required shadow rows={3} />
      </div>

      <Button type="submit">Register new account</Button>
    </form>
  );
}
