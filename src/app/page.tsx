import Image from "next/image";
import dummy from "@/datas/dummy.json"
import Navbar from "@/components/Navbar";
import HomeCard from "@/components/HomeCard";

export default function Home() {
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
        <div className="flex flex-col gap-2 px-4">
          <label htmlFor="Location" className="font-semibold text-white">Location</label>
          <div className="rounded-full flex items-center p-[12px_16px] bg-white w-full transition-all duration-300 focus-within:ring-2 focus-within:ring-[#FF8E62]">
            <div className="w-6 h-6 flex shrink-0 mr-[6px]">
              <Image width={100} height={100} src={"/assets/images/icons/location-normal.svg"} alt="icon" />
            </div>
            <select name="location" id="Location" className=" bg-white font-semibold w-full outline-none">
              <option value="jkt" selected>Jakarta</option>
              <option value="" selected>Bekasi</option>
              <option value="" selected>Tangerang</option>
              <option value="" selected>Bogor</option>
            </select>
          </div>
        </div>
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
