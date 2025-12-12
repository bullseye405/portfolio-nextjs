import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samir Prajapati | Full Stack Developer',
  description:
    'Portfolio and personal website of Samir Prajapati, a frontend-focused Full Stack Developer specializing in React, Next.js, and web development.',
  keywords: [
    'Samir Prajapati',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Portfolio',
    'Web Developer',
    'Frontend',
    'JavaScript',
    'TypeScript',
  ],
  authors: [{ name: 'Samir Prajapati', url: 'https://www.prajapati-samir.com.np/' }],
  creator: 'Samir Prajapati',
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
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
