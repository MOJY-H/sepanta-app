import { LiquidGlass } from "./ui/liquid-glass"

export const Navbar = () => {
  return (
    <>
        <LiquidGlass
          radius={20}
          bevelDepth={8}
          scale={36}
          tint={0.22} 
          className="flex place-self-center px-6 py-4 gap-16"
        >        
            <span className="text-[14px]"> صفحه اصلی </span>  
            <span className="text-[14px]"> تور داخلی </span>
            <span className="text-[14px]"> تور خارجی </span>
            <span className="text-[14px]">  درباره ما </span>
        </LiquidGlass>
    </>
  )
}
