import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import { Suspense } from "react";
import Analytics from "@components/Analytics/Analytics";
import Menu from "@components/menu/Menu";

export const metadata: Metadata = {
  title: 'Sebas Rivera | Ui Engineer',
  description:
    'Hola, soy Ui Engineer viviendo en Bogotá, Colombia. La curiosidad me ha impulsado constantemente a explorar nuevas tecnologías y medios para la creación de experiencias digitales únicas.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/sebasrivera.ico' sizes='any' />
      </head>
      <body>
        {children}
        <Menu />
        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
