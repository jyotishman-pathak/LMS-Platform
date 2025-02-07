

import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ui/theme/theme-provider";
import {ClerkProvider} from '@clerk/nextjs'

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </ThemeProvider>

      
    </ClerkProvider>
  );
}
