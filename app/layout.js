import { League_Spartan } from "next/font/google";
import "./globals.css";
import ModeToggle from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
})

export const metadata = {
  title: "Etherea",
  description: "A mindset or focus that feels light and effortless",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${leagueSpartan.className} antialiased`}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
