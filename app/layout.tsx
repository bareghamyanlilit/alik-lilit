import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ալիկ և Լիլիթ",
  description: "Ալիկ և Լիլիթ",
  openGraph: {
    title: "Ալիկի և Լիլիթի նշանադրության հրավիրատոմս",
    description: "Նշանադրության հրավիրատոմս",
    url: "https://alik-lilit.vercel.app/",
    siteName: "Ալիկ և Լիլիթ",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="m-auto max-w-md text-[#000000CC] bg-white"
        style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
