import FormContacts from "../components/FormContacts";
import FormLayout from "../components/FormLayout";

export default function Contacts() {
  return (
    <div
      className="bg-background-light px-5 dark:bg-gray-600 snap-start"
      id="contacts"
    >
      <h3 className="text-center text-3xl mt-24">
        CONTATTI
      </h3>
      <FormLayout>
        <p className="my-6 dark:text-white text-accent">
          Per qualsiasi domanda o chiarimento relativo alle diverse passeggiate
          proposte, per personalizzare il vostro tour o per qualsiasi dubbio
          rispetto al vostro soggiorno a Londra non esitate a contattarci.
          Saremo felici di aiutarvi.
        </p>
          <FormContacts />
      </FormLayout>
    </div>
  );
}
