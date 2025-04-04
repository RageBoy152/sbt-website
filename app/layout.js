import { Chakra_Petch } from 'next/font/google';
import "./globals.css";



// fonts
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-chakra-petch",
  weight: ["300", "400", "500", "600", "700"]
});



// metadata
export const metadata = {
  title: "Starbase Tracking",
  description: "Following every step of the Starship journey from Starbase, Texas",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-body text-white font-chakra-petch scroll-smooth ${chakraPetch.variable}`}>
        {children}
      </body>
    </html>
  );
}
