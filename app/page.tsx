import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden dark">
      <div className="fixed inset-0 flex size-full flex-grow flex-col bg-[#100E12] z-10">
        <img
          alt="A woman with her mind expanding into the universe as she accumulates knowledge."
          className="absolute size-full object-cover transition-opacity duration-500 xl:hidden"
          width="1071"
          height="800"
          src="/feel-it-all.png"
        />
        <img
          alt="A woman with her mind expanding into the universe as she accumulates knowledge."
          className="absolute size-full object-cover transition-opacity duration-500 hidden xl:block scale-105"
          width="1071"
          height="800"
          src="/feel-it-all-xl.png"
        />
        <div
          className="flex h-full flex-col transition-opacity delay-500"
          style={{ transitionDuration: "750ms" }}
        >
          <div className="my-8 p-md flex items-center drop-shadow-md justify-center">
            <div className="">
              <div className="h-auto group  w-10">
                <Icons.logo className="w-full h-full" />
              </div>
            </div>
            <div className="ml-2">
              <p className="font-sans text-white text-2xl font-bold">
                thefalse
              </p>
            </div>
          </div>
          <h1 className="mb-1.5 mt-6 text-center font-serif text-[88px] md:text-[100px] xl:text-[120px] leading-none tracking-[-0.05em] drop-shadow-md white font-display  text-white selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
            Feel it <span className="italic">all</span>
          </h1>
          <div className="text-md text-center leading-none drop-shadow-sm white font-sans text-base xl:text-lg text-white ">
            Express. Connect. Reflect.
          </div>
          <div className="mt-auto flex justify-center">
            <Button
              asChild
              className="hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out  select-none items-center relative group/button  justify-center text-center cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-lg h-14 pl-[18px] pr-5"
              size="lg"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <Link href="/app">Explore Now</Link>
            </Button>
          </div>
          <div className="mb-12 mt-2 flex justify-center">
            <Button
              asChild
              aria-label="Learn More"
              variant="link"
              className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark hover:bg-offsetPlus text-textMain dark:text-textMainDark dark:hover:bg-offsetPlusDark text-white drop-shadow-md bg-transparent focus-visible:bg-transparent dark:focus-visible:bg-transparent font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out  select-none items-center relative group/button  justify-center text-center rounded-lg cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-base h-10 pl-4 pr-4"
            >
              <Link
                href="/about"
                className="flex items-center min-w-0 font-medium gap-1.5 justify-center"
              >
                <div className="text-align-center relative truncate leading-loose -mb-[2px]">
                  Learn More
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/*       
      
      <div className="absolute inset-0 z-0">
        <div className="flex-none h-screen pointer-events-none fixed left-[calc(50.00000000000002%-100%/2)] top-[calc(50.00000000000002%-100%/2)] w-full z-[200]">
          <div className="noise" />
        </div>
        <img
          src="/Softly Lit Person.png"
          alt="Garden Library Background"
          className="object-cover brightness-90 absolute inset-0 w-full h-full"
        />
      </div>

      
      <div className="relative z-10 container mx-auto p-4 lg:p-16 flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col justify-end items-center text-center px-4">
          <div className="max-w-4xl mx-auto flex flex-col justify-between h-full self-stretch">
            <div className="text-center mb-16 mix-blend-difference">
              <h1
                className="mb-sm mt-6 text-center font-serif text-[88px] leading-none tracking-[-0.05em] drop-shadow-md white font-display font-[475] dark:font-[450] text-2xl md:text-3xl text-white selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
                style={{ lineHeight: "0.9em" }}
              >
                Feel it <span className="italic">all</span>
              </h1>
              <p className="text-white lg:text-xl max-w-2xl mx-auto mb-12 tracking-tighter">
                Express. Connect. Reflect.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 rounded-none"
                asChild
              >
                <Link href="/app/register">Step in the reality</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-background/80 backdrop-blur-3xl hover:bg-background rounded-none"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
