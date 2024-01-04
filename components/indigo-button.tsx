import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './ui/button';

const IndigoButton = ({ className, ...rest }: ButtonProps) => {

  return (
    <Button
      className={cn(
        'text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus-ring-indigo-900 duration-500',
        className
      )}
      {...rest}
    />
  );
};

export default IndigoButton;
