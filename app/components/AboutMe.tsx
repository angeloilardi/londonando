import Image from "next/image";
import ReviewsWidget from ".//ReviewsWidget";

export default function AboutMe() {
  return (
    <>
      <div
        id="aboutme"
        className="bg-background-light flex flex-col flex-1 lg:flex-row dark:bg-gray-600"
      >
        <div className="flex flex-col flex-1 max-h-screen border-8 border-transparent gap-2 overflow-hidden ">
          <img
            src="/images/c80194bd-0d7f-4fe8-acc4-bdbce2409148.jpeg"
            alt=""
            className="h-[33.3%] object-cover"
          />

          <img
            src="/images/IMG_1733.jpeg"
            alt=""
            className="h-[33.3%] object-cover"
          />
          <img
            src="/images/IMG_6351 copy.jpg"
            alt=""
            className="h-[33.3%] object-cover"
          />
        </div>
        <div className="p-6 flex-1 text-accent dark:text-white leading-[1.42] gap-4 flex flex-col justify-between">
          <h3 className="text-center text-3xl py-6 ">CHI SONO</h3>
          <p>
            Dietro Londonando ci sono io.. Mario. Un siciliano dinamico, curioso
            e appassionato!! Dicono anche con un entusiasmo contagioso e
            travolgente!
            <br />
            Quello che realmente mi appassiona di ci&ograve; che faccio, come
            nella vita, &egrave; l'incontro, lo scambio, l'arricchimento e la
            scoperta.
          </p>

          <p>
            Se non vedi l'ora di rimanere incantato da tutte le meravigliose
            bellezze che fanno di Londra una delle capitali pi&ugrave; visitate
            del mondo. Se sogni di trovarti per la prima volta davanti ai
            monumenti che l'hanno resa iconica, perderti tra le sue
            frequentatissime piazze e i chiassosi mercati o scoprirne gli angoli
            pi&ugrave; nascosti e meno battuti dal turismo di massa..
          </p>

          <p>
            Se sei un appassionato della storia della monarchia britannica, vuoi
            conoscerne i racconti, ripercorrerne le fasi e rivivere le vite e i
            luoghi di alcuni dei sovrani pi&ugrave; importanti che hanno scritto
            pagine fondamentali della storia inglese e non solo..
          </p>

          <p>
            Se desideri frequentare i musei e le gallerie pi&ugrave; blasonate
            d'Inghilterra, come il British Museum, la National Gallery o il
            Natural History Museum, alla scoperta delle importantissime
            testimonianze storiche e artistiche che incantano e attraggono
            milioni di visitatori da ogni angolo del globo..
          </p>

          <p>Londonando &egrave; la soluzione giusta!</p>
        </div>
      </div>
      <ReviewsWidget />
    </>
  );
}
