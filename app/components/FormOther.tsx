import { useState } from "react";

import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import FormLayout from "./FormLayout";

export default function ShadowInputs() {
  const [formChoice, setFormChoice] = useState("");
  return (
      <><div>
      <div className="mb-2 block">
        <Label htmlFor="passengers" value="Numero passeggeri" />
      </div>
      <TextInput
        id="passengers"
        required
        shadow
        type="number"
        min="1"
        max="20" />
    </div><div className="md:grid md:grid-cols-2 md:gap-6">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="date" value="Data" />
          </div>
          <TextInput
            id="date"
            required
            shadow
            type="date"
            min={new Date().toLocaleDateString("fr-ca")} />
        </div>
      </div><div>
        <div className="mb-2 block">
          <Label htmlFor="start" value="Luogo di partenza" />
        </div>
        <Select
          id="start"
          required
          onChange={(e) => setFormChoice(e.target.value)}
          className="mb-2 block"
        >
          <option value=""></option>
          <option value="aeroporto">Aeroporto</option>
          <option value="hotel">Hotel</option>
          <option value="stazione">Stazione</option>
        </Select>
      </div><div className={formChoice === "aeroporto" ? `block` : `hidden`}>
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
          className="block mb-2" />

        <TextInput id="address" required shadow type="text" />
      </div><div className={formChoice === "stazione" ? `mb-2 block` : `hidden`}>
        <Label htmlFor="address" value="Nome stazione" className="block mb-2" />

        <TextInput id="address" required shadow type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="destination" value="Luogo di destinazione" />
        </div>
        <TextInput id="destination" required shadow type="text" />
      </div>
      </>
  );
}
