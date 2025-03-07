import SelectInput from "./components/SelectInput";
import TextInput from "./components/TextInput";
export default function FormAirport() {

  const options = [
    {
      value: "Gatwick",
      label: "Gatwick",
    },
    {
      value: "Heathrow",
      label: "Heathrow",
    },
    {
      value: "London City",
      label: "London City",
    },
    {
      value: "Stansted",
      label: "Stansted",
    },
    {
      value: "Luton",
      label: "Luton",
    }
  ];
  return (
    <>
      <div className="md:grid-cols-3 md:grid md:gap-6">
        <TextInput
          name="date"
          type="date"
          min={new Date().toLocaleDateString("fr-ca")}
          label="Data di arrivo"
          error="Inserire una data valida"
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
        <TextInput
          name="passengers"
          type="number"
          min={1}
          max={20}
          label="Numero passeggeri"
          error="Inserire il numero di passeggeri (1-20)"
        />
      </div>
      <div className="md:grid-cols-2 md:grid md:gap-6">
        <SelectInput
          name="airport"
          label="Aeroporto"
          options={options}
        />
        <TextInput
          name="flight-number"
          label="Codice volo"
          error="Inserire il codice del volo"
          required={false}
        />
      </div>
      <TextInput
        name="destination"
        label="Hotel/altra destinazione"
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
