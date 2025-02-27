import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/assets/styles/global.css";
import "@/assets/styles/output.css";
import 'swiper/css';

const getPoppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RF Carcare App",
  description: "RF Carcare App for booking service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getPoppins.variable} ${getPoppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
