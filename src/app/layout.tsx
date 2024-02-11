import type {Metadata} from "next";
import {Urbanist} from "next/font/google";

import "@/assets/styles/globals.css";

const urbanist = Urbanist({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Appointment Application",
  description: "Appointment Application for Senior React Developer Role",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
