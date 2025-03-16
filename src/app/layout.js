import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ['latin', 'thai'],  // Added Thai subset
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-kanit',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kanit.className} ${kanit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
