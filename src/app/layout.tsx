'use client';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Montserrat } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from '@/config/config_context';

const montserrat = Montserrat({
  subsets: ['latin']
});

const queryClient = new QueryClient();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased h-screen overflow-hidden`}>
        <ContextProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          </ThemeProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </ContextProvider>
      </body>
    </html>
  );
}
