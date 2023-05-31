import Head from 'next/head';
import Image from 'next/image';
import logo from '../assets/logo.png';
import headline from '../assets/headline.png';
import comingsoon from '../assets/coming-soon.png';
import mining from '../assets/mining.gif';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#5C95E5] bg-repeat to-[#7D6FF6] bg-center subpixel-antialiased">
      <Head>
        <title>Terahashing | Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full">
        <div className="mt-[100px]">
          <Image src={logo} alt="Terahashing Logo" width={589} height={85} />
        </div>
        <div className="mt-4">
          <Image src={headline} alt="Headline" width={1025} height={28} />
        </div>
        <div className="mt-10">
          <Image src={comingsoon} alt="Coming Soon" width={1067} height={105} />
        </div>
        <div className="mt-10">
          <Image src={mining} alt="Mining Image" width={775} height={436} />
        </div>
      </main>
    </div>
  );
}
