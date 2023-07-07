import Image from 'next/image'

export default function Home() {
 
    return (
      <div className="h-screen flex items-center justify-center pl-1 pr-1 m-auto text-center overflow-x-hidden text-white font-bold">
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
          <video
            className="!min-w-full !min-h-full h-0 max-w-none object-cover"
            playsInline
            src="./video.mp4"
            muted
            autoPlay
            loop
          ></video>
          <div
            className="h-screen w-screen absolute top-0 left-0 z-10 opacity-70"
            style={{ backgroundColor: "rgb(34, 84, 112)" }}
          ></div>
        </div>
        <div className="z-20">
          <h1 className="text-5xl md:text-6xl lg:text-8xl">LONDONANDO</h1>
        </div>
      </div>
    );
}
