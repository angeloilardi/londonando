import FormContacts from "./Forms/FormContacts";
import FormLayout from "./Forms/components/FormLayout";

export default function Contacts() {
  return (
    <div className="bg-background-light px-8 dark:bg-gray-600" id="contatti">
      <h3 className="text-center text-3xl pt-16">CONTATTI</h3>
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
