// NEXT
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";

// STYLE
import "./globals.css";
import "@/styles/common.scss";

// LIB
import { getCookieTheme } from "@/lib/theme";

// COMPONENT
import HandleUpdateStore from "@/features/HandleUpdateStore";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import DeviceProvider from "@/components/provider/DeviceProvider";

// GOOGLE FONT
const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

// LOCAL FONT
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

// META DATA
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// JSX
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const theme = getCookieTheme();
  return (
    <html lang="en" className={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <DeviceProvider>
          {children}
          <HandleUpdateStore theme={theme} session={session} />
          <Toaster
            theme="light"
            richColors
            visibleToasts={4}
            position="bottom-right"
            closeButton
            duration={4000}
            expand
          />
        </DeviceProvider>
      </body>
    </html>
  );
}