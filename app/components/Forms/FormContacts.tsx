"use client";

import { useEffect, useState } from "react";
import FormOther from "./FormOther";
import FormAirport from "./FormAirport";
import TextInput from "./components/TextInput";
import SelectInput from "./components/SelectInput";
import TextAreaInput from "./components/TextAreaInput";
import { useSearchParams } from "next/navigation";

export default function FormContacts() {
  const [requestType, setRequestType] = useState<string>("");
  const searchParams = useSearchParams();

  const options = [
    {
      value: "hotel",
      label: "Transfer aeroporto/hotel",
    },
    {
      value: "other",
      label: "Transfer altre destinazioni",
    },
    {
      value: "generic",
      label: "Richiesta generica",
    },
  ];

  const request = searchParams.get("request");

  useEffect(() => {
    request && setRequestType(request);
  }, [request]);
  return (
    <div>
      <TextInput
        name="name"
        label="Nome e Cognome"
        error="Inserieci il tuo nome"
      />
      <TextInput
        name="email"
        label="Indrizzo email"
        error="Inserisci un indirizzo email valido"
        type="email"
      />
      <TextInput
        name="confirm-email"
        label="Conferma indirizzo email"
        error="Inserisci un indirizzo email valido"
        type="email"
      />
      <TextInput
        name="number"
        label="Numero di telefono"
        error="Inserisci un numero di telefono valido"
        type="tel"
        pattern="^\+?[0-9]{10,14}$"
      />
      <SelectInput
        name={"request-type"}
        label={"Tipo di richiesta"}
        value={requestType}
        options={options}
        onChange={(e) => setRequestType(e.target.value)}
      />
      {/* fields for airport transfers request */}
      {requestType === "hotel" && <FormAirport />}

      {/* fields for other destinations requests */}

      {requestType === "other" && <FormOther />}
      <TextAreaInput
        name="message"
        label="Scrivi qui il tuo messaggio"
        required
        error="Non dimenticare di inserire il tuo messaggio :)"
        minLength={1}
        placeholder=" "
      />
    </div>
  );
}
