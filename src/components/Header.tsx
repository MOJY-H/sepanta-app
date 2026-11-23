import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Logo from "../../public/pic/logo/SepLogo.png"
import heartWhite from "../../public/pic/icons/heartWhite.svg"
import UserWhite from "../../public/pic/icons/UserWhite.svg"
import { LiquidGlass } from "./ui/liquid-glass";

export const Header = () => {
  return (
    <>  
      <section className="bg-[#030104]">
        <div className="relative top-[30] z-1">

          <section className="flex justify-between w-full pl-8" >
          
            <button className="flex cursor-pointer ">
              <Image src={Logo} alt="Logo"  width={100}  height={100} />
              <h1 className="flex place-self-center -mr-3 text-[24px] bg-linear-to-r from-[#FFB400] to-[#F5F7F7] bg-clip-text text-transparent"> سپنتا </h1>
            </button>

            <Navbar />
            
            <div className="flex place-self-center gap-4">

              <div className="flex place-self-center border border-white/40 rounded-[20px] rounded-tr-4xl rounded-bl-4xl rounded-br-4xl rounded-tl-4xl">
                <LiquidGlass
                  radius={20}
                  bevelDepth={8}
                  scale={36}
                  tint={0.22} 
                  className="w-7 h-7 flex place-content-center cursor-pointer rounded-full "
                >
                        <button className="cursor-pointer " type="button" >
                            <Image className="ml-0.5" src={heartWhite} alt="heart" width={18} height={18}/>
                        </button>
                </LiquidGlass>
              </div>

              <div className="flex place-self-center border border-white/40 rounded-[20px] rounded-tr-4xl rounded-bl-4xl rounded-br-4xl rounded-tl-4xl">
                <LiquidGlass
                  radius={20}
                  bevelDepth={8}
                  scale={36}
                  tint={0.22} 
                  className="w-7 h-7 flex place-content-center cursor-pointer rounded-full "
                >
                  <button className="cursor-pointer" type="button" > 
                    <Image src={UserWhite} alt="user" width={18} height={18}/>
                  </button>
                </LiquidGlass>
              </div>

            </div>

          </section>

        </div>
      </section>
    </>
  )
}