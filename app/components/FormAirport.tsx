import { Label, Select, TextInput, Textarea } from "flowbite-react";

import FormLayout from "./FormLayout";

export default function ShadowInputs() {
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
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="date" value="Data di arrivo" />
          </div>
          <TextInput
            id="date"
            required
            shadow
            type="date"
            min={new Date().toLocaleDateString("fr-ca")} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="arrival" value="Orario di arrivo" />
          </div>
          <TextInput id="arrival" required shadow type="time" step={900} />
        </div>
      </div><div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="airport" value="Aeroporto" />
          </div>
          <Select id="airport" required>
            <option>Gatwick</option>
            <option>Heathrow</option>
            <option>Stansted</option>
            <option>Luton</option>
            <option>London City</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flight" value="Codice volo" />
          </div>
          <TextInput id="flight" required shadow type="text" />
        </div>
      </div><div>
        <div className="mb-2 block">
          <Label htmlFor="destination" value="Hotel/Destinazione" />
        </div>
        <TextInput id="destination" required shadow type="text" />
      </div><div>
        <div className="mb-2 block">
          <Label htmlFor="address" value="Indirizzo" />
        </div>
        <TextInput id="address" required shadow type="text" />
      </div><div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="city" value="Città" />
          </div>
          <TextInput id="postcode" required shadow type="text" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="postcode" value="Postcode" />
          </div>
          <TextInput id="city" required shadow type="text" />
        </div>
      </div></>
  );
}
