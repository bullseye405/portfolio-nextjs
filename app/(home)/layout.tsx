
import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary-light dark:bg-primary-dark transition-all duration-300 min-h-screen h-full">
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}
