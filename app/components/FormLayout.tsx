'use client'

import FormSubmitButton from "@/app/components/FormSubmitButton";
import { Modal } from "flowbite-react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
  
import { submitForm } from "@/app/actions";
import { useRef, useState } from "react";

export default function FormServices({
  children,
}: {
  children: React.ReactNode;
  }) {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="justify-center">Grazie!</Modal.Header>
        <CheckCircleOutlineIcon
          className="mx-auto m-6 w-10 h-10 text-green-500"
          fontSize="large"
        />
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Abbiamo ricevuto il tuo messaggio. Ti ricontatteremo al più
              presto.
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <form
        ref={ref}
        className="flex w-[90%] flex-col gap-4 justify-center mx-auto max-w-2xl py-3 text-primary"
        // action="https://api.web3forms.com/submit"
        // method="POST"
        action={async (formData) => {
          await submitForm(formData);
          setOpenModal(true);
          ref.current?.reset();
        }}
      >
        <input
          type="hidden"
          name="apikey"
          value="26914c6c-110d-4714-89ac-30785bc29ed4"
        ></input>
        {children}
        <FormSubmitButton />
      </form>
    </>
  );
}
