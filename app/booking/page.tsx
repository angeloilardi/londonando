import FormBooking from "../components/Forms/FormBooking";

export default function Booking({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);
  return (
    <div className="py-6 flex flex-col items-center bg-background-light dark:bg-gray-600">
      <div className="flex flex-col gap-4 max-w-2xl justify-center w-[90%]">
        <div className="text-info">
          <h1 className="text-2xl">La tua richiesta:</h1>
          <h2 className="text-3xl">{searchParams.tour}</h2>
          <p className="text-lg">{searchParams.num}</p>
        </div>
      </div>

      <FormBooking />
    </div>
  );
}
