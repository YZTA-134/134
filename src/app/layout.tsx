import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | Bereket AI",
    default:
      "Bereket AI: Prototype ",
  },
  description: "Evdeki mevcut malzemeleri, bozulma sürelerini ve haftalık bütçeyi kullanarak en az maliyetle en az gıda israfı oluşturacak yemek planı çıkaran yapay zeka destekli mobil mutfak planlayıcısı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body
      className="min-h-full flex flex-col"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="tema"
          disableTransitionOnChange
          enableColorScheme
          >
            <TooltipProvider>
              <Toaster />
              <main id="main-content" role="main">
        {children}
        </main>
        <Toaster />
        </TooltipProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}
