import Image from 'next/image'

export default function Home() {
 
    return (
      <div className="h-screen flex items-center justify-center pl-1 pr-1 m-auto text-center overflow-x-hidden text-white font-bold">
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
                <video
                    className='min-w-full min-h-full'
            src="./video.mp4"
            muted
            autoPlay
            loop
                ></video>
                <div className='h-screen w-screen absolute top-0 left-0 bg-blue-900 z-10 opacity-60'></div>
            </div>
            <div className="z-20">
                <h1 className='text-9xl'>LONDONANDO</h1>
            </div>
      </div>
    );
}
