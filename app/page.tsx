import Link from 'next/link';
import Layout from './components/Layout';


export default function Home() {
 
    return (
      <Layout>
        <div className="h-[100dvh] flex items-center justify-center pl-1 pr-1 m-auto text-center overflow-x-hidden text-white font-bold">
          <div className="absolute top-0 left-0 w-full h-[100dvh] overflow-hidden">
            <video
              className="!min-w-full !min-h-full h-0 max-w-none object-cover opacity-30"
              playsInline
              src="./video.mp4"
              muted
              autoPlay
              loop
            ></video>
            <div
              className="h-screen w-screen absolute top-0 left-0 z-10 opacity-40"
              style={{ backgroundColor: "rgb(34, 84, 112)" }}
            ></div>
          </div>
          <div className="z-20 max-w-xl">
            <h1 className="text-5xl lg:text-7xl">LONDONANDO</h1>
            <h2 className="italic mt-5 text-xl">
              Tour e visite di Londra e dintorni in Italiano!
            </h2>
            <Link href="/tours">
              <button className="outline-white p-3 rounded-md outline mt-5 text-xl">
                Scopri i tour
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
}
