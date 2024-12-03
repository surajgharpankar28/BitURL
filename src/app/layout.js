import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ShortLinks | URL Shortner",
  description:
    "ShortLinks makes it easy to shorten, share, and track your URLs with just a click.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/applogo.png" sizes="96x96" />
        <title>ShortLinks | URL Shortener</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-blue-300 via-blue-400 to-teal-300`}
      >
        <Navbar />
        <div className="h-[100vh]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
