import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-8 grid-cols-2  b 2xl:px-32 xl:24px md:px-16 px-8 justify-between">
      <div className="flex flex-col  pt-20 gap-5 ">
        <span className="py-2.5 px-5 mb-2 w-32  bg-[#e1edff] rounded-lg border  text-[blue] font-semibold		">
          Sale 70%
        </span>
        <h1 className="text-7xl font-semibold	text-black		w-100 	">
          An Industrial Take on Streetwear
        </h1>
        <p className="w-[72%] text-black	font-normal	text-base	">
          Anyone can beat you but no one can beat your outfit as long as your
          wear Dine outfits.
        </p>
        <a className="mb-20">
          <button
            className="w-1/3 max-w-md flex items-center border rounded-md font-light overflow-hidden p-4  bg-black decoration-white	text-[white] gap-2 text-base	font-semibold	"
            type="button"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="26"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                fill="currentColor"
              ></path>
              <path
                d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                fill="currentColor"
              ></path>
            </svg>{" "}
            Start Shopping
          </button>
        </a>
        <div className="grid grid-cols-4 gap-x-10	mr-20">
          <Image
            src="/firstImg.webp"
            alt="Company Logo"
            className=""
            width={100}
            height={100}
            priority
          />
          <Image
            src="/secondImg.webp"
            alt="Company Logo"
            className=""
            width={120}
            height={100}
            priority
          />
          <Image
            src="/thirdImg.webp"
            alt="Company Logo"
            className=""
            width={120}
            height={100}
            priority
          />
          <Image
            src="/fourth.webp"
            alt="Company Logo"
            className=""
            width={120}
            height={100}
            priority
          />
        </div>
      </div>
      <div className="flex items-center max-lg:hidden">
        <div className=" rounded-full bg-[#ffece3] w-[600] h-[600]   ">
          <Image
            src="/bannerImg.webp"
            alt="Company Logo"
            className=""
            width={650}
            height={650}
            priority
          />
        </div>
      </div>
    </div>
  );
}
