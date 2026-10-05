import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Base Template | Landing, Auth & Admin",
  description: "Next.js, MongoDB, Tailwind, and Framer Motion boiler template ready to customize.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen relative">
        <div className="absolute inset-0 ambient-grid pointer-events-none z-0" />
        <div className="absolute inset-0 glow-radial pointer-events-none z-0" />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
