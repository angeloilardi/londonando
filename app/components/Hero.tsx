"use client";

import Link from "next/link";
import { AttentionSeeker, Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center pl-1 pr-1 m-auto text-center overflow-x-hidden text-white font-bold relative">
      <div className="absolute top-0 left-0 w-full h-[100dvh] overflow-hidden">
        <video
          className="!min-w-full !min-h-full h-0 max-w-none object-cover opacity-70"
          playsInline
          src="https://ik.imagekit.io/b4rgaux1e/ik-video%20(1).mp4"
          poster="/images/home.jpg"
          muted
          autoPlay
          loop
        ></video>
        <div
          className="h-screen w-screen absolute top-0 left-0 z-10 opacity-40"
          style={{ backgroundColor: "rgb(34, 84, 112)" }}
        ></div>
      </div>
      <div className="z-20 max-w-2xl p-3">
        <Slide direction="right">
          <h1 className="text-5xl lg:text-7xl">LONDONANDO</h1>
        </Slide>
        <Slide direction="left">
          <h2 className="mt-5 text-xl md:text-2xl uppercase">
            Tour e visite di Londra e dintorni in Italiano!
          </h2>
        </Slide>
        <Link href="/#tour">
          <AttentionSeeker effect="heartBeat" delay={2000} duration={2000}>
            <button className="outline-white p-3 rounded-md outline mt-5 text-xl uppercase">
              Scopri i tour
            </button>
          </AttentionSeeker>
        </Link>
      </div>
    </div>
  );
}
