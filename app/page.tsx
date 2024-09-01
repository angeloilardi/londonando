import Tours from "./components/Tours";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Tours />
      <Services />
      <AboutMe />
      <Contacts />
    </>
  );
}
