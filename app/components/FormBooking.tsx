
import {
  Button,
  CustomFlowbiteTheme,
  Label,
  TextInput,
  Textarea,
  Flowbite
} from "flowbite-react";
import FormLayout from "./FormLayout";

const customTheme: CustomFlowbiteTheme = {
  label: {
    root: {
      colors: {
        default: "text-primary dark:text-white",
        info: "text-cyan-500 dark:text-cyan-600",
        failure: "text-red-700 dark:text-red-500",
        warning: "text-yellow-500 dark:text-yellow-600",
        success: "text-green-700 dark:text-green-500",
      },
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          // gray: "text-primary"
        }
      }
    }
  }
};

export default function FormBooking() {
    return (
      <>
        <FormLayout>
          {/* Date and number of kids */}
          <Flowbite theme={{theme: customTheme}}>
            <div className="md:grid-cols-2 md:grid md:gap-6">
              {/* Date */}
              <div className="mb-4 md:mb-0">
                <div className="mb-2 block">
                  <Label htmlFor="date" value="Data" />
                </div>
                <TextInput
                  id="date"
                  required
                  shadow
                  type="date"
                  min={new Date().toLocaleDateString("fr-ca")}
                />
              </div>
              {/* Number of kids */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="kids" value="Numero di minori (0-15 anni)" />
                </div>
                <TextInput
                  id="kids"
                  required
                  shadow
                  type="number"
                  min="1"
                  max="20"
                />
              </div>
            </div>
            {/* First and last name */}
            <div className="md:grid-cols-2 md:grid md:gap-6">
              <div className="mb-4 md:mb-0">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Nome" />
                </div>
                <TextInput id="name" required shadow type="text" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="surname" value="Cognome" />
                </div>
                <TextInput id="surname" required shadow type="text" />
              </div>
            </div>

            {/* Phone and email */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Telefono" />
              </div>
              <TextInput id="phone" required shadow type="tel" />
            </div>
            {/* Email and confirm email */}
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
            {/* Notes */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Note" />
              </div>
              <Textarea id="notes" required shadow rows={3} />
            </div>
          </Flowbite>
        </FormLayout>
      </>
    );
}
