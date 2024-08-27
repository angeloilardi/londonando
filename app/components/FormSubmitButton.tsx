import { Button } from "flowbite-react";

export default function FormSubmitButton() {
    return (
      <Button
        type="submit"
        className="w-full group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2 bg-accent my-4"
      >
        {" "}
        Invia Richiesta
      </Button>
    );
}
