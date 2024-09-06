import { Label, Select, TextInput } from "flowbite-react";


export default function ShadowInputs() {
  return (
    <>
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
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="date" value="Data di arrivo" />
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="arrival" value="Orario di arrivo" />
          </div>
          <TextInput
            id="arrival"
            required
            shadow
            type="time"
            name="time"
            step={900}
            color="info"
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="airport" value="Aeroporto" />
          </div>
          <Select id="airport" required name="airport" color="info">
            <option value="gatwick">Gatwick</option>
            <option value="heathrow">Heathrow</option>
            <option value="stansted">Stansted</option>
            <option value="luton">Luton</option>
            <option value="london-city">London City</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flight" value="Codice volo" />
          </div>
          <TextInput
            id="flight"
            required
            shadow
            type="text"
            name="flight-number"
            color="info"
          />
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="destination" value="Hotel/Destinazione" />
        </div>
        <TextInput
          id="destination"
          required
          shadow
          type="text"
          name="destination"
          color="info"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address" value="Indirizzo" />
        </div>
        <TextInput
          id="address"
          required
          shadow
          type="text"
          name="address"
          color="info"
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="city" value="Città" />
          </div>
          <TextInput
            id="city"
            required
            shadow
            type="text"
            name="city"
            color="info"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="postcode" value="Postcode" />
          </div>
          <TextInput id="postcode" required shadow type="text" color="info" />
        </div>
      </div>
    </>
  );
}
