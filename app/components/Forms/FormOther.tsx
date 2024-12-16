import { useState } from "react";

import SelectInput from "./components/SelectInput";
import TextInput from "./components/TextInput";

// import { Label, Select, TextInput } from "flowbite-react";

export default function ShadowInputs() {
  const [formChoice, setFormChoice] = useState("");
  return (
    <>
      <TextInput
        name="passengers"
        type="number"
        min={1}
        max={20}
        label="Numero passeggeri"
        error="Inserire il numero di passeggeri"
      />
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
        <TextInput
          name="hotel"
          label="Indirizzo hotel"
          error="Inserire l'indirizzo ddell'hotel di partenza"
        />
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
