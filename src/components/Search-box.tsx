import Image from "next/image"
import location from "../../public/pic/icons/loaction.svg"
import { LiquidGlass } from "./ui/liquid-glass"
import search from '../../public/pic/icons/searchWhite.svg'

export const SearchBox = () => {
  return (
    <>
      <LiquidGlass
        radius={19}
        bevelDepth={300}
        tint={0.13} 
        className="flex bg-[#B271001A] w-[75%] h-24 border border-white justify-between place-self-center absolute pr-4"
      > 
        <section className="flex flex-1 h-10 place-self-center gap-4">  
          <Image src={location} alt="search-bar" width={24} height={24} ></Image>
          <select className="w-[75%]" name="target" id="target">
            <option value=" مقصد "> مقصد </option>
            <option value=" شیراز "> شیراز </option>
            <option value=" اصفهان "> اصفهان </option>
            <option value=" تهران "> تهران </option>
          </select>
        </section>
        <span className=" flex flex-col place-self-center rounded-full w-0.75 h-14 bg-[#FFFFFF7A] ml-4"></span>
        <section className="flex flex-1 h-10 place-self-center gap-4">
          <Image src={location} alt="search-bar" width={24} height={24} ></Image>
          <select className="w-[75%]" name="target" id="target">
            <option value=" مقصد "> مبدا </option>
            <option value=" شیراز "> شیراز </option>
            <option value=" اصفهان "> اصفهان </option>
            <option value=" تهران "> تهران </option>
          </select>
        </section>
        <span className=" flex flex-col place-self-center rounded-full w-0.75 h-14 bg-[#FFFFFF7A] ml-4"></span>
        <section className="flex flex-1 gap-4">
          <Image src={location} alt="search-bar" width={24} height={24} ></Image>
          <span className="flex place-self-center"> date picker </span>
        </section>
        <span className=" flex flex-col place-self-center rounded-full w-0.75 h-14 bg-[#FFFFFF7A] ml-4"></span>
        <section className="flex flex-1 gap-4">
          <Image src={search} alt="search-bar" width={24} height={24} ></Image>
          <input className=" flex place-self-center" type="text" name="search" id="search" placeholder=" جستجو تور ها... " />
        </section>
      </LiquidGlass>
    </>
  )
}
