import { Bebas_Neue, Geist, Geist_Mono, Montserrat, Pirata_One } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar/TopNavBar";
import localFont from 'next/font/local'
;

const pirata = Pirata_One({
  variable:"--font-pirata",
  subsets: ["latin"],
  weight:['400'],
  display:"swap"
})

export const bebasneue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight:['400'],
  display:"swap"
})
 
export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  weight:['100','200','300','400','500','600','700','800','900'],
  display:"swap"
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export const xurkit = localFont({
  src:'../fonts/short_xurkit_tilt.otf',
  variable: '--font-xurkit',
  display: 'swap',
})

export const quantum = localFont({
  src:'../fonts/quantum.otf',
  variable: '--font-quantum',
  display: 'swap',
})




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${xurkit.variable} ${pirata.variable} ${bebasneue.variable} ${montserrat.variable} ${quantum.variable} antialiased  h-screen overflow-hidden flex flex-col`}
      >
        <TopNavBar/>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
