'use client'

import FormSubmitButton from "@/app/components/FormSubmitButton";
import { Modal, Flowbite } from "flowbite-react";
  import { FaCheckCircle } from "react-icons/fa";
import { submitForm } from "@/app/actions";
import { useRef, useState } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { root } from "postcss";


const customTheme: CustomFlowbiteTheme = {
  label: {
    root: {
      colors: {
        default: "text-primary",
      },
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          info: "focus:border-accent focus:ring-accent border-primary-light",
        },
      },
    },
  },
  select: {
    field: {
      select: {
        colors: {
          info: "focus:border-accent focus:ring-accent border-primary-light",
        },
      },
    },
  },
  textarea: {
    colors: {
      info: "focus:border-accent focus:ring-accent border-primary-light",
    },
  },
};

export default function FormServices({
  children,
}: {
  children: React.ReactNode;
  }) {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  const initialState = {
    message: ''
  }

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

      <Flowbite theme={{ theme: customTheme }}>
        <form
          ref={ref}
          className="flex w-[90%] flex-col gap-4 justify-center mx-auto max-w-2xl py-3 text-primary"
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
