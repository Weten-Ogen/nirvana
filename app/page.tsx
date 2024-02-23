import ImageBg from "@/components/custom/imagebg";
import { randomrequest } from "@/lib/request";
import Image from "next/image";
import RandomMovie from "@/components/custom/randommovie";
import SignX from "@/components/custom/signx";

export default async function Home() {
  return (
   <section className="">
    <RandomMovie className="absolute inset-0 -z-[1]  w-full h-screen overflow-hidden bg-black/90">
      <div className="flex flex-col text-white p-12  justify-center items-center  max-w-lg my-5 mx-auto ">
          <p className="text-lg capitalize font-bold ">Welcome to the nirvana movie application</p>
          <p className="py-4 capitalize   text-lg tracking-wider text-gray-200">we  feed you with updates about new movies, popular ones and the horrors of the screen you might want to watch</p>
          <SignX className="text-lg uppercase font-bold">get started</SignX>
      </div>
    </RandomMovie>
   </section>
  );
}
 