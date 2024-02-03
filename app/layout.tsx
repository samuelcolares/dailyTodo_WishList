import type { Metadata } from "next";
import { Inter, Whisper } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Todo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 flex items-center justify-center flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
