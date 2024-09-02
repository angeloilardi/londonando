import FormContacts from "../components/FormContacts";
import FormLayout from "../components/FormLayout";

export default function Contacts() {
  return (
    <div
      className="bg-off-white dark:bg-gray-600 snap-start"
      id="contacts"
    >
      <FormLayout>
        <p className="my-6 dark:text-white">
          Per qualsiasi domanda o chiarimento relativo alle diverse passeggiate
          proposte, per personalizzare il vostro tour o per qualsiasi dubbio
          rispetto al vostro soggiorno a Londra non esitate a contattarci.
          Saremo felici di aiutarvi.
        </p>
        <div className="md:basis-1/2">
          <FormContacts />
        </div>
      </FormLayout>
    </div>
  );
}
