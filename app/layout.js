import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
})

export const metadata = {
  title: "Etherea",
  description: "A mindset or focus that feels light and effortless",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
