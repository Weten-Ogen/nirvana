import Image from "next/image";
import React from "react";
import fallbackImg from "@/public/fallback.png";

export default async function page({ params }: { params: { id: number } }) {
    const { id } = params;
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5a4e60da58d0bcf5f356c90335f564fb`
    ).then((res) => res.json());
    console.log(data);
    return (
        <section className="flex flex-col gap-8">
            {/* Image */}
            <div className="absolute inset-0 overflow-hidden h-[66vh] w-full z-[-1]">
                
                <div className="absolute inset-0 w-full bg-black/50  " />
                <Image
                    width={500}
                    height={500}
                    className="object-cover w-full"
                    src={
                        data.poster_path
                            ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
                            : fallbackImg
                    }
                    alt={data.title}
                />
            </div>
            <div className="flex flex-col items-center justify-center  gap-4 text-white p-2">
                {/* content */}
                <p className="text-lg font-bold tracking-wider whitespace-normal">
                    {data.title}
                </p>
                <p className="max-w-lg text-justify whitespace-normal tracking-wide">
                    {data.overview}
                </p>
                <p className="flex gap-4">
                    <span className="capitalize">release date : </span>
                    <span className="capitalize">{data.release_date}</span>
                </p>
            </div>

            <aside className="mt-10 bg-gray-300 w-[98%] mx-auto  shadow-lg  rounded-lg relative -inset-1 p-4">
                <p className="text-lg font-bold capitalize text-center">
                    production companies
                </p>
                {/* production companines */}
                <div className="flex flex-wrap justify-center ">
                    {data.production_companies.map((item: companies) => {
                        return (
                            <div
                                className="flex flex-col items-center gap-2 "
                                key={item.id}
                            >
                                <p className="p-2">{item.name}</p>
                                <p>
                                    {item.logo_path && (
                                        <Image
                                            width={80}
                                            height={80}
                                            className=""
                                            src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                                            alt={item.name}
                                        />
                                    )}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-2 text-center ">
                    <p className="capitalize text-lg font-bold">
                        production countries
                    </p>
                    <div className="flex flex-col gap-2">
                        {data.production_countries.map((item: countries) => {
                            return (
                                <div key={item.name}>
                                    <p>{item.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </aside>
            <div className=" mt-5">
                <div className="flex text-center gap-2">
                    <p className="capitalize text-lg ">title</p>
                    <p>{data.original_title}</p>
                </div>
            </div>
        </section>
    );
}
