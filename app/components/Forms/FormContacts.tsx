"use client";

import { useState } from "react";
import FormOther from "./FormOther";
import FormAirport from "./FormAirport";
import TextInput from "./components/TextInput";
import SelectInput from "./components/SelectInput";
import TextAreaInput from "./components/TextAreaInput";

export default function FormContacts() {
  const [requestType, setRequestType] = useState<string>("generic");
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
        error="L'indirizzo email non combacia"
        type="email"
      />
      <TextInput
        name="number"
        label="Numero di telefono"
        error="Inserisci un numero di teleofno valido"
        type="tel"
        pattern="^\+?[0-9]{10,14}$"
      />
      <SelectInput
        name={"Tipo di richiesta"}
        label={"Tipo di richiesta"}
        options={[
          "Richiesta generica",
          "Transfer aeroport/hotel",
          "Transfer altre destinazioni",
        ]}
        onChange={(e) => setRequestType(e.target.value)}
      />
      {/* fields for airport transfers request */}
      {requestType === "Transfer aeroport/hotel" && <FormAirport />}

      {/* fields for other destinations requests */}

      {requestType === "Transfer altre destinazioni" && <FormOther />}
      <TextAreaInput
        name="message"
        label="Scrivi qui il tuo messaggio"
        error="Inserisci il tuo messaggio"
        required
      />
    </div>
  );
}
