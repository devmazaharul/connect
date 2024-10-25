import "./globals.css";
import { Space_Grotesk,Tiro_Bangla} from 'next/font/google'

import { Toaster } from "react-hot-toast";
const font=Space_Grotesk({subsets:['latin'],style:"normal",weight:"400"})


export default function RootLayout({ children }) {



  return (

    <html lang="en">
      <body
        className={`${font.className} `}
      >
{children}


<Toaster/>


      </body>
    </html>
  );
}
