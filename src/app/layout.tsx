import "./globals.css";
import localFont from 'next/font/local'
import { Header } from "@/components/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const IranYekanFN = localFont({
  src: '../../public/font/IRANYekanFN.woff',
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("h-full", "bg-(--background)", "text-(--secondary)", IranYekanFN.className, "font-sans", geist.variable)} 
    >
      <body className='min-h-full flex flex-col'>

        <Header />

        {children}

      </body>
    </html>
  );
}
