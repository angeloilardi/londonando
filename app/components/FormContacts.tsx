
import {
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";

export default function FormContacts() {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Nome e Cognome" />
        </div>
        <TextInput id="name" required shadow type="text" name="name" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Indirizzo email" />
        </div>
        <TextInput id="email" required shadow type="email" name="email" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email-confirm" value="Conferma email" />
        </div>
        <TextInput
          id="email-confirm"
          required
          shadow
          type="email"
          name="email-confirm"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Telefono" />
        </div>
        <TextInput id="phone" required shadow type="tel" name="phone" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="message" value="Messaggio" />
        </div>
        <Textarea id="message" required shadow rows={4} name="message"/>
      </div>
    </>
  );
}
