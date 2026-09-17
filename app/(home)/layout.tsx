import type { Metadata } from 'next';

import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import { ThemeProvider } from '@/components/theme-provider';

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
  );
}
