"use client";
import { Label, TextInput, Textarea, Select } from "flowbite-react";
import { useState } from "react";
import FormOther from "./FormOther";
import FormAirport from "./FormAirport";

export default function FormContacts() {
  const [requestType, setRequestType] = useState<string>("generic");
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Nome e Cognome" />
        </div>
        <TextInput id="name" required shadow type="text" name="name" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Indirizzo email" />
        </div>
        <TextInput id="email" required shadow type="email" name="email" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email-confirm" value="Conferma email" />
        </div>
        <TextInput
          id="email-confirm"
          required
          shadow
          type="email"
          name="email-confirm"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Telefono" />
        </div>
        <TextInput id="phone" required shadow type="tel" name="phone" />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="airport" value="Tipo di richiesta" />
        </div>
        <Select
          required
          onChange={(e) => setRequestType(e.target.value)}
          value={requestType}
        >
          <option value="generic">Richiesta generica</option>
          <option value="airport">Transfer aeroport/hotel</option>
          <option value="other">Transfer altre destinazioni</option>
        </Select>
      </div>

      {/* fileds for airport transfers request */}
      {requestType === "airport" && <FormAirport />}

      {/* fields for other destinations requests */}

      {requestType === "other" && <FormOther />}

      <div>
        <div className="mb-2 block">
          <Label htmlFor="message" value="Messaggio" />
        </div>
        <Textarea id="message" required shadow rows={4} name="message" />
      </div>
    </>
  );
}
