import { useState } from "react";

import SelectInput from "./components/SelectInput";
import TextInput from "./components/TextInput";

// import { Label, Select, TextInput } from "flowbite-react";

export default function ShadowInputs() {
  const [formChoice, setFormChoice] = useState("Aeroporto");
  return (
    <>
      <div className="md:grid-cols-2 md:grid md:gap-6">
        <TextInput
          name="date"
          type="date"
          min={new Date().toLocaleDateString("fr-ca")}
          label="Data"
          error="Inserire una data valida"
          defaultValue={new Date().toLocaleDateString("fr-ca")}
        />
        <TextInput
          name="passengers"
          type="number"
          min={1}
          max={20}
          label="Numero passeggeri"
          error="Inserire il numero di passeggeri"
        />
      </div>
      <SelectInput
        name="Luogo di partenza"
        label="Luogo di partenza"
        options={["Aeroporto", "Hotel", "Stazione"]}
        onChange={(e) => setFormChoice(e.target.value)}
      />
      {formChoice === "Aeroporto" && (
        <SelectInput
          name="airport"
          label="Aeroporto"
          options={["Gatwick", "Heathrow", "London City", "Stansted", "Luton"]}
        />
      )}
      {formChoice === "Hotel" && (
        <>
          <TextInput
            name="hotel-name"
            label="Nome dell'hotel"
            error="Inserire il nome dell'hotel"
          />
          <TextInput
            name="hotel-address"
            label="Indirizzo dell'hotel"
            error="Inserire l'indirizzo dell'hotel di partenza"
          />
        </>
      )}

      {formChoice === "Stazione" && (
        <TextInput
          name="station"
          label="Nome della stazione"
          error="Inserire il nome della stazione di partenza"
        />
      )}
      <TextInput
        name="destination"
        label="Luogo di destinazione"
        error="Inserire l'indirizzo di destinazione"
      />
    </>
  );
}
