import { League_Spartan } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
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
            <main className="min-h-screen">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}