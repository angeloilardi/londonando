import Image from "next/image";
import ReviewsWidget from ".//ReviewsWidget";

export default function AboutMe() {
  return (
    <>
      <div
        id="aboutme"
        className="bg-background-light flex flex-col flex-1 lg:flex-row dark:bg-gray-600 snap-start"
      >
        {/* <Image
          src="/2ca1190f-507d-4558-8456-08e3ef7b5166.jpeg"
          alt=""
          width={400}
          height={300}
          className="flex-1 aspect-auto w-full object-cover"
        /> */}
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
        <div className="p-6 flex-1 text-accent dark:text-white leading-[1.42]">
          <h3 className="text-center text-3xl py-6 ">CHI SONO</h3>
          <p>
            Per chiunque avesse voglia di rimanere incantato da tutte le
            meravigliose bellezze che fanno di Londra una delle capitali
            pi&ugrave; visitate al mondo. Per coloro che sognano di trovarsi per
            la prima volta davanti ai monumenti che l&rsquo;hanno resa iconica,
            per chi vuole perdersi tra le sue frequentatissime piazze e i
            numerosi mercati o scoprire gli angoli pi&ugrave; nascosti e meno
            battuti dal turismo di massa.
          </p>
          <br />
          <p>
            Per tutti gli amanti della monarchia inglese, coloro che vogliono
            conoscerne i racconti, ripercorrere le diverse fasi e svelarne i
            segreti. Rivivi le vite e i luoghi di alcuni dei sovrani pi&ugrave;
            importanti d&rsquo;Inghilterra che con astute manovre politiche,
            offensive belliche e scismi religiosi, hanno scritto pagine
            fondamentali della storia inglese e non solo. Scopri i Palazzi
            Reali, i giardini privati e i luoghi della vita della compianta
            Regina Elisabetta II, la Regina Vittoria e l&rsquo;indimenticata
            Lady Diana, la Principessa del Popolo.
          </p>
          <br />
          <p>
            Non solo piacevoli passeggiate esterne nella Londra storica e
            culturale o urbana e multietnica, ma anche visite guidate nei musei
            e nelle gallerie pi&ugrave; blasonate d&rsquo;Inghilterra. Lasciati
            guidare alla scoperta delle importantissime testimonianze storiche
            custodite all&rsquo;interno del British Museum; frequenta le
            meravigliose sale della National Gallery, ripercorrendo la storia
            dell&rsquo;arte attraverso alcuni dei quadri degli artisti
            pi&ugrave; importanti di tutti i tempi. Visita il Museo di Storia
            Naturale con la sua famosa galleria dedicata ai dinosauri che
            incanta e rapisce milioni di visitatori grandi e piccini da ogni
            angolo del globo.
          </p>
        </div>
      </div>
      <ReviewsWidget />
    </>
  );
}
