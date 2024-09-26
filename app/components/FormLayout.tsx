"use client";

import FormSubmitButton from "@/app/components/FormSubmitButton";
import { Modal, Flowbite } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";
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
      {/* Modal */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="justify-center">Grazie!</Modal.Header>
        <FaCheckCircle
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

      <Flowbite>
        <form
          ref={ref}
          className="flex flex-col gap-4 justify-center mx-auto max-w-3xl py-3"
          // action="https://api.web3forms.com/submit"
          // method="POST"
          action={async (formData) => {
            const result = await submitForm(formData);
            !result && setOpenModal(true);
            ref.current?.reset();
          }}
        >
          <input
            type="hidden"
            name="apikey"
            value="26914c6c-110d-4714-89ac-30785bc29ed4"
          ></input>
          {children}
          {/* <p>{state.message}</p> */}
          <FormSubmitButton />
        </form>
      </Flowbite>
    </>
  );
}
