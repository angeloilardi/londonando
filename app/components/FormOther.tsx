import { useState } from "react";

import { Label, Select, TextInput } from "flowbite-react";

export default function ShadowInputs() {
  const [formChoice, setFormChoice] = useState("");
  return (
    <>
      {/* Passeggengers */}
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="passengers" value="Numero passeggeri" />
          </div>
          <TextInput
            id="passengers"
            name="passengers"
            required
            shadow
            type="number"
            min="1"
            max="20"
            color="info"
          />
        </div>

        <div>
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
            color="info"
          />
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="start" value="Luogo di partenza" />
        </div>
        <Select
          id="start"
          name="choice"
          required
          onChange={(e) => setFormChoice(e.target.value)}
          className="mb-2 block"
          color="info"
        >
          <option value=""></option>
          <option value="aeroporto">Aeroporto</option>
          <option value="hotel">Hotel</option>
          <option value="stazione">Stazione</option>
        </Select>
      </div>
      <div className={formChoice === "aeroporto" ? `block` : `hidden`}>
        <Label htmlFor="airport" value="Aeroporto" className=" block mb-2" />
        <Select id="airport" required name="airport" color="info">
          <option value="gatwick">Gatwick</option>
          <option value="heathrow">Heathrow</option>
          <option value="stansted">Stansted</option>
          <option value="luton">Luton</option>
          <option value="london-city">London City</option>
        </Select>
      </div>
      {formChoice === "hotel" && (
        <>
          <Label
            htmlFor="address"
            value="Indirizzo hotel"
            className="block mb-2"
          />
          <TextInput
            id="address"
            required
            shadow
            type="text"
            name="address"
            color="info"
          />
        </>
      )}

      {formChoice === "stazione" && (
        <>
          <Label
            htmlFor="address"
            value="Nome stazione"
            className="block mb-2"
          />

          <TextInput
            id="address"
            required
            shadow
            type="text"
            name="address"
            color="info"
          />
        </>
      )}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="destination" value="Luogo di destinazione" />
        </div>
        <TextInput
          id="destination"
          required
          shadow
          type="text"
          name="place"
          color="info"
        />
      </div>
    </>
  );
}
