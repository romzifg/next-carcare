"use client"

import Image from "next/image";
import dummy from "@/datas/dummy.json"
import Navbar from "@/components/Navbar";
import HomeCard from "@/components/HomeCard";
import Select from "@/components/Select";
import { useState } from "react";

const City = [
  { value: "jakarta", label: "Jakarta" },
  { value: "bekasi", label: "Bekasi" },
  { value: "tangerang", label: "Tangerang" },
  { value: "bogor", label: "Bogor" }
]

export default function Home() {
  const [value, setValue] = useState("jakarta");

  return (
    <main className="bg-[#FAFAFA] max-w-[640px] mx-auto min-h-screen relative flex flex-col has-[#CTA-nav]:pb-[120px] has-[#Bottom-nav]:pb-[120px]">
      <div className="bg-[#270738] absolute top-0 max-w-[640px] w-full mx-auto rounded-b-[50px] h-[370px]"></div>
      <header className="flex flex-col gap-3 items-center text-center pt-10 relative z-10">
        <div className="flex shrink-0">
          <Image width={100} height={100} src={"/assets/images/logos/logo.svg"} alt="logo" />
        </div>
        <p className="text-sm leading-[21px] text-white">Premium Wash & Car Detailing</p>
      </header>
      <form action="" className="flex flex-col gap-6 mt-6 relative z-10">
        <Select
          label="Location"
          name="location"
          icon={
            <Image width={100} height={100} src={"/assets/images/icons/location-normal.svg"} alt="icon" />
          }
          defaultValue={value}
          value={value}
          option={City}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <section id="Services" className="flex flex-col gap-3 px-4">
          <h1 className="font-semibold text-white">Our Great Services</h1>
          <div className="grid grid-cols-3 gap-4">
            {
              dummy.map((el: any, idx: number) => (
                <HomeCard key={idx} logo={el.image_url} serviceName={el.service_name} serviceCount={el.store} />
              ))
            }
          </div>
        </section>
      </form>
      <section id="Promo" className="flex flex-col gap-3 px-4 mt-6 relative z-10">
        <h1 className="font-semibold">Special Offers</h1>
        <a href="#">
          <div className="w-full aspect-[360/120] flex shrink-0 rounded-[20px] overflow-hidden">
            <Image width={500} height={500} src={"/assets/images/thumbnails/banner.png"} className="object-cover w-full h-full" alt="promo banner" />
          </div>
        </a>
      </section>
      <Navbar />
    </main>
  );
}
