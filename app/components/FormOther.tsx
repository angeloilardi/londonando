import { useState } from "react";

import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import FormLayout from "./FormLayout";

export default function ShadowInputs() {
  const [formChoice, setFormChoice] = useState("");
  return (
    <FormLayout>
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
        <Select
          id="start"
          required
          onChange={(e) => setFormChoice(e.target.value)}
        >
          <option value=""></option>
          <option value="aeroporto">Aeroporto</option>
          <option value="hotel">Hotel</option>
          <option value="stazione">Stazione</option>
        </Select>
      </div>

      <div className={formChoice === "aeroporto" ? `block` : `hidden`}>
        <Label htmlFor="airport" value="Aeroporto" className=" block mb-2" />
        <Select id="airport" required>
          <option>Gatwick</option>
          <option>Heathrow</option>
          <option>Stansted</option>
          <option>Luton</option>
          <option>London City</option>
        </Select>
      </div>

      <div className={formChoice === "hotel" ? `block` : `hidden`}>
        <Label
          htmlFor="address"
          value="Indirizzo hotel"
          className="block mb-2"
        />

        <TextInput id="address" required shadow type="text" />
      </div>

      <div className={formChoice === "stazione" ? `mb-2 block` : `hidden`}>
        <Label htmlFor="address" value="Nome stazione" className="block mb-2" />

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
    </FormLayout>
  );
}
