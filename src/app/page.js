import Header from '@/components/Header';
import SectionFive from '@/components/home/SectionFive';
import SectionFour from '@/components/home/SectionFour';
import SectionOne from '@/components/home/SectionOne';
import SectionThree from '@/components/home/SectionThree';
import SectionTwo from '@/components/home/SectionTwo';
import { Inter, Montserrat, Source_Code_Pro } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const code = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex flex-col items-center gap-24 lg:gap-32`}
    >
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <div></div>
    </main>
  );
}
