import Image from "next/image";
import bg from "../../public/pic/bg/mainBg.jpg";
import { SearchBox } from "@/components/Search-box";
import ScrollToTopBtn from "@/components/BtnToTop";
import TitleDash from "../../public/pic/icons/TitleDash.svg";

export default function Home() {
  return (
    <>
      <ScrollToTopBtn />

      <section className="flex flex-col gap-30">
        <div className=" relative z-0 bg-[#030104] ">
          <Image
            className="overflow-y-hidden -mt-25 w-full animate-wiggle"
            src={bg}
            alt="bg"
            width={1000}
            height={100}
          />
          <div className="flex h-50 absolute bottom-0 w-full animate-wiggle bg-linear-to-b from-[#2A2A2A00] to-[#000000] shadow-2xl z-0"></div>
          <section className="absolute top-[14%] flex flex-col place-self-center w-[95%]">
            <p className="flex gap-5">
              <span className="bg-[#FACD75] w-24 h-0.75 flex place-self-center rounded-full "></span>
              <span className="text-(--space-16 )">
                {" "}
                YOUR NEXT <span className="text-[#FACD75]"> DESTINATION </span>
              </span>
            </p>
            <h1 className="text-[32px] pt-6">
              جهان، در انتظار
              <br />
              <span
                className="bg-linear-to-b from-[#EFA000] to-[#FFF1AA]
                text-transparent bg-clip-text"
              >
                امضای توست
              </span>
            </h1>
            <p className="pt-3">
              از زیبایی های کشف نشده ی ایران تا مقصد های رویایی جهان
              <br />
              سفری را انتخاب کن که به داستان زندگی تو تبدیل شود.
            </p>
          </section>

          <SearchBox />
        </div>

        {/*------- inside Tour/ ------*/}

        <div className=" px-10 flex flex-col">
          <section className="flex gap-7">
            <Image
              className="-mb-4"
              src={TitleDash}
              alt="dashTitle"
              width={90}
              height={0}
            />
            <h2 className="text-[24px]"> تور های داخلی و خارجی </h2>
          </section>
          <section className=" flex ">
            <div className=" flex flex-1 ">

            </div>
            <div className="flex flex-1"></div>
          </section>
        </div>
      </section>
    </>
  );
}
