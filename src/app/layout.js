import { ThemeProvider } from "@/components/theme-provider";
import { Kanit } from "next/font/google";

const locales = ["en", "th"];

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-kanit",
});

export default function RootLayout({ children, params }) {
  return (
    <html lang={params?.locale} suppressHydrationWarning>
      <body
        className={`${kanit.className} ${kanit.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
