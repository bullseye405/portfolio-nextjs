import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samir Prajapati',
  description: 'Personal Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <div className="bg-secondary-light dark:bg-primary-dark transition-all duration-300 min-h-screen h-full">
            <AppHeader />
            {children}
            <AppFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
