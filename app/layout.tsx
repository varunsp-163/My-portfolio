
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Varun S P | Software Engineer",
  description:
    "Hello! I am Varun S P, a Software Engineer & an entrepreneur, and this is my Portfolio Website! Get to know my skills, experience, projects and much more!",
  metadataBase: new URL("https://varunsp.vercel.app/"),
  openGraph: {
    type: "website",
    url: "https://varunsp.vercel.app/",
    title: "Varun S P | Software Engineer",
    description:
      "Hello! I am Varun S P, a Software Engineer & an entrepreneur, and this is my Portfolio Website! Get to know my skills, experience, projects and much more!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun S P | Software Engineer",
    description:
      "Hello! I am Varun S P, a Software Engineer & an entrepreneur, and this is my Portfolio Website! Get to know my skills, experience, projects and much more!",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
