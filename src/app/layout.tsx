import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

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

export const metadata: Metadata = {
  title: "Invitacionic",
  description: "Diseños personalizados para bodas, fiestas y eventos especiales. Dale un toque único a tus invitaciones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >  <AppRouterCacheProvider>

          <ThemeProvider theme={theme}>
            {children}          </ThemeProvider>
        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
