import Image from "next/image"

const Navbar = () => {
  return (
      <nav id="Bottom-nav" className="fixed bottom-0 w-full max-w-[640px] mx-auto border-t border-[#E9E8ED] p-[20px_24px] bg-white z-20">
          <ul className="flex items-center justify-evenly">
              <li>
                  <a href="index.html" className="flex flex-col items-center text-center gap-1">
                      <div className="w-6 h-6 flex shrink-0 ">
                          <Image width={100} height={100} src={"/assets/images/icons/element-equal.svg"} alt="icon" />
                      </div>
                      <p className="font-semibold text-xs leading-[18px] text-[#FF8969]">Home</p>
                  </a>
              </li>
              <li>
                  <a href="check-booking.html" className="flex flex-col items-center text-center gap-1">
                      <div className="w-6 h-6 flex shrink-0 ">
                          <Image width={100} height={100} src={"/assets/images/icons/note-favorite-grey.svg"} alt="icon" />
                      </div>
                      <p className="font-semibold text-xs leading-[18px] text-[#BABEC7]">Orders</p>
                  </a>
              </li>
              <li>
                  <a href="#" className="flex flex-col items-center text-center gap-1">
                      <div className="w-6 h-6 flex shrink-0 ">
                          <Image width={100} height={100} src={"/assets/images/icons/ticket-discount-grey.svg"} alt="icon" />
                      </div>
                      <p className="font-semibold text-xs leading-[18px] text-[#BABEC7]">Coupons</p>
                  </a>
              </li>
              <li>
                  <a href="#" className="flex flex-col items-center text-center gap-1">
                      <div className="w-6 h-6 flex shrink-0 ">
                          <Image width={100} height={100} src={"/assets/images/icons/message-question-grey.svg"} alt="icon" />
                      </div>
                      <p className="font-semibold text-xs leading-[18px] text-[#BABEC7]">Help</p>
                  </a>
              </li>
          </ul>
      </nav>
  )
}

export default Navbar