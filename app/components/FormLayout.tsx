import FormSubmitButton from "@/app/components/FormSubmitButton";

export default function FormServices({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <form className="flex w-[90%] flex-col gap-4 justify-center mx-auto max-w-2xl py-3 text-primary">
      {children}
      <FormSubmitButton />
    </form>
  );
}
