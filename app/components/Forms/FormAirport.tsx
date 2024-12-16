import SelectInput from "./components/SelectInput";
import TextInput from "./components/TextInput";
export default function FormAirport() {
  return (
    <>
      <TextInput
        name="passengers"
        type="number"
        min={1}
        max={20}
        label="Numero passeggeri"
        error="Inserire il numero di passeggeri (1-20)"
      />
      <TextInput
        name="date"
        type="date"
        min={new Date().toLocaleDateString("fr-ca")}
        label="Data di arrivo"
        error="Inserire la data di arrivo"
        defaultValue={new Date().toLocaleDateString("fr-ca")}
      />
      <TextInput
        name="time"
        type="time"
        step={900}
        label="Orario di arrivo"
        error="Inserire l'orario di arrivo"
        defaultValue={"12:00"}
      />
      <SelectInput
        name="airport"
        label="Aeroporto"
        options={["Gatwick", "Heathrow", "London City", "Stansted", "Luton"]}
      />
      <TextInput
        name="flight-number"
        label="Codice volo"
        error="Inserire il codice del volo"
        required={false}
      />
      <TextInput
        name="destination"
        label="Hotel/altra detinazione"
        error="Inserire l'indirizzo di destinazione"
      />
      <TextInput
        name="city"
        label="Città"
        error="Inserire la città di destinazione"
      />
      <TextInput
        name="postcode"
        label="Postcode"
        error="Inserire il postcode dell'indirizzo (almeno 5 caratteri)"
        minLength={5}
      />
    </>
  );
}
