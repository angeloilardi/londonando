import FormContacts from "../components/FormContacts";
import FormLayout from "../components/FormLayout";

export default function Contacts() {
    
    return (
      <div id="contacts" className="bg-off-white">
        <FormLayout>
          <p className="my-6">
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