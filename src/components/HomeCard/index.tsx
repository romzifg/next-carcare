import Image from 'next/image';
import React from 'react'

interface IHomeCard {
  logo: string
  serviceName: string
  serviceCount: number
}

const HomeCard = ({ ...props }: IHomeCard) => {
  return (
    <a href="store-list.html" className="card-services">
      <div className="rounded-[20px] border border-[#E9E8ED] py-4 flex flex-col items-center text-center gap-4 bg-white transition-all duration-300 hover:ring-2 hover:ring-[#FF8E62]">
        <div className="w-[50px] h-[50px] flex shrink-0">
          <Image src={props.logo} alt="icon" width={100} height={100} />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-sm leading-[21px]">{props.serviceName}</p>
          <p className="text-xs leading-[18px] text-[#909DBF]">{props.serviceCount} Stores</p>
        </div>
      </div>
    </a>
  );
}

export default HomeCard