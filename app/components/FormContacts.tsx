"use client";

import { useState } from "react";

import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import FormLayout from "./FormLayout";

export default function FormContacts() {
  return (
    <FormLayout>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Nome e Cognome" />
        </div>
        <TextInput id="name" required shadow type="text" />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Indirizzo email" />
        </div>
        <TextInput id="email" required shadow type="email" />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email-confirm" value="Conferma email" />
        </div>
        <TextInput id="email-confirm" required shadow type="email" />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Telefono" />
        </div>
        <TextInput id="phone" required shadow type="tel" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="message" value="Messaggio" />
        </div>
        <Textarea id="message" required shadow rows={4} />
      </div>

      <Button type="submit" className="bg-cobalt_blue my-4">
        Invia richiesta
      </Button>
    </FormLayout>
  );
}
