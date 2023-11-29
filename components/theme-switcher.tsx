'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const ThemeSwitcher = ({ smallScreen }: { smallScreen?: boolean }) => {
  const { setTheme, theme } = useTheme();

  const btnClass =
    'bg-primary-light dark:bg-ternary-dark p-3 shadow-sm cursor-pointer rounded-xl';
    
  return (
    <Button
      variant={'outline'}
      size={'icon'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={cn(btnClass, smallScreen ? 'sm:hidden ml-0' : 'ml-8')}
    >
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ThemeSwitcher;
