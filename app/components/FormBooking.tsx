import { Label, TextInput, Textarea } from "flowbite-react";
import FormLayout from "./FormLayout";
import { useSearchParams } from "next/navigation";


export default function FormBooking() {
  const searchParams = useSearchParams();
  const tour = searchParams.get("tour")
  return (
    <>
      <FormLayout>
        {/* Date and number of kids */}
        <input type="text" value={tour ? tour : undefined} name="tour" hidden/>
        <div className="md:grid-cols-2 md:grid md:gap-6">
          {/* Date */}
          <div className="mb-4 md:mb-0">
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
            />
          </div>
          {/* Number of kids */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="kids" value="Numero di minori (0-15 anni)" />
            </div>
            <TextInput
              id="kids"
              name="kids"
              required
              shadow
              type="number"
              min="1"
              max="20"
            />
          </div>
        </div>
        {/* First and last name */}
        <div className="md:grid-cols-2 md:grid md:gap-6">
          <div className="mb-4 md:mb-0">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Nome" />
            </div>
            <TextInput id="name" required shadow type="text" name="name" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="surname" value="Cognome" />
            </div>
            <TextInput
              id="surname"
              required
              shadow
              type="text"
              name="surname"
            />
          </div>
        </div>

        {/* Phone and email */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Telefono" />
          </div>
          <TextInput id="phone" name="phone" required shadow type="tel" />
        </div>
        {/* Email and confirm email */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Indirizzo email" />
          </div>
          <TextInput id="email" name="email" required shadow type="email" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email-confirm" value="Conferma email" />
          </div>
          <TextInput
            id="email-confirm"
            name="email-confirm"
            required
            shadow
            type="email"
          />
        </div>
        {/* Notes */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Note" />
          </div>
          <Textarea id="notes" name="notes" required shadow rows={3} />
        </div>
      </FormLayout>
    </>
  );
}
